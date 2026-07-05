# Node: Cockpit

**Name**: cockpit
**Category**: output
**Description**: Consume Cockpit API
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
  - Option: Collection (value: collection)
  - Option: Form (value: form)
  - Option: Singleton (value: singleton)
- **operation** (options): Operation
  - Option: Create an Entry (value: create)
  - Option: Get Many Entries (value: getAll)
  - Option: Update an Entry (value: update)
- **collection** (options): Name of the collection to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: filter (value: undefined)
  - Option: language (value: undefined)
  - Option: populate (value: undefined)
  - Option: rawData (value: undefined)
  - Option: skip (value: undefined)
  - Option: sort (value: undefined)
- **id** (string): Entry ID
- **jsonDataFields** (boolean): Whether new entry fields should be set via the value-key pair UI or JSON
- **dataFieldsJson** (json): Entry data to send as JSON
- **dataFieldsUi** (fixedCollection): Entry data to send
  - Option: field (value: undefined)
- **operation** (options): Operation
  - Option: Submit a Form (value: submit)
- **form** (string): Name of the form to operate on
- **jsonDataFields** (boolean): Whether form fields should be set via the value-key pair UI or JSON
- **dataFieldsJson** (json): Form data to send as JSON
- **dataFieldsUi** (fixedCollection): Form data to send
  - Option: field (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
- **singleton** (options): Name of the singleton to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
