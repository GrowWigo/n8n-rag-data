# Node: Npm

**Name**: npm
**Category**: input
**Description**: Consume NPM registry API
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
  - Option: Package (value: package)
  - Option: Distribution Tag (value: distTag)
- **operation** (options): Operation
  - Option: Get Metadata (value: getMetadata)
  - Option: Get Versions (value: getVersions)
  - Option: Search (value: search)
- **packageName** (string): Package Name
- **packageVersion** (string): Package Version
- **query** (string): The query text used to search for packages
- **limit** (number): Max number of results to return
- **offset** (number): Offset to return results from
- **operation** (options): Operation
  - Option: Get All (value: getMany)
  - Option: Update (value: update)
- **packageName** (string): Package Name
- **packageVersion** (string): Package Version
- **distTagName** (string): Distribution Tag Name
