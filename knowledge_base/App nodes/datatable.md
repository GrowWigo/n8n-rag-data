# Node: Data table

**Name**: dataTable
**Category**: input, transform
**Description**: Permanently save data across workflow executions in a table
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
  - Option: Row (value: row)
  - Option: Table (value: table)
- **operation** (options): Operation
  - Option: Delete (value: deleteRows)
  - Option: Get (value: get)
  - Option: If Row Exists (value: rowExists)
  - Option: If Row Does Not Exist (value: rowNotExists)
  - Option: Insert (value: insert)
  - Option: Update (value: update)
  - Option: Upsert (value: upsert)
- **dataTableId** (resourceLocator): Data table
- **matchType** (options): Must Match
  - Option: Any Condition (value: anyCondition)
  - Option: All Conditions (value: allConditions)
- **filters** (fixedCollection): Filter to decide which rows get
  - Option: conditions (value: undefined)
- **options** (collection): Options
  - Option: dryRun (value: undefined)
- **columns** (resourceMapper): Columns
- **options** (collection): Options
  - Option: optimizeBulk (value: undefined)
- **matchType** (options): Must Match
  - Option: Any Condition (value: anyCondition)
  - Option: All Conditions (value: allConditions)
- **filters** (fixedCollection): Filter to decide which rows get
  - Option: conditions (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **orderBy** (boolean): Whether to sort the results by a column
- **orderByColumn** (options): Choose from the list, or specify using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **orderByDirection** (options): Sort direction for the column
  - Option: Ascending (value: ASC)
  - Option: Descending (value: DESC)
- **matchType** (options): Must Match
  - Option: Any Condition (value: anyCondition)
  - Option: All Conditions (value: allConditions)
- **filters** (fixedCollection): Filter to decide which rows get
  - Option: conditions (value: undefined)
- **matchType** (options): Must Match
  - Option: Any Condition (value: anyCondition)
  - Option: All Conditions (value: allConditions)
- **filters** (fixedCollection): Filter to decide which rows get
  - Option: conditions (value: undefined)
- **matchType** (options): Must Match
  - Option: Any Condition (value: anyCondition)
  - Option: All Conditions (value: allConditions)
- **filters** (fixedCollection): Filter to decide which rows get
  - Option: conditions (value: undefined)
- **columns** (resourceMapper): Columns
- **options** (collection): Options
  - Option: dryRun (value: undefined)
- **matchType** (options): Must Match
  - Option: Any Condition (value: anyCondition)
  - Option: All Conditions (value: allConditions)
- **filters** (fixedCollection): Filter to decide which rows get
  - Option: conditions (value: undefined)
- **columns** (resourceMapper): Columns
- **options** (collection): Options
  - Option: dryRun (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: List (value: list)
  - Option: Update (value: update)
- **dataTableId** (resourceLocator): Data table
- **tableName** (string): The name of the data table to create
- **columns** (fixedCollection): The columns to create in the data table
  - Option: column (value: undefined)
- **options** (collection): Options
  - Option: createIfNotExists (value: undefined)
- **deleteWarning** (notice): This will permanently delete the data table and all its data. This action cannot be undone.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: filterName (value: undefined)
  - Option: sortField (value: undefined)
  - Option: sortDirection (value: undefined)
- **newName** (string): The new name for the data table
