# Node: Matrix

**Name**: matrix
**Category**: output
**Description**: Consume Matrix API
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
  - Option: Account (value: account)
  - Option: Event (value: event)
  - Option: Media (value: media)
  - Option: Message (value: message)
  - Option: Room (value: room)
  - Option: Room Member (value: roomMember)
- **operation** (options): Operation
  - Option: Me (value: me)
- **operation** (options): Operation
  - Option: Get (value: get)
- **roomId** (string): The room related to the event
- **eventId** (string): The room related to the event
- **operation** (options): Operation
  - Option: Upload (value: upload)
- **roomId** (options): Room ID to post. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **binaryPropertyName** (string): Input Binary Field
- **mediaType** (options): Type of file being uploaded
  - Option: File (value: file)
  - Option: Image (value: image)
  - Option: Audio (value: audio)
  - Option: Video (value: video)
- **additionalFields** (collection): Additional Fields
  - Option: fileName (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **roomId** (options): The channel to send the message to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **text** (string): The text to send
- **messageType** (options): The type of message to send
  - Option: Emote (value: m.emote)
  - Option: Notice (value: m.notice)
  - Option: Text (value: m.text)
- **messageFormat** (options): The format of the message's body
  - Option: Plain Text (value: plain)
  - Option: HTML (value: org.matrix.custom.html)
- **fallbackText** (string): A plain text message to display in case the HTML cannot be rendered by the Matrix client
- **roomId** (options): The token to start returning events from. This token can be obtained from a prev_batch token returned for each room by the sync API. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **otherOptions** (collection): Other Options
  - Option: filter (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Invite (value: invite)
  - Option: Join (value: join)
  - Option: Kick (value: kick)
  - Option: Leave (value: leave)
- **roomName** (string): Room Name
- **preset** (options): Preset
  - Option: Private Chat (value: private_chat)
  - Option: Public Chat (value: public_chat)
- **roomAlias** (string): Room Alias
- **roomIdOrAlias** (string): Room ID or Alias
- **roomId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **roomId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **userId** (string): The fully qualified user ID of the invitee
- **roomId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **userId** (string): The fully qualified user ID
- **reason** (string): Reason for kick
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **roomId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **filters** (collection): Filtering options
  - Option: notMembership (value: undefined)
  - Option: membership (value: undefined)
