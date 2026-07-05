# Node: Schedule Trigger

**Name**: scheduleTrigger
**Category**: trigger, schedule
**Description**: Triggers the workflow on a given schedule
**Version**: 1, 1.1, 1.2, 1.3

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **notice** (notice): This workflow will run on the schedule you define here once you publish it.<br><br>For testing, you can also trigger it manually: by going back to the canvas and clicking 'execute workflow'
- **rule** (fixedCollection): Trigger Rules
  - Option: interval (value: undefined)
