# Node: Wekan

**Name**: wekan
**Category**: transform
**Description**: Consume Wekan API
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
  - Option: Board (value: board)
  - Option: Card (value: card)
  - Option: Card Comment (value: cardComment)
  - Option: Checklist (value: checklist)
  - Option: Checklist Item (value: checklistItem)
  - Option: List (value: list)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **title** (string): The title of the board
- **owner** (options): The user ID in Wekan. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: isActive (value: undefined)
  - Option: isAdmin (value: undefined)
  - Option: color (value: undefined)
  - Option: isCommentOnly (value: undefined)
  - Option: isNoComments (value: undefined)
  - Option: permission (value: undefined)
  - Option: isWorker (value: undefined)
- **boardId** (string): The ID of the board to delete
- **boardId** (string): The ID of the board to get
- **IdUser** (options): The ID of the user that boards are attached. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **boardId** (options): The ID of the board that list belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list to create card in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **title** (string): The title of the card
- **swimlaneId** (options): The swimlane ID of the new card. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **authorId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **additionalFields** (collection): Additional Fields
  - Option: assignees (value: undefined)
  - Option: description (value: undefined)
  - Option: members (value: undefined)
- **boardId** (options): The ID of the board that list belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **boardId** (options): The ID of the board that list belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (string): The ID of the card to get
- **boardId** (options): The ID of the board that list belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **fromObject** (options): From Object
  - Option: List (value: list)
  - Option: Swimlane (value: swimlane)
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **swimlaneId** (options): The ID of the swimlane that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **boardId** (options): The ID of the board that list belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **updateFields** (collection): Update Fields
  - Option: authorId (value: undefined)
  - Option: assignees (value: undefined)
  - Option: color (value: undefined)
  - Option: description (value: undefined)
  - Option: dueAt (value: undefined)
  - Option: endAt (value: undefined)
  - Option: labelIds (value: undefined)
  - Option: listId (value: undefined)
  - Option: members (value: undefined)
  - Option: isOverTime (value: undefined)
  - Option: parentId (value: undefined)
  - Option: receivedAt (value: undefined)
  - Option: sort (value: undefined)
  - Option: spentTime (value: undefined)
  - Option: startAt (value: undefined)
  - Option: swimlaneId (value: undefined)
  - Option: title (value: undefined)
- **boardId** (options): The ID of the board that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **authorId** (options): The user who posted the comment. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **comment** (string): The comment text
- **boardId** (options): The ID of the board that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **commentId** (options): The ID of the comment to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **boardId** (string): The ID of the board that card belongs to
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **commentId** (string): The ID of the comment to get
- **boardId** (options): The ID of the board that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **boardId** (options): The ID of the board where the card is in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card to add checklist to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **title** (string): The title of the checklist to add
- **items** (string): Items to be added to the checklist
- **boardId** (options): The ID of the board that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card that checklist belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **checklistId** (options): The ID of the checklist to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **boardId** (options): The ID of the board that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card that checklist belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **checklistId** (options): The ID of the checklist to get. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **boardId** (options): The ID of the board that list belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card to get checklists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **boardId** (options): The ID of the board that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card that checklistItem belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **checklistId** (options): The ID of the checklistItem that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **checklistItemId** (options): The ID of the checklistItem item to get. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **boardId** (options): The ID of the board that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card that checklistItem belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **checklistId** (string): The ID of the checklistItem that card belongs to
- **checklistItemId** (options): The ID of the checklistItem item to get. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **boardId** (options): The ID of the board that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **cardId** (options): The ID of the card that checklistItem belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **checklistId** (options): The ID of the checklistItem that card belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **checklistItemId** (options): The ID of the checklistItem item to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **updateFields** (collection): Update Fields
  - Option: title (value: undefined)
  - Option: isFinished (value: undefined)
- **boardId** (options): The ID of the board the list should be created in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **title** (string): The title of the list
- **boardId** (options): The ID of the board that list belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (options): The ID of the list to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **boardId** (options): The ID of the board that list belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **listId** (string): The ID of the list to get
- **boardId** (options): ID of the board where the lists are in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
