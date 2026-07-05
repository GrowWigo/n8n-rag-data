# Node: TravisCI

**Name**: travisCi
**Category**: output
**Description**: Consume TravisCI API
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
  - Option: Build (value: build)
- **operation** (options): Operation
  - Option: Cancel (value: cancel)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Restart (value: restart)
  - Option: Trigger (value: trigger)
- **buildId** (string): Value uniquely identifying the build
- **buildId** (string): Value uniquely identifying the build
- **additionalFields** (collection): Additional Fields
  - Option: include (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: include (value: undefined)
  - Option: order (value: undefined)
  - Option: sortBy (value: undefined)
- **buildId** (string): Value uniquely identifying the build
- **slug** (string): Same as {ownerName}/{repositoryName}
- **branch** (string): Branch requested to be built
- **additionalFields** (collection): Additional Fields
  - Option: message (value: undefined)
  - Option: mergeMode (value: undefined)
