# Node: MongoDB

**Name**: mongoDb
**Category**: input
**Description**: Find, insert and update documents in MongoDB
**Version**: 1, 1.1, 1.2

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Search Index (value: searchIndexes)
  - Option: Document (value: document)
- **operation** (options): Operation
  - Option: Aggregate (value: aggregate)
  - Option: Delete (value: delete)
  - Option: Find (value: find)
  - Option: Find And Replace (value: findOneAndReplace)
  - Option: Find And Update (value: findOneAndUpdate)
  - Option: Insert (value: insert)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: createSearchIndex)
  - Option: Drop (value: dropSearchIndex)
  - Option: List (value: listSearchIndexes)
  - Option: Update (value: updateSearchIndex)
- **collection** (string): MongoDB Collection
- **query** (json): MongoDB aggregation pipeline query in JSON format
- **query** (json): MongoDB Delete query
- **options** (collection): Add query options
  - Option: limit (value: undefined)
  - Option: skip (value: undefined)
  - Option: sort (value: undefined)
  - Option: projection (value: undefined)
- **query** (json): MongoDB Find query
- **fields** (string): Comma-separated list of the fields to be included into the new document
- **updateKey** (string): Name of the property which decides which rows in the database should be updated. Normally that would be "id".
- **fields** (string): Comma-separated list of the fields to be included into the new document
- **upsert** (boolean): Whether to perform an insert if no documents match the update key
- **options** (collection): Options
  - Option: dateFields (value: undefined)
  - Option: useDotNotation (value: undefined)
- **indexName** (string): If provided, only lists indexes with the specified name
- **indexNameRequired** (string): The name of the search index
- **indexDefinition** (json): The search index definition
- **indexType** (options): The search index index type
  - Option: Vector Search (value: vectorSearch)
  - Option: Search (value: search)
