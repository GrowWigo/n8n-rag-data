# Node: Snowflake

**Name**: snowflake
**Category**: input
**Description**: Get, add and update data in Snowflake
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
  - Option: Update (value: update)
- **query** (string): The SQL query to execute
- **table** (string): Name of the table in which to insert data to
- **columns** (string): Comma-separated list of the properties which should used as columns for the new rows
- **table** (string): Name of the table in which to update data in
- **updateKey** (string): Name of the property which decides which rows in the database should be updated. Normally that would be "id".
- **columns** (string): Comma-separated list of the properties which should used as columns for rows to update
