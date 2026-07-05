# Node: Stackby

**Name**: stackby
**Category**: transform
**Description**: Read, write, and delete data in Stackby
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation
  - Option: Append (value: append)
  - Option: Delete (value: delete)
  - Option: List (value: list)
  - Option: Read (value: read)
- **stackId** (string): The ID of the stack to access
- **table** (string): Enter Table Name
- **id** (string): ID of the record to return
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: view (value: undefined)
- **columns** (string): Comma-separated list of the properties which should used as columns for the new rows
