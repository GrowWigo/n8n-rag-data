# Node: Medium

**Name**: medium
**Category**: output
**Description**: Consume Medium API
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
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Post (value: post)
  - Option: Publication (value: publication)
- **operation** (options): Operation
  - Option: Create (value: create)
- **publication** (boolean): Whether you are posting for a publication
- **publicationId** (options): Publication IDs. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **title** (string): Title of the post. Max Length : 100 characters.
- **contentFormat** (options): The format of the content to be posted
  - Option: HTML (value: html)
  - Option: Markdown (value: markdown)
- **content** (string): The body of the post, in a valid semantic HTML fragment, or Markdown
- **additionalFields** (collection): Additional Fields
  - Option: canonicalUrl (value: undefined)
  - Option: license (value: undefined)
  - Option: notifyFollowers (value: undefined)
  - Option: publishStatus (value: undefined)
  - Option: tags (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
