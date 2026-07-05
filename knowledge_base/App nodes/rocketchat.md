# Node: RocketChat

**Name**: rocketchat
**Category**: output
**Description**: Consume RocketChat API
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
  - Option: Chat (value: chat)
- **operation** (options): Operation
  - Option: Post Message (value: postMessage)
- **channel** (string): The channel name with the prefix in front of it
- **text** (string): The text of the message to send, is optional because of attachments
- **jsonParameters** (boolean): JSON Parameters
- **options** (collection): Options
  - Option: alias (value: undefined)
  - Option: avatar (value: undefined)
  - Option: emoji (value: undefined)
- **attachments** (collection): Attachments
  - Option: color (value: undefined)
  - Option: text (value: undefined)
  - Option: ts (value: undefined)
  - Option: thumbUrl (value: undefined)
  - Option: messageLink (value: undefined)
  - Option: collapsed (value: undefined)
  - Option: authorName (value: undefined)
  - Option: authorLink (value: undefined)
  - Option: authorIcon (value: undefined)
  - Option: title (value: undefined)
  - Option: titleLink (value: undefined)
  - Option: titleLinkDownload (value: undefined)
  - Option: imageUrl (value: undefined)
  - Option: audioUrl (value: undefined)
  - Option: videoUrl (value: undefined)
  - Option: fields (value: undefined)
- **attachmentsJson** (json): Attachments
