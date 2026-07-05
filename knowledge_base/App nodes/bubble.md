# Node: Bubble

**Name**: bubble
**Category**: transform
**Description**: Consume the Bubble Data API
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
  - Option: Object (value: object)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **typeName** (string): Name of data type of the object to create
- **properties** (fixedCollection): Properties
  - Option: property (value: undefined)
- **typeName** (string): Name of data type of the object to retrieve
- **objectId** (string): ID of the object to retrieve
- **typeName** (string): Name of data type of the object to update
- **objectId** (string): ID of the object to update
- **properties** (fixedCollection): Properties
  - Option: property (value: undefined)
- **typeName** (string): Name of data type of the object to create
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **jsonParameters** (boolean): JSON Parameters
- **options** (collection): Options
  - Option: filters (value: undefined)
  - Option: filtersJson (value: undefined)
  - Option: sort (value: undefined)
