# Node: Monday.com

**Name**: mondayCom
**Category**: output
**Description**: Consume Monday.com API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Board (value: board)
  - Option: Board Column (value: boardColumn)
  - Option: Board Group (value: boardGroup)
  - Option: Board Item (value: boardItem)
- **operation** (options): Operation
  - Option: Archive (value: archive)
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **boardId** (options): Board unique identifiers. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **name** (string): The board's name
- **kind** (options): The board's kind (public / private / share)
  - Option: Share (value: share)
  - Option: Public (value: public)
  - Option: Private (value: private)
- **additionalFields** (collection): Additional Fields
  - Option: templateId (value: undefined)
- **boardId** (options): Board unique identifiers. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **boardId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **title** (string): Title
- **columnType** (options): Column Type
  - Option: Checkbox (value: checkbox)
  - Option: Country (value: country)
  - Option: Date (value: date)
  - Option: Dropdown (value: dropdown)
  - Option: Email (value: email)
  - Option: Hour (value: hour)
  - Option: Link (value: Link)
  - Option: Long Text (value: longText)
  - Option: Numbers (value: numbers)
  - Option: People (value: people)
  - Option: Person (value: person)
  - Option: Phone (value: phone)
  - Option: Rating (value: rating)
  - Option: Status (value: status)
  - Option: Tags (value: tags)
  - Option: Team (value: team)
  - Option: Text (value: text)
  - Option: Timeline (value: timeline)
  - Option: Timezone (value: timezone)
  - Option: Week (value: week)
  - Option: World Clock (value: worldClock)
- **additionalFields** (collection): Additional Fields
  - Option: defaults (value: undefined)
- **boardId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **boardId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **name** (string): The group name
- **boardId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **groupId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **boardId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **operation** (options): Operation
  - Option: Add Update (value: addUpdate)
  - Option: Change Column Value (value: changeColumnValue)
  - Option: Change Multiple Column Values (value: changeMultipleColumnValues)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get By Column Value (value: getByColumnValue)
  - Option: Get Many (value: getAll)
  - Option: Move (value: move)
- **itemId** (string): The unique identifier of the item to add update to
- **value** (string): The update text to add
- **boardId** (options): The unique identifier of the board. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **itemId** (string): The unique identifier of the item to change column of
- **columnId** (options): The column's unique identifier. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **value** (json): The column value in JSON format. Documentation can be found <a href="https://monday.com/developers/v2#mutations-section-columns-change-column-value">here</a>.
- **boardId** (options): The unique identifier of the board. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **itemId** (string): Item's ID
- **columnValues** (json): The column fields and values in JSON format. Documentation can be found <a href="https://monday.com/developers/v2#mutations-section-columns-change-multiple-column-values">here</a>.
- **boardId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **groupId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **name** (string): The new item's name
- **additionalFields** (collection): Additional Fields
  - Option: columnValues (value: undefined)
- **itemId** (string): Item's ID
- **itemId** (string): Item's ID (Multiple can be added separated by comma)
- **boardId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **groupId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **boardId** (options): The unique identifier of the board. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **columnId** (options): The column's unique identifier. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **columnValue** (string): The column value to search items by
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **boardId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **itemId** (string): The item's ID
- **groupId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
