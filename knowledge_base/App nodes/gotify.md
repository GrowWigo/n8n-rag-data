# Node: Gotify

**Name**: gotify
**Category**: input
**Description**: Consume Gotify API
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
  - Option: Message (value: message)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
- **message** (string): The message to send, If using Markdown add the Content Type option
- **additionalFields** (collection): Additional Fields
  - Option: priority (value: undefined)
  - Option: title (value: undefined)
- **options** (collection): Options
  - Option: contentType (value: undefined)
- **messageId** (string): Message ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
