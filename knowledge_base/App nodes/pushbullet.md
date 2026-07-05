# Node: Pushbullet

**Name**: pushbullet
**Category**: input
**Description**: Consume Pushbullet API
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
  - Option: Push (value: push)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **type** (options): Type
  - Option: File (value: file)
  - Option: Link (value: link)
  - Option: Note (value: note)
- **title** (string): Title of the push
- **body** (string): Body of the push
- **url** (string): URL of the push
- **binaryPropertyName** (string): Input Binary Field
- **target** (options): Define the medium that will be used to send the push
  - Option: Channel Tag (value: channel_tag)
  - Option: Default (value: default)
  - Option: Device ID (value: device_iden)
  - Option: Email (value: email)
- **value** (string): The value to be set depending on the target selected. For example, if the target selected is email then this field would take the email address of the person you are trying to send the push to.
- **value** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **pushId** (string): Push ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: active (value: undefined)
  - Option: modified_after (value: undefined)
- **pushId** (string): Push ID
- **dismissed** (boolean): Whether to mark a push as having been dismissed by the user, will cause any notifications for the push to be hidden if possible
