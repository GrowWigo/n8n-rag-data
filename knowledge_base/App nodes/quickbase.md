# Node: Quick Base

**Name**: quickbase
**Category**: input
**Description**: Integrate with the Quick Base RESTful API
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
  - Option: Field (value: field)
  - Option: File (value: file)
  - Option: Record (value: record)
  - Option: Report (value: report)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **tableId** (string): The table identifier
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: includeFieldPerms (value: undefined)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Download (value: download)
- **tableId** (string): The table identifier
- **recordId** (string): The unique identifier of the record
- **fieldId** (string): The unique identifier of the field
- **versionNumber** (number): The file attachment version number
- **binaryPropertyName** (string): Input Binary Field
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Create or Update (value: upsert)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **tableId** (string): The table identifier
- **columns** (string): Comma-separated list of the properties which should used as columns for the new rows
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: useFieldIDs (value: undefined)
- **tableId** (string): The table identifier
- **where** (string): The filter to delete records. To delete all records specify a filter that will include all records, for example {3.GT.0} where 3 is the ID of the Record ID field.
- **tableId** (string): The table identifier
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: select (value: undefined)
  - Option: sortByUi (value: undefined)
  - Option: where (value: undefined)
- **tableId** (string): The table identifier
- **columns** (string): Comma-separated list of the properties which should used as columns for the new rows
- **updateKey** (string): Update can use the key field on the table, or any other supported unique field
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: useFieldIDs (value: undefined)
- **tableId** (string): The table identifier
- **columns** (string): Comma-separated list of the properties which should used as columns for the new rows
- **updateKey** (string): Update can use the key field on the table, or any other supported unique field
- **mergeFieldId** (options): <p>You're updating records in a Quick Base table with data from an external file. In order for a merge like this to work, Quick Base needs a way to match records in the source data with corresponding records in the destination table.</p><p>You make this possible by choosing the field in the app table that holds unique matching values. This is called a merge field.</p>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Options
  - Option: fields (value: undefined)
  - Option: useFieldIDs (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Run (value: run)
- **tableId** (string): The table identifier
- **reportId** (string): The identifier of the report, unique to the table
- **tableId** (string): The table identifier
- **reportId** (string): The identifier of the report, unique to the table
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
