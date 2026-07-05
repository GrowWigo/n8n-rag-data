# Node: Baserow

**Name**: baserow
**Category**: output
**Description**: Consume the Baserow API
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Username & Password (value: usernamePassword)
  - Option: Database Token (value: databaseToken)
- **resource** (options): Resource
  - Option: Row (value: row)
- **operation** (options): Operation
  - Option: Batch Create (value: batchCreate)
  - Option: Batch Delete (value: batchDelete)
  - Option: Batch Update (value: batchUpdate)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **databaseId** (options): Database to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **tableId** (options): Table to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **rowId** (string): ID of the row to return
- **rowId** (string): ID of the row to update
- **dataToSend** (options): Whether to insert the input data this node receives in the new row
  - Option: Auto-Map Input Data to Columns (value: autoMapInputData)
  - Option: Define Below for Each Column (value: defineBelow)
- **inputsToIgnore** (string): List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
- **fieldsUi** (fixedCollection): Fields to Send
  - Option: fieldValues (value: undefined)
- **rowsUi** (fixedCollection): Rows
  - Option: rowValues (value: undefined)
- **dataToSend** (options): Choose whether to manually enter row IDs or map them from input data
  - Option: Auto-Map Input Data (value: autoMapInputData)
  - Option: Define Below (value: defineBelow)
- **rowId** (string): ID of the row to delete
- **rowIds** (string): IDs of the rows to delete
- **rowIdProperty** (string): Name of the property in each input item that contains the row ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalOptions** (collection): Options
  - Option: filters (value: undefined)
  - Option: filterType (value: undefined)
  - Option: search (value: undefined)
  - Option: order (value: undefined)
