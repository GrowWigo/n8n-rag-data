# Node: Postgres Trigger

**Name**: postgresTrigger
**Category**: trigger
**Description**: Listens to Postgres messages
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **triggerMode** (options): Listen For
  - Option: Table Row Change Events (value: createTrigger)
  - Option: Advanced (value: listenTrigger)
- **schema** (resourceLocator): Schema Name
- **tableName** (resourceLocator): Table Name
- **channelName** (string): Name of the channel to listen to
- **firesOn** (options): Event to listen for
  - Option: Insert (value: INSERT)
  - Option: Update (value: UPDATE)
  - Option: Delete (value: DELETE)
- **additionalFields** (collection): Additional Fields
  - Option: channelName (value: undefined)
  - Option: functionName (value: undefined)
  - Option: replaceIfExists (value: undefined)
  - Option: triggerName (value: undefined)
- **options** (collection): Options
  - Option: connectionTimeout (value: undefined)
  - Option: delayClosingIdleConnection (value: undefined)
