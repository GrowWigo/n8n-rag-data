# Node: Asana

**Name**: asana
**Category**: input
**Description**: Consume Asana REST API
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
  - Option: Project (value: project)
  - Option: Subtask (value: subtask)
  - Option: Task (value: task)
  - Option: Task Comment (value: taskComment)
  - Option: Task Project (value: taskProject)
  - Option: Task Tag (value: taskTag)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **taskId** (string): The task to operate on
- **name** (string): The name of the subtask to create
- **otherProperties** (collection): Additional Fields
  - Option: assignee (value: undefined)
  - Option: assignee_status (value: undefined)
  - Option: completed (value: undefined)
  - Option: due_on (value: undefined)
  - Option: liked (value: undefined)
  - Option: notes (value: undefined)
  - Option: workspace (value: undefined)
- **taskId** (string): The task to operate on
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: opt_fields (value: undefined)
  - Option: opt_pretty (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Move (value: move)
  - Option: Search (value: search)
  - Option: Update (value: update)
- **workspace** (options): The workspace to create the task in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **name** (string): The name of the task to create
- **id** (string): The ID of the task to delete
- **id** (string): The ID of the task to get the data of
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Properties to search for
  - Option: assignee (value: undefined)
  - Option: opt_fields (value: undefined)
  - Option: opt_pretty (value: undefined)
  - Option: project (value: undefined)
  - Option: section (value: undefined)
  - Option: workspace (value: undefined)
  - Option: completed_since (value: undefined)
  - Option: modified_since (value: undefined)
- **id** (string): The ID of the task to be moved
- **projectId** (options): Project to show the sections of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **section** (options): The Section to move the task to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): The ID of the task to update the data of
- **workspace** (options): The workspace in which the task is searched. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **searchTaskProperties** (collection): Properties to search for
  - Option: completed (value: undefined)
  - Option: text (value: undefined)
- **otherProperties** (collection): Additional Fields
  - Option: assignee (value: undefined)
  - Option: assignee_status (value: undefined)
  - Option: completed (value: undefined)
  - Option: due_on (value: undefined)
  - Option: name (value: undefined)
  - Option: liked (value: undefined)
  - Option: notes (value: undefined)
  - Option: projects (value: undefined)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **id** (string): The ID of the task to add the comment to
- **isTextHtml** (boolean): Whether body is HTML or simple text
- **text** (string): The plain text of the comment to add
- **text** (string): Comment as HTML string. Do not use together with plain text.
- **additionalFields** (collection): Properties of the task comment
  - Option: is_pinned (value: undefined)
- **id** (string): The ID of the comment to be removed
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **id** (string): The ID of the task to add the project to
- **project** (options): The project where the task will be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Other properties to set
  - Option: insert_after (value: undefined)
  - Option: insert_before (value: undefined)
  - Option: section (value: undefined)
- **id** (string): The ID of the task to add the project to
- **project** (options): The project where the task will be removed from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **id** (string): The ID of the task to add the tag to
- **tag** (options): The tag that should be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): The ID of the task to add the tag to
- **tag** (options): The tag that should be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **userId** (string): An identifier for the user to get data of. Can be one of an email address,the globally unique identifier for the user, or the keyword me to indicate the current user making the request.
- **workspace** (options): The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): The name of the project to create
- **workspace** (options): The workspace to create the project in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **team** (options): The team this project will be assigned to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Other properties to set
  - Option: color (value: undefined)
  - Option: due_on (value: undefined)
  - Option: notes (value: undefined)
  - Option: privacy_setting (value: undefined)
- **id** (string): Project ID
- **id** (string): Project ID
- **workspace** (options): The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Other properties to set
  - Option: archived (value: undefined)
  - Option: team (value: undefined)
- **workspace** (options): The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): The ID of the project to update the data of
- **updateFields** (collection): Other properties to set
  - Option: color (value: undefined)
  - Option: due_on (value: undefined)
  - Option: name (value: undefined)
  - Option: notes (value: undefined)
  - Option: owner (value: undefined)
  - Option: privacy_setting (value: undefined)
  - Option: team (value: undefined)
