# Node: Raindrop

**Name**: raindrop
**Category**: transform
**Description**: Consume the Raindrop API
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
  - Option: Bookmark (value: bookmark)
  - Option: Collection (value: collection)
  - Option: Tag (value: tag)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **collectionId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **link** (string): Link of the bookmark to be created
- **additionalFields** (collection): Additional Fields
  - Option: important (value: undefined)
  - Option: order (value: undefined)
  - Option: pleaseParse (value: undefined)
  - Option: tags (value: undefined)
  - Option: title (value: undefined)
- **bookmarkId** (string): The ID of the bookmark to delete
- **bookmarkId** (string): The ID of the bookmark to retrieve
- **collectionId** (options): The ID of the collection from which to retrieve all bookmarks. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **bookmarkId** (string): The ID of the bookmark to update
- **updateFields** (collection): Update Fields
  - Option: collectionId (value: undefined)
  - Option: important (value: undefined)
  - Option: order (value: undefined)
  - Option: pleaseParse (value: undefined)
  - Option: tags (value: undefined)
  - Option: title (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): Title of the collection to create
- **additionalFields** (collection): Additional Fields
  - Option: cover (value: undefined)
  - Option: public (value: undefined)
  - Option: parentId (value: undefined)
  - Option: sort (value: undefined)
  - Option: view (value: undefined)
- **collectionId** (string): The ID of the collection to delete
- **collectionId** (string): The ID of the collection to retrieve
- **type** (options): Type
  - Option: Parent (value: parent)
  - Option: Children (value: children)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **collectionId** (string): The ID of the collection to update
- **updateFields** (collection): Update Fields
  - Option: cover (value: undefined)
  - Option: public (value: undefined)
  - Option: parentId (value: undefined)
  - Option: sort (value: undefined)
  - Option: title (value: undefined)
  - Option: view (value: undefined)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
- **tags** (string): One or more tags to delete. Enter comma-separated values to delete multiple tags.
- **additionalFields** (collection): Additional Fields
  - Option: collectionId (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: collectionId (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
- **self** (boolean): Whether to return details on the logged-in user
- **userId** (string): The ID of the user to retrieve
