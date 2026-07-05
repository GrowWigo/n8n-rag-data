# Node: Twist

**Name**: twist
**Category**: input
**Description**: Consume Twist API
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
  - Option: Channel (value: channel)
  - Option: Comment (value: comment)
  - Option: Message Conversation (value: messageConversation)
  - Option: Thread (value: thread)
- **operation** (options): Operation
  - Option: Archive (value: archive)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Unarchive (value: unarchive)
  - Option: Update (value: update)
- **workspaceId** (options): The ID of the workspace. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **name** (string): The name of the channel
- **additionalFields** (collection): Additional Fields
  - Option: color (value: undefined)
  - Option: description (value: undefined)
  - Option: public (value: undefined)
  - Option: temp_id (value: undefined)
  - Option: user_ids (value: undefined)
- **channelId** (string): The ID of the channel
- **workspaceId** (options): The ID of the workspace. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: archived (value: undefined)
- **channelId** (string): The ID of the channel
- **updateFields** (collection): Update Fields
  - Option: color (value: undefined)
  - Option: description (value: undefined)
  - Option: name (value: undefined)
  - Option: public (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **threadId** (string): The ID of the thread
- **content** (string): The content of the comment
- **additionalFields** (collection): Additional Fields
  - Option: actionsUi (value: undefined)
  - Option: binaryProperties (value: undefined)
  - Option: direct_mentions (value: undefined)
  - Option: mark_thread_position (value: undefined)
  - Option: recipients (value: undefined)
  - Option: temp_id (value: undefined)
  - Option: send_as_integration (value: undefined)
- **commentId** (string): The ID of the comment
- **threadId** (string): The ID of the channel
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: as_ids (value: undefined)
  - Option: to_obj_index (value: undefined)
  - Option: newer_than_ts (value: undefined)
  - Option: older_than_ts (value: undefined)
  - Option: order_by (value: undefined)
  - Option: from_obj_index (value: undefined)
- **commentId** (string): The ID of the comment
- **updateFields** (collection): Update Fields
  - Option: actionsUi (value: undefined)
  - Option: binaryProperties (value: undefined)
  - Option: content (value: undefined)
  - Option: direct_mentions (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **workspaceId** (options): The ID of the workspace. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **conversationId** (options): The ID of the conversation. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **content** (string): The content of the new message. Mentions can be used as <code>[Name](twist-mention://user_id)</code> for users or <code>[Group name](twist-group-mention://group_id)</code> for groups.
- **additionalFields** (collection): Other options to set
  - Option: actionsUi (value: undefined)
  - Option: binaryProperties (value: undefined)
  - Option: direct_mentions (value: undefined)
- **workspaceId** (options): The ID of the workspace. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **conversationId** (options): The ID of the conversation. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Other options to set
  - Option: to_obj_index (value: undefined)
  - Option: limit (value: undefined)
  - Option: order_by (value: undefined)
  - Option: from_obj_index (value: undefined)
- **id** (string): The ID of the conversation message
- **id** (string): The ID of the conversation message
- **updateFields** (collection): Other options to set
  - Option: actionsUi (value: undefined)
  - Option: binaryProperties (value: undefined)
  - Option: content (value: undefined)
  - Option: direct_mentions (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **channelId** (string): The ID of the channel
- **title** (string): The title of the new thread (1 < length < 300)
- **content** (string): The content of the thread
- **additionalFields** (collection): Additional Fields
  - Option: actionsUi (value: undefined)
  - Option: binaryProperties (value: undefined)
  - Option: direct_mentions (value: undefined)
  - Option: recipients (value: undefined)
  - Option: send_as_integration (value: undefined)
  - Option: temp_id (value: undefined)
- **threadId** (string): The ID of the thread
- **channelId** (string): The ID of the channel
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: as_ids (value: undefined)
  - Option: filter_by (value: undefined)
  - Option: newer_than_ts (value: undefined)
  - Option: older_than_ts (value: undefined)
- **threadId** (string): The ID of the thread
- **updateFields** (collection): Update Fields
  - Option: actionsUi (value: undefined)
  - Option: binaryProperties (value: undefined)
  - Option: content (value: undefined)
  - Option: direct_mentions (value: undefined)
  - Option: title (value: undefined)
