# Node: Adalo

**Name**: adalo
**Category**: transform
**Description**: Consume Adalo API
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
  - Option: Collection (value: collection)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **collectionId** (string): Open your Adalo application and click on the three buttons beside the collection name, then select API Documentation
- **rowId** (string): Row ID
- **dataToSend** (options): Whether to insert the input data this node receives in the new row
  - Option: Auto-Map Input Data to Columns (value: autoMapInputData)
  - Option: Define Below for Each Column (value: defineBelow)
- **inputsToIgnore** (string): List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
- **fieldsUi** (fixedCollection): Field must be defined in the collection, otherwise it will be ignored. If field defined in the collection is not set here, it will be set to null.
  - Option: fieldValues (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
