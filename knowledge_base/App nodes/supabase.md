# Node: Supabase

**Name**: supabase
**Category**: input
**Description**: Add, get, delete and update data in a table
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **useCustomSchema** (boolean): Whether to use a database schema different from the default "public" schema (requires schema exposure in the <a href="https://supabase.com/docs/guides/api/using-custom-schemas?queryGroups=language&language=curl#exposing-custom-schemas">Supabase API</a>)
- **schema** (string): Name of database schema to use for table
- **resource** (options): Resource
  - Option: Row (value: row)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **tableId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **filterType** (options): Select Type
  - Option: Build Manually (value: manual)
  - Option: String (value: string)
- **matchType** (options): Must Match
  - Option: Any Select Condition (value: anyFilter)
  - Option: All Select Conditions (value: allFilters)
- **filters** (fixedCollection): Filter to decide which rows get updated
  - Option: conditions (value: undefined)
- **jsonNotice** (notice): See <a href="https://postgrest.org/en/stable/references/api/tables_views.html#horizontal-filtering" target="_blank">PostgREST guide</a> to creating filters
- **filterString** (string): Filters (String)
- **dataToSend** (options): Data to Send
  - Option: Auto-Map Input Data to Columns (value: autoMapInputData)
  - Option: Define Below for Each Column (value: defineBelow)
- **inputsToIgnore** (string): List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
- **fieldsUi** (fixedCollection): Fields to Send
  - Option: fieldValues (value: undefined)
- **filterType** (options): Select Type
  - Option: Build Manually (value: manual)
  - Option: String (value: string)
- **matchType** (options): Must Match
  - Option: Any Select Condition (value: anyFilter)
  - Option: All Select Conditions (value: allFilters)
- **filters** (fixedCollection): Filter to decide which rows get deleted
  - Option: conditions (value: undefined)
- **jsonNotice** (notice): See <a href="https://postgrest.org/en/stable/references/api/tables_views.html#horizontal-filtering" target="_blank">PostgREST guide</a> to creating filters
- **filterString** (string): Filters (String)
- **filters** (fixedCollection): Select Conditions
  - Option: conditions (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterType** (options): Filter
  - Option: None (value: none)
  - Option: Build Manually (value: manual)
  - Option: String (value: string)
- **matchType** (options): Must Match
  - Option: Any Filter (value: anyFilter)
  - Option: All Filters (value: allFilters)
- **filters** (fixedCollection): Filter to decide which rows get retrieved
  - Option: conditions (value: undefined)
- **jsonNotice** (notice): See <a href="https://postgrest.org/en/stable/references/api/tables_views.html#horizontal-filtering" target="_blank">PostgREST guide</a> to creating filters
- **filterString** (string): Filters (String)
