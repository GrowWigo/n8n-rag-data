# Node: ERPNext

**Name**: erpNext
**Category**: output
**Description**: Consume ERPNext API
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
  - Option: Document (value: document)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **docType** (options): DocType whose documents to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: filters (value: undefined)
- **docType** (options): DocType you would like to create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **properties** (fixedCollection): Properties
  - Option: customProperty (value: undefined)
- **docType** (options): The type of document you would like to get. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **documentName** (string): The name (ID) of document you would like to get
- **docType** (options): The type of document you would like to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **documentName** (string): The name (ID) of document you would like to get
- **docType** (options): The type of document you would like to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **documentName** (string): The name (ID) of document you would like to get
- **properties** (fixedCollection): Properties of request body
  - Option: customProperty (value: undefined)
