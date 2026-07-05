# Node: Hacker News

**Name**: hackerNews
**Category**: transform
**Description**: Consume Hacker News API
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
  - Option: All (value: all)
  - Option: Article (value: article)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get (value: get)
- **articleId** (string): The ID of the Hacker News article to be returned
- **username** (string): The Hacker News user to be returned
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: includeComments (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: keyword (value: undefined)
  - Option: tags (value: undefined)
