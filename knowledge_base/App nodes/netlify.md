# Node: Netlify

**Name**: netlify
**Category**: transform
**Description**: Consume Netlify API
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
  - Option: Deploy (value: deploy)
  - Option: Site (value: site)
- **operation** (options): Operation
  - Option: Cancel (value: cancel)
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **siteId** (options): Enter the Site ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **deployId** (string): Deploy ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: branch (value: undefined)
  - Option: title (value: undefined)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **siteId** (string): Site ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
