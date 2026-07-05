# Node: Notion Trigger

**Name**: notionTrigger
**Category**: trigger
**Description**: Starts the workflow when Notion events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **event** (options): Event
  - Option: Page Added to Database (value: pageAddedToDatabase)
  - Option: Page Updated in Database (value: pagedUpdatedInDatabase)
- **notionNotice** (notice): In Notion, make sure to <a href="https://www.notion.so/help/add-and-manage-connections-with-the-api" target="_blank">add your connection</a> to the pages you want to access.
- **databaseId** (resourceLocator): The Notion Database to operate on
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
