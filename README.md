plumber-schemas
===============

This repo contains protobuf schemas that are used by `plumber` and `plumber-ui`
when communicating over gRPC.

# Making changes

1. `git co -b username/change`
1. `make generate/go`
1. `git add -a`
1. `git commit -a -m "updated schema XYZ`
1. `git push origin head`
1. Open PR, review, merge

The `build` workflow will automatically create a tag for the last commit.
