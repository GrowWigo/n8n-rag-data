# Node: Rundeck

**Name**: rundeck
**Category**: transform
**Description**: Manage Rundeck API
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
  - Option: Job (value: job)
- **operation** (options): Operation
  - Option: Execute (value: execute)
  - Option: Get Metadata (value: getMetadata)
- **jobid** (string): The job ID to execute
- **arguments** (fixedCollection): Arguments
  - Option: arguments (value: undefined)
- **filter** (string): Filter Rundeck nodes by name
- **jobid** (string): The job ID to get metadata off
