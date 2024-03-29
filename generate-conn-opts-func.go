// This script will generate a helper func for generating connection options.
// This func is used by the CLI to avoid having to write out a switch manually.
package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"regexp"
	"strings"
)

const (
	connectionOptionsFilename = "./build/go/protos/opts/batch_connection_options.pb.go"
)

type BackendMapping struct {
	WrapperStructName string
	ConnArgsName      string // *args.ActiveMqConn
}

func main() {
	path, err := os.Getwd()
	if err != nil {
		log.Fatalf("unable to get working dir: %s", err)
	}

	grepArgs := []string{"-R", `func (x \*ConnectionOptions) Get.\+() \*args\.`, path + "/build/go/protos/opts"}

	// Build list of all *.pb.go's files that contain a private interface
	out, err := exec.Command("grep", grepArgs...).CombinedOutput()
	if err != nil {
		log.Fatalf("unable to exec grep\nOutput: %s\nError: %s", string(out), err)
	}

	// key = backend name
	mappings := make(map[string]BackendMapping, 0)

	lines := strings.Split(string(out), "\n")

	// Generate mappings
	for _, line := range lines {
		if len(line) == 0 {
			continue
		}

		// Looking for: func (m *ConnectionOptions) GetKubemqQueue() *args.KubeMQQueueConn {
		r, err := regexp.Compile(`func \(x \*ConnectionOptions\) Get([a-zA-Z_]+)\(\) \*(args\.[a-zA-Z_]+) {`)
		if err != nil {
			log.Fatalf("unable to compile regex: %s", err)
		}

		found := r.FindStringSubmatch(line)

		if len(found) != 3 {
			log.Fatalf("unexpected number of regex matches '%d'", len(found))
		}

		loweredBackendName := strings.ToLower(found[1])
		bm := BackendMapping{
			WrapperStructName: found[1],
			ConnArgsName:      found[2],
		}

		mappings[loweredBackendName] = bm
	}

	if len(mappings) == 0 {
		log.Fatalf("something went wrong - 0 mappings found for connections")
	}

	fileContents, err := createFileContents(mappings)
	if err != nil {
		log.Fatalf("unable to create file contents: %s", err)
	}

	if err := writeFile(connectionOptionsFilename, fileContents); err != nil {
		log.Fatalf("unable to write file '%s': %s", connectionOptionsFilename, err)
	}

	fmt.Printf("Successfully generated file '%s' with '%d' backends\n", connectionOptionsFilename, len(mappings))
}

func writeFile(filename string, contents []byte) error {
	f, err := os.Create(filename)
	if err != nil {
		return fmt.Errorf("unable to create file '%s': %s", filename, err)
	}

	if _, err := f.Write(contents); err != nil {
		return fmt.Errorf("unable to write to file '%s': %s", filename, err)
	}

	if err := f.Close(); err != nil {
		return fmt.Errorf("unable to close file '%s': %s", filename, err)
	}

	return nil
}

func createFileContents(mappings map[string]BackendMapping) ([]byte, error) {
	contents := `// Code generated by generate-conn-opt-func.go. DO NOT EDIT.

package opts

import (
	"github.com/batchcorp/plumber-schemas/build/go/protos/args"
)

func GenerateConnOpts(backend string, connArgs interface{}) (IsConnectionOptions_Conn, bool) {
	switch backend {
`
	for backendName, mapping := range mappings {
		caseEntry := fmt.Sprintf("\tcase \"%s\":\n", backendName)
		caseEntry += fmt.Sprintf("\t\tasserted, ok := connArgs.(%s)\n\t\tif !ok {\n\t\t\treturn nil, false\n\t\t}\n\n\t\treturn &ConnectionOptions_%s{\n\t\t\t%s: &asserted,\n\t\t}, true\n",
			mapping.ConnArgsName, mapping.WrapperStructName, mapping.WrapperStructName)

		contents += caseEntry
	}

	// Close the switch and func
	contents += fmt.Sprint("\tdefault:\n\t\treturn nil, false\n\t}\n}\n")

	return []byte(contents), nil
}
