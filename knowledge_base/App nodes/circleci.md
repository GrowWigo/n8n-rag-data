# Node: CircleCI

**Name**: circleCi
**Category**: output
**Description**: Consume CircleCI API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Pipeline (value: pipeline)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Trigger (value: trigger)
- **vcs** (options): Source control system
  - Option: Bitbucket (value: bitbucket)
  - Option: GitHub (value: github)
- **projectSlug** (string): Project slug in the form org-name/repo-name
- **pipelineNumber** (number): The number of the pipeline
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: branch (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: branch (value: undefined)
  - Option: tag (value: undefined)
