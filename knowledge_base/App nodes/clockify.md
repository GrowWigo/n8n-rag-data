# Node: Clockify

**Name**: clockify
**Category**: transform
**Description**: Consume Clockify REST API
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
  - Option: Client (value: client)
  - Option: Project (value: project)
  - Option: Tag (value: tag)
  - Option: Task (value: task)
  - Option: Time Entry (value: timeEntry)
  - Option: User (value: user)
  - Option: Workspace (value: workspace)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **workspaceId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **name** (string): Name of client being created
- **clientId** (string): Client ID
- **clientId** (string): Client ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: archived (value: undefined)
  - Option: name (value: undefined)
  - Option: sort-order (value: undefined)
- **clientId** (string): Client ID
- **name** (string): Name
- **updateFields** (collection): Update Fields
  - Option: address (value: undefined)
  - Option: archived (value: undefined)
- **name** (string): Name of project being created
- **additionalFields** (collection): Additional Fields
  - Option: billable (value: undefined)
  - Option: color (value: undefined)
  - Option: clientId (value: undefined)
  - Option: estimateUi (value: undefined)
  - Option: isPublic (value: undefined)
  - Option: note (value: undefined)
- **projectId** (string): Project ID
- **projectId** (string): Project ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: archived (value: undefined)
  - Option: billable (value: undefined)
  - Option: clients (value: undefined)
  - Option: contains-client (value: undefined)
  - Option: client-status (value: undefined)
  - Option: contains-user (value: undefined)
  - Option: is-template (value: undefined)
  - Option: name (value: undefined)
  - Option: sort-column (value: undefined)
  - Option: sort-order (value: undefined)
  - Option: users (value: undefined)
  - Option: user-status (value: undefined)
- **projectId** (string): Project ID
- **updateFields** (collection): Update Fields
  - Option: billable (value: undefined)
  - Option: color (value: undefined)
  - Option: clientId (value: undefined)
  - Option: estimateUi (value: undefined)
  - Option: isPublic (value: undefined)
  - Option: name (value: undefined)
  - Option: note (value: undefined)
- **name** (string): Name of tag being created
- **tagId** (string): Tag ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: archived (value: undefined)
  - Option: name (value: undefined)
  - Option: sort-column (value: undefined)
  - Option: sort-order (value: undefined)
- **tagId** (string): Tag ID
- **updateFields** (collection): Update Fields
  - Option: archived (value: undefined)
  - Option: name (value: undefined)
- **projectId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **name** (string): Name of task to create
- **additionalFields** (collection): Additional Fields
  - Option: assigneeIds (value: undefined)
  - Option: estimate (value: undefined)
- **taskId** (string): ID of task to delete
- **taskId** (string): ID of task to get
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: is-active (value: undefined)
  - Option: name (value: undefined)
  - Option: sort-column (value: undefined)
  - Option: sort-order (value: undefined)
- **taskId** (string): ID of task to update
- **updateFields** (collection): Update Fields
  - Option: assigneeIds (value: undefined)
  - Option: estimate (value: undefined)
  - Option: name (value: undefined)
  - Option: status (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: email (value: undefined)
  - Option: name (value: undefined)
  - Option: status (value: undefined)
  - Option: sort-column (value: undefined)
  - Option: sort-order (value: undefined)
- **start** (dateTime): Start
- **additionalFields** (collection): Additional Fields
  - Option: billable (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: description (value: undefined)
  - Option: end (value: undefined)
  - Option: projectId (value: undefined)
  - Option: tagIds (value: undefined)
  - Option: taskId (value: undefined)
- **timeEntryId** (string): Time Entry ID
- **timeEntryId** (string): Time Entry ID
- **additionalFields** (collection): Additional Fields
  - Option: consider-duration-format (value: undefined)
  - Option: hydrated (value: undefined)
- **timeEntryId** (string): Time Entry ID
- **updateFields** (collection): Update Fields
  - Option: billable (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: description (value: undefined)
  - Option: end (value: undefined)
  - Option: projectId (value: undefined)
  - Option: start (value: undefined)
  - Option: tagIds (value: undefined)
  - Option: taskId (value: undefined)
