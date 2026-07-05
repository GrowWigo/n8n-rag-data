# Node: Coda

**Name**: coda
**Category**: output
**Description**: Consume Coda API
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Control (value: control)
  - Option: Formula (value: formula)
  - Option: Table (value: table)
  - Option: View (value: view)
- **operation** (options): Operation
  - Option: Create Row (value: createRow)
  - Option: Delete Row (value: deleteRow)
  - Option: Get All Columns (value: getAllColumns)
  - Option: Get All Rows (value: getAllRows)
  - Option: Get Column (value: getColumn)
  - Option: Get Row (value: getRow)
  - Option: Push Button (value: pushButton)
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **tableId** (options): The table to create the row in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **options** (collection): Options
  - Option: disableParsing (value: undefined)
  - Option: keyColumns (value: undefined)
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **tableId** (options): The table to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **rowId** (string): ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected
- **options** (collection): Options
  - Option: rawData (value: undefined)
  - Option: useColumnNames (value: undefined)
  - Option: valueFormat (value: undefined)
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **tableId** (options): The table to get the rows from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: query (value: undefined)
  - Option: rawData (value: undefined)
  - Option: sortBy (value: undefined)
  - Option: useColumnNames (value: undefined)
  - Option: valueFormat (value: undefined)
  - Option: visibleOnly (value: undefined)
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **tableId** (options): The table to delete the row in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **rowId** (string): Row IDs to delete
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **tableId** (options): The table to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **rowId** (string): ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected
- **columnId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **tableId** (options): The table to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **columnId** (string): The table to get the row from
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **tableId** (options): The table to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **formulaId** (string): The formula to get the row from
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **controlId** (string): The control to get the row from
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Delete Row (value: deleteViewRow)
  - Option: Get (value: get)
  - Option: Get Columns (value: getAllViewColumns)
  - Option: Get Many (value: getAll)
  - Option: Get Rows (value: getAllViewRows)
  - Option: Push Button (value: pushViewButton)
  - Option: Update Row (value: updateViewRow)
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **viewId** (string): The view to get the row from
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **viewId** (options): The table to get the rows from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: query (value: undefined)
  - Option: useColumnNames (value: undefined)
  - Option: valueFormat (value: undefined)
  - Option: rawData (value: undefined)
  - Option: sortBy (value: undefined)
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **viewId** (options): The table to get the rows from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **viewId** (options): The view to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **rowId** (options): The view to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **viewId** (options): The view to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **rowId** (options): The view to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **columnId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **docId** (options): ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **viewId** (options): The view to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **rowId** (options): The view to get the row from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **keyName** (string): The view to get the row from
- **options** (collection): Options
  - Option: disableParsing (value: undefined)
