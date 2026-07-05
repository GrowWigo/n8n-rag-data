# Node: Flow Trigger

**Name**: flowTrigger
**Category**: trigger
**Description**: Handle Flow events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource that triggers the webhook
  - Option: Project (value: list)
  - Option: Task (value: task)
- **listIds** (string): Lists IDs, perhaps known better as "Projects" separated by a comma (,)
- **taskIds** (string): Task IDs separated by a comma (,)
