# Node: Vero

**Name**: vero
**Category**: output
**Description**: Consume Vero API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: User (value: user)
  - Option: Event (value: event)
- **operation** (options): Operation
  - Option: Add Tags (value: addTags)
  - Option: Alias (value: alias)
  - Option: Create or Update (value: create)
  - Option: Delete (value: delete)
  - Option: Re-Subscribe (value: resubscribe)
  - Option: Remove Tags (value: removeTags)
  - Option: Unsubscribe (value: unsubscribe)
- **operation** (options): Operation
  - Option: Track (value: track)
- **id** (string): The unique identifier of the customer
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: email (value: undefined)
- **dataAttributesUi** (fixedCollection): Key value pairs that represent the custom user properties you want to update
  - Option: dataAttributesValues (value: undefined)
- **dataAttributesJson** (json): Key value pairs that represent the custom user properties you want to update
- **id** (string): The old unique identifier of the user
- **newId** (string): The new unique identifier of the user
- **id** (string): The unique identifier of the user
- **id** (string): The unique identifier of the user
- **id** (string): The unique identifier of the user
- **id** (string): The unique identifier of the user
- **tags** (string): Tags to add separated by ","
- **id** (string): The unique identifier of the user
- **tags** (string): Tags to remove separated by ","
- **id** (string): The unique identifier of the customer
- **email** (string): Email
- **eventName** (string): The name of the event tracked
- **jsonParameters** (boolean): JSON Parameters
- **dataAttributesUi** (fixedCollection): Key value pairs that represent any properties you want to track with this event
  - Option: dataAttributesValues (value: undefined)
- **extraAttributesUi** (fixedCollection): Key value pairs that represent reserved, Vero-specific operators. Refer to the note on “deduplication” below.
  - Option: extraAttributesValues (value: undefined)
- **dataAttributesJson** (json): Key value pairs that represent the custom user properties you want to update
- **extraAttributesJson** (json): Key value pairs that represent reserved, Vero-specific operators. Refer to the note on “deduplication” below.
