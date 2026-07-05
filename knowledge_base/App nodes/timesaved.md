# Node: Track Time Saved

**Name**: timeSaved
**Category**: organization
**Description**: Dynamically track time saved based on the workflow’s execution path and the number of items processed
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **notice** (notice): For each run, time saved is the sum of all Time Saved nodes that execute. Use this when different execution paths or items save different amounts of time.
- **mode** (options): Calculation Mode
  - Option: Once For All Items (value: once)
  - Option: Per Item (value: perItem)
- **minutesSaved** (number): Number of minutes saved by this workflow execution
