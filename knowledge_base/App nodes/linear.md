# Node: Linear

**Name**: linear
**Category**: output
**Description**: Consume Linear API
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: API Token (value: apiToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Comment (value: comment)
  - Option: Issue (value: issue)
- **operation** (options): Operation
  - Option: Add Comment (value: addComment)
- **issueId** (string): Issue ID
- **comment** (string): Comment
- **additionalFields** (collection): Additional Fields
  - Option: parentId (value: undefined)
- **operation** (options): Operation
  - Option: Add Link (value: addLink)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **teamId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **title** (string): Title
- **additionalFields** (collection): Additional Fields
  - Option: assigneeId (value: undefined)
  - Option: description (value: undefined)
  - Option: priorityId (value: undefined)
  - Option: stateId (value: undefined)
- **issueId** (string): Issue ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **issueId** (string): Issue ID
- **updateFields** (collection): Update Fields
  - Option: assigneeId (value: undefined)
  - Option: description (value: undefined)
  - Option: priorityId (value: undefined)
  - Option: stateId (value: undefined)
  - Option: teamId (value: undefined)
  - Option: title (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: assigneeId (value: undefined)
  - Option: description (value: undefined)
  - Option: priorityId (value: undefined)
  - Option: stateId (value: undefined)
  - Option: teamId (value: undefined)
  - Option: title (value: undefined)
- **link** (string): Link
