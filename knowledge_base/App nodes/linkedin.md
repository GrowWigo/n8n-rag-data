# Node: LinkedIn

**Name**: linkedIn
**Category**: input
**Description**: Consume LinkedIn API
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
  - Option: Standard (value: standard)
  - Option: Community Management (value: communityManagement)
- **resource** (options): Resource
  - Option: Post (value: post)
- **operation** (options): Operation
  - Option: Create (value: create)
- **postAs** (options): If to post on behalf of a user or an organization
  - Option: Person (value: person)
  - Option: Organization (value: organization)
- **person** (options): Person as which the post should be posted as. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **organization** (string): URN of Organization as which the post should be posted as
- **text** (string): The primary content of the post
- **shareMediaCategory** (options): Media Category
  - Option: None (value: NONE)
  - Option: Article (value: ARTICLE)
  - Option: Image (value: IMAGE)
- **binaryPropertyName** (string): Input Binary Field
- **additionalFields** (collection): Additional Fields
  - Option: description (value: undefined)
  - Option: originalUrl (value: undefined)
  - Option: thumbnailBinaryPropertyName (value: undefined)
  - Option: title (value: undefined)
  - Option: visibility (value: undefined)
