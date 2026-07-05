# Node: QuestDB

**Name**: questDb
**Category**: input
**Description**: Get, add and update data in QuestDB
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation
  - Option: Execute Query (value: executeQuery)
  - Option: Insert (value: insert)
- **query** (string): The SQL query to execute. You can use n8n expressions or $1 and $2 in conjunction with query parameters.
- **schema** (hidden): Name of the schema the table belongs to
- **table** (string): Name of the table in which to insert data to
- **columns** (string): Comma-separated list of the properties which should used as columns for the new rows
- **returnFields** (string): Comma-separated list of the fields that the operation will return
- **additionalFields** (collection): Additional Fields
  - Option: mode (value: undefined)
  - Option: queryParams (value: undefined)
- **additionalFields** (hidden): Additional Fields
