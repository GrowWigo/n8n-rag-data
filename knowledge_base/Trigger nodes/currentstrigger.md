# Node: Currents Trigger

**Name**: currentsTrigger
**Category**: trigger
**Description**: Starts the workflow when Currents events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **projectId** (resourceLocator): The Currents project
- **noticeGroups** (notice): Currents sends separate webhook events for each group in a run. If your run has multiple groups, you will receive separate events for each group.
- **events** (multiOptions): The events to listen to
  - Option: Run Canceled (value: RUN_CANCELED)
  - Option: Run Finished (value: RUN_FINISH)
  - Option: Run Started (value: RUN_START)
  - Option: Run Timeout (value: RUN_TIMEOUT)
