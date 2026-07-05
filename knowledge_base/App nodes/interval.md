# Node: Interval

**Name**: interval
**Category**: trigger, schedule
**Description**: Triggers the workflow in a given interval
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **notice** (notice): This workflow will run on the schedule you define here once you publish it.<br><br>For testing, you can also trigger it manually: by going back to the canvas and clicking 'execute workflow'
- **interval** (number): Interval value
- **unit** (options): Unit of the interval value
  - Option: Seconds (value: seconds)
  - Option: Minutes (value: minutes)
  - Option: Hours (value: hours)
