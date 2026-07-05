# Node: Strapi

**Name**: strapi
**Category**: input
**Description**: Consume Strapi API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Username & Password (value: password)
  - Option: API Token (value: token)
- **resource** (options): Resource
  - Option: Entry (value: entry)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **contentType** (string): Name of the content type
- **columns** (string): Comma-separated list of the properties which should used as columns for the new rows
- **contentType** (string): Name of the content type
- **entryId** (string): The ID of the entry to delete
- **contentType** (string): Name of the content type
- **entryId** (string): The ID of the entry to get
- **contentType** (string): Name of the content type
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: publicationState (value: undefined)
  - Option: sort (value: undefined)
  - Option: where (value: undefined)
- **contentType** (string): Name of the content type
- **updateKey** (string): Name of the property which decides which rows in the database should be updated. Normally that would be "id".
- **columns** (string): Comma-separated list of the properties which should used as columns for the new rows
