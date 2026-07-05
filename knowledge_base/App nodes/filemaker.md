# Node: FileMaker

**Name**: filemaker
**Category**: input
**Description**: Retrieve data from the FileMaker data API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **action** (options): Action
  - Option: Create Record (value: create)
  - Option: Delete Record (value: delete)
  - Option: Duplicate Record (value: duplicate)
  - Option: Edit Record (value: edit)
  - Option: Find Records (value: find)
  - Option: Get Records (value: records)
  - Option: Get Records By ID (value: record)
  - Option: Perform Script (value: performscript)
- **layout** (options): FileMaker Layout Name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **recid** (number): Internal Record ID returned by get (recordid)
- **offset** (number): The record number of the first record in the range of records
- **limit** (number): Max number of results to return
- **getPortals** (boolean): Whether to get portal data as well
- **portals** (options): The portal result set to return. Use the portal object name or portal table name. If this parameter is omitted, the API will return all portal objects and records in the layout. For best performance, pass the portal object name or portal table name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **responseLayout** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **queries** (fixedCollection): Queries
  - Option: query (value: undefined)
- **setSort** (boolean): Whether to sort data
- **sortParametersUi** (fixedCollection): Sort rules
  - Option: rules (value: undefined)
- **setScriptBefore** (boolean): Whether to define a script to be run before the action specified by the API call and after the subsequent sort
- **scriptBefore** (options): The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **scriptBeforeParam** (string): A parameter for the FileMaker script
- **setScriptSort** (boolean): Whether to define a script to be run after the action specified by the API call but before the subsequent sort
- **scriptSort** (options): The name of the FileMaker script to be run after the action specified by the API call but before the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **scriptSortParam** (string): A parameter for the FileMaker script
- **setScriptAfter** (boolean): Whether to define a script to be run after the action specified by the API call but before the subsequent sort
- **scriptAfter** (options): The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **scriptAfterParam** (string): A parameter for the FileMaker script
- **modId** (number): The last modification ID. When you use modId, a record is edited only when the modId matches.
- **fieldsParametersUi** (fixedCollection): Fields to define
  - Option: fields (value: undefined)
- **script** (options): The name of the FileMaker script to be run. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **scriptParam** (string): A parameter for the FileMaker script
