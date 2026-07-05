# Node: Metabase

**Name**: metabase
**Category**: transform
**Description**: Use the Metabase API
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
  - Option: Alert (value: alerts)
  - Option: Database (value: databases)
  - Option: Metric (value: metrics)
  - Option: Question (value: questions)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Result Data (value: resultData)
- **questionId** (string): Question ID
- **format** (options): Format
  - Option: CSV (value: csv)
  - Option: JSON (value: json)
  - Option: XLSX (value: xlsx)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **metricId** (string): Metric ID
- **operation** (options): Operation
  - Option: Add (value: addNewDatasource)
  - Option: Get Many (value: getAll)
  - Option: Get Fields (value: getFields)
- **databaseId** (string): Database ID
- **engine** (options): Engine
  - Option: H2 (value: h2)
  - Option: MongoDB (value: mongo)
  - Option: Mysql (value: mysql)
  - Option: PostgreSQL (value: postgres)
  - Option: Redshift (value: redshift)
  - Option: Sqlite (value: sqlite)
- **host** (string): Host
- **name** (string): Name
- **port** (number): Port
- **user** (string): User
- **password** (string): Password
- **dbName** (string): Database Name
- **filePath** (string): File Path
- **fullSync** (boolean): Full Sync
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **alertId** (string): Alert ID
