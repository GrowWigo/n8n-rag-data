# Node: Redis Trigger

**Name**: redisTrigger
**Category**: trigger
**Description**: Subscribe to redis channel
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **channels** (string): Channels to subscribe to, multiple channels be defined with comma. Wildcard character(*) is supported.
- **options** (collection): Options
  - Option: jsonParseBody (value: undefined)
  - Option: onlyMessage (value: undefined)
