# Node: Grafana

**Name**: grafana
**Category**: transform
**Description**: Consume the Grafana API
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
  - Option: Dashboard (value: dashboard)
  - Option: Team (value: team)
  - Option: Team Member (value: teamMember)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): Title of the dashboard to create
- **additionalFields** (collection): Additional Fields
  - Option: folderId (value: undefined)
- **dashboardUidOrUrl** (string): Unique alphabetic identifier or URL of the dashboard to delete
- **dashboardUidOrUrl** (string): Unique alphabetic identifier or URL of the dashboard to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: query (value: undefined)
- **dashboardUidOrUrl** (string): Unique alphabetic identifier or URL of the dashboard to update
- **updateFields** (collection): Update Fields
  - Option: folderId (value: undefined)
  - Option: title (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the team to create
- **additionalFields** (collection): Additional Fields
  - Option: email (value: undefined)
- **teamId** (string): ID of the team to delete
- **teamId** (string): ID of the team to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: name (value: undefined)
- **teamId** (string): ID of the team to update
- **updateFields** (collection): Update Fields
  - Option: email (value: undefined)
  - Option: name (value: undefined)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Get Many (value: getAll)
  - Option: Remove (value: remove)
- **userId** (options): User to add to a team. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **teamId** (options): Team to add the user to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **memberId** (options): User to remove from the team. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **teamId** (options): Team to remove the user from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **teamId** (options): Team to retrieve all members from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **userId** (string): ID of the user to update
- **updateFields** (collection): Update Fields
  - Option: role (value: undefined)
- **userId** (string): ID of the user to delete
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
