# Node: PostBin

**Name**: postBin
**Category**: transform
**Description**: Consume PostBin API
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
  - Option: Bin (value: bin)
  - Option: Request (value: request)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Delete (value: delete)
- **binId** (string): Unique identifier for each bin
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Remove First (value: removeFirst)
  - Option: Send (value: send)
- **binId** (string): Unique identifier for each bin
- **binContent** (string): Bin Content
- **requestId** (string): Unique identifier for each request
