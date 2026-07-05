# Node: Grist

**Name**: grist
**Category**: input
**Description**: Consume the Grist API
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
  - Option: Create Row (value: create)
  - Option: Delete Row (value: delete)
  - Option: Get Many Rows (value: getAll)
  - Option: Update Row (value: update)
- **docId** (string): In your document, click your profile icon, then Document Settings, then copy the value under "This document's ID"
- **tableId** (string): ID of table to operate on. If unsure, look at the Code View.
- **rowId** (string): ID of the row to delete, or comma-separated list of row IDs to delete
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalOptions** (collection): Additional Options
  - Option: filter (value: undefined)
  - Option: sort (value: undefined)
- **rowId** (string): ID of the row to update
- **dataToSend** (options): Whether to insert the input data this node receives in the new row
  - Option: Auto-Map Input Data to Columns (value: autoMapInputs)
  - Option: Define Below for Each Column (value: defineInNode)
- **inputsToIgnore** (string): List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
- **fieldsToSend** (fixedCollection): Fields to Send
  - Option: properties (value: undefined)
