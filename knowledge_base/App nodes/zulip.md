# Node: Zulip

**Name**: zulip
**Category**: output
**Description**: Consume Zulip API
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
  - Option: Message (value: message)
  - Option: Stream (value: stream)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Send Private (value: sendPrivate)
  - Option: Send to Stream (value: sendStream)
  - Option: Update (value: update)
  - Option: Upload a File (value: updateFile)
- **to** (multiOptions): The destination stream, or a comma-separated list containing the usernames (emails) of the recipients. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **content** (string): The content of the message
- **stream** (options): The destination stream, or a comma-separated list containing the usernames (emails) of the recipients. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **topic** (options): The topic of the message. Only required if type is stream, ignored otherwise. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **content** (string): The content of the message
- **messageId** (string): Unique identifier for the message
- **updateFields** (collection): Update Fields
  - Option: content (value: undefined)
  - Option: propagateMode (value: undefined)
  - Option: topic (value: undefined)
- **messageId** (string): Unique identifier for the message
- **messageId** (string): Unique identifier for the message
- **dataBinaryProperty** (string): Put Output File in Field
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Get Subscribed (value: getSubscribed)
  - Option: Update (value: update)
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): JSON format parameters for stream creation
- **subscriptions** (fixedCollection): A list of dictionaries containing the the key name and value specifying the name of the stream to subscribe. If the stream does not exist a new stream is created.
  - Option: properties (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: announce (value: undefined)
  - Option: authorizationErrorsFatal (value: undefined)
  - Option: historyPublicToSubscribers (value: undefined)
  - Option: inviteOnly (value: undefined)
  - Option: principals (value: undefined)
  - Option: streamPostPolicy (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: includeAllActive (value: undefined)
  - Option: includeDefault (value: undefined)
  - Option: includeOwnersubscribed (value: undefined)
  - Option: includePublic (value: undefined)
  - Option: includeSubscribed (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: includeSubscribers (value: undefined)
- **streamId** (string): ID of stream to update
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): JSON format parameters for stream creation
- **additionalFields** (collection): Additional Fields
  - Option: isAnnouncementOnly (value: undefined)
  - Option: description (value: undefined)
  - Option: isPrivate (value: undefined)
  - Option: historyPublicToSubscribers (value: undefined)
  - Option: newName (value: undefined)
  - Option: streamPostPolicy (value: undefined)
- **streamId** (string): ID of stream to delete
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Deactivate (value: deactivate)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **email** (string): The email address of the new user
- **fullName** (string): The full name of the new user
- **password** (string): The password of the new user
- **shortName** (string): The short name of the new user. Not user-visible.
- **userId** (string): The ID of user to get
- **additionalFields** (collection): Additional Fields
  - Option: clientGravatar (value: undefined)
  - Option: includeCustomProfileFields (value: undefined)
- **userId** (string): The ID of user to update
- **additionalFields** (collection): Additional Fields
  - Option: fullName (value: undefined)
  - Option: isAdmin (value: undefined)
  - Option: isGuest (value: undefined)
  - Option: profileData (value: undefined)
  - Option: role (value: undefined)
- **userId** (string): The ID of user to deactivate
