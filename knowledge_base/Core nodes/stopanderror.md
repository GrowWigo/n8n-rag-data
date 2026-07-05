# Node: Stop and Error

**Name**: stopAndError
**Category**: input
**Description**: Throw an error in the workflow
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
[]

## Properties & Settings
These are the settings you can configure for this node:

- **errorType** (options): Type of error to throw
  - Option: Error Message (value: errorMessage)
  - Option: Error Object (value: errorObject)
- **errorMessage** (string): Error Message
- **errorObject** (json): Object containing error properties
