# Node: n8n

**Name**: n8n
**Category**: transform
**Description**: Handle events and perform actions on your n8n instance
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
  - Option: Audit (value: audit)
  - Option: Credential (value: credential)
  - Option: Execution (value: execution)
  - Option: Workflow (value: workflow)
- **operation** (options): Operation
  - Option: Generate (value: generate)
- **additionalOptions** (collection): Additional Options
  - Option: categories (value: undefined)
  - Option: daysAbandonedWorkflow (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Schema (value: getSchema)
- **name** (string): Name of the new credential
- **credentialTypeName** (string): The available types depend on nodes installed on the n8n instance. Some built-in types include e.g. 'githubApi', 'notionApi', and 'slackApi'.
- **data** (json): A valid JSON object with properties required for this Credential Type. To see the expected format, you can use 'Get Schema' operation.
- **credentialId** (string): Credential ID
- **credentialTypeName** (string): The available types depend on nodes installed on the n8n instance. Some built-in types include e.g. 'githubApi', 'notionApi', and 'slackApi'.
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Delete (value: delete)
- **executionId** (string): Execution ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: workflowId (value: undefined)
  - Option: status (value: undefined)
- **options** (collection): Options
  - Option: activeWorkflows (value: undefined)
- **executionId** (string): Execution ID
- **options** (collection): Options
  - Option: activeWorkflows (value: undefined)
- **operation** (options): Operation
  - Option: Publish (value: activate)
  - Option: Create (value: create)
  - Option: Unpublish (value: deactivate)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Version (value: getVersion)
  - Option: Update (value: update)
- **workflowId** (resourceLocator): Workflow to filter the executions by
- **additionalFields** (collection): Additional Fields
  - Option: versionId (value: undefined)
  - Option: name (value: undefined)
  - Option: description (value: undefined)
- **workflowObject** (json): A valid JSON object with required fields: 'name', 'nodes', 'connections' and 'settings'. More information can be found in the <a href="https://docs.n8n.io/api/api-reference/#tag/workflow/paths/~1workflows/post">documentation</a>.
- **workflowId** (resourceLocator): Workflow to filter the executions by
- **workflowId** (resourceLocator): Workflow to filter the executions by
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: activeWorkflows (value: undefined)
  - Option: tags (value: undefined)
  - Option: name (value: undefined)
  - Option: projectId (value: undefined)
  - Option: excludePinnedData (value: undefined)
- **workflowId** (resourceLocator): Workflow to filter the executions by
- **workflowId** (resourceLocator): Workflow to filter the executions by
- **versionId** (string): The version ID to retrieve
- **workflowId** (resourceLocator): Workflow to filter the executions by
- **workflowObject** (json): A valid JSON object with required fields: 'name', 'nodes', 'connections' and 'settings'. More information can be found in the <a href="https://docs.n8n.io/api/api-reference/#tag/workflow/paths/~1workflows~1%7bid%7d/put">documentation</a>.
