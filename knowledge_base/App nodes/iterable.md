# Node: Iterable

**Name**: iterable
**Category**: input
**Description**: Consume Iterable API
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
  - Option: Event (value: event)
  - Option: User (value: user)
  - Option: User List (value: userList)
- **operation** (options): Operation
  - Option: Track (value: track)
- **name** (string): The name of the event to track
- **additionalFields** (collection): Additional Fields
  - Option: campaignId (value: undefined)
  - Option: createdAt (value: undefined)
  - Option: dataFieldsUi (value: undefined)
  - Option: email (value: undefined)
  - Option: id (value: undefined)
  - Option: templateId (value: undefined)
  - Option: userId (value: undefined)
- **operation** (options): Operation
  - Option: Create or Update (value: upsert)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
- **identifier** (options): Identifier to be used
  - Option: Email (value: email)
  - Option: User ID (value: userId)
- **value** (string): Value
- **preferUserId** (boolean): Whether to create a new user if the idetifier does not exist
- **additionalFields** (collection): Additional Fields
  - Option: dataFieldsUi (value: undefined)
  - Option: mergeNestedObjects (value: undefined)
- **by** (options): Identifier to be used
  - Option: Email (value: email)
  - Option: User ID (value: userId)
- **userId** (string): Unique identifier for a particular user
- **email** (string): Email for a particular user
- **by** (options): Identifier to be used
  - Option: Email (value: email)
  - Option: User ID (value: userId)
- **userId** (string): Unique identifier for a particular user
- **email** (string): Email for a particular user
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **listId** (options): Identifier to be used. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **identifier** (options): Identifier to be used
  - Option: Email (value: email)
  - Option: User ID (value: userId)
- **value** (string): Value
- **listId** (options): Identifier to be used. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **identifier** (options): Identifier to be used
  - Option: Email (value: email)
  - Option: User ID (value: userId)
- **value** (string): Value
- **additionalFields** (collection): Additional Fields
  - Option: campaignId (value: undefined)
  - Option: channelUnsubscribe (value: undefined)
