# Node: NocoDB

**Name**: nocoDb
**Category**: input
**Description**: Read, update, write and delete data from NocoDB
**Version**: 1, 2, 3

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: API Token (value: nocoDbApiToken)
  - Option: User Token (value: nocoDb)
- **version** (options): API Version
  - Option: Before v0.90.0 (value: 1)
  - Option: v0.90.0 Onwards (value: 2)
  - Option: v0.200.0 Onwards (value: 3)
- **version** (options): API Version
  - Option: Before v0.90.0 (value: 1)
  - Option: v0.90.0 Onwards (value: 2)
  - Option: v0.200.0 Onwards (value: 3)
- **version** (options): API Version
  - Option: Before v0.90.0 (value: 1)
  - Option: v0.90.0 Onwards (value: 2)
  - Option: v0.200.0 Onwards (value: 3)
- **resource** (options): Resource
  - Option: Row (value: row)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **projectId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **projectId** (string): The ID of the project
- **projectId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **table** (options): The table to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **table** (string): The name of the table
- **primaryKey** (options): Primary Key Type
  - Option: Default (value: id)
  - Option: Imported From Airtable (value: ncRecordId)
  - Option: Custom (value: custom)
- **primaryKey** (options): Primary Key Type
  - Option: Default (value: id)
  - Option: Imported From Airtable (value: ncRecordId)
  - Option: Custom (value: custom)
- **customPrimaryKey** (string): Field Name
- **customPrimaryKey** (string): Field Name
- **id** (string): The value of the ID field
- **id** (string): The value of the ID field
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **downloadAttachments** (boolean): Whether the attachment fields define in 'Download Fields' will be downloaded
- **downloadFieldNames** (string): Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.
- **options** (collection): Options
  - Option: viewId (value: undefined)
  - Option: fields (value: undefined)
  - Option: sort (value: undefined)
  - Option: where (value: undefined)
- **downloadAttachments** (boolean): Whether the attachment fields define in 'Download Fields' will be downloaded
- **downloadFieldNames** (string): Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.
- **dataToSend** (options): Whether to insert the input data this node receives in the new row
  - Option: Auto-Map Input Data to Columns (value: autoMapInputData)
  - Option: Define Below for Each Column (value: defineBelow)
- **info** (notice): In this mode, make sure the incoming data fields are named the same as the columns in NocoDB. (Use an 'Edit Fields' node before this node to change them if required.)
- **info** (notice): This operation requires the primary key to be included for each row.
- **inputsToIgnore** (string): List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
- **fieldsUi** (fixedCollection): Fields to Send
  - Option: fieldValues (value: undefined)
