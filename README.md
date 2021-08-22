plumber-schemas
===============

This repo contains protobuf schemas that are used by `plumber` and `plumber-ui`
when communicating over gRPC.

# Making changes

1. `git co -b username/change`
1. `make generate/go`
1. `make generate/ts`
3. `git add -a`
4. `git commit -a -m "updated schema XYZ`
5. `git push origin head`
6. Open PR, review, merge

The `build` workflow will automatically create a tag for the last commit.
