# Node: Simulate

**Name**: simulate
**Category**: organization
**Description**: Simulate a node
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **icon** (options): Select a type of node to show corresponding icon
- **subtitle** (string): Subtitle
- **output** (options): Output
  - Option: Returns all input items (value: all)
  - Option: Specify how many of input items to return (value: specify)
  - Option: Specify output as JSON (value: custom)
- **numberOfItems** (number): Number input of items to return, if greater then input length all items will be returned
- **jsonOutput** (json): JSON
- **executionDuration** (number): Execution duration in milliseconds
