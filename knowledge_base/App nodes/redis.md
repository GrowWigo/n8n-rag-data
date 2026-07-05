# Node: Redis

**Name**: redis
**Category**: input
**Description**: Get, send and update data in Redis
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Increment (value: incr)
  - Option: Info (value: info)
  - Option: Keys (value: keys)
  - Option: List Length (value: llen)
  - Option: Pop (value: pop)
  - Option: Publish (value: publish)
  - Option: Push (value: push)
  - Option: Set (value: set)
- **key** (string): Name of the key to delete from Redis
- **propertyName** (string): Name of the property to write received data to. Supports dot-notation. Example: "data.person[0].name".
- **key** (string): Name of the key to get from Redis
- **keyType** (options): The type of the key to get
  - Option: Automatic (value: automatic)
  - Option: Hash (value: hash)
  - Option: List (value: list)
  - Option: Sets (value: sets)
  - Option: String (value: string)
- **options** (collection): Options
  - Option: dotNotation (value: undefined)
- **key** (string): Name of the key to increment
- **expire** (boolean): Whether to set a timeout on key
- **ttl** (number): Number of seconds before key expiration
- **keyPattern** (string): The key pattern for the keys to return
- **getValues** (boolean): Whether to get the value of matching keys
- **list** (string): Name of the list in Redis
- **list** (string): Name of the list in Redis
- **key** (string): Name of the key to set in Redis
- **value** (string): The value to write in Redis
- **keyType** (options): The type of the key to set
  - Option: Automatic (value: automatic)
  - Option: Hash (value: hash)
  - Option: List (value: list)
  - Option: Sets (value: sets)
  - Option: String (value: string)
- **valueIsJSON** (boolean): Whether the value is JSON or key value pairs
- **expire** (boolean): Whether to set a timeout on key
- **ttl** (number): Number of seconds before key expiration
- **channel** (string): Channel name
- **messageData** (string): Data to publish
- **list** (string): Name of the list in Redis
- **messageData** (string): Data to push
- **tail** (boolean): Whether to push or pop data from the end of the list
- **propertyName** (string): Optional name of the property to write received data to. Supports dot-notation. Example: "data.person[0].name".
- **options** (collection): Options
  - Option: dotNotation (value: undefined)
