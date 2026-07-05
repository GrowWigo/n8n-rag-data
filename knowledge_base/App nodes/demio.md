# Node: Demio

**Name**: demio
**Category**: output
**Description**: Consume the Demio API
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
  - Option: Event (value: event)
  - Option: Report (value: report)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Register (value: register)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: type (value: undefined)
- **eventId** (string): Event ID
- **additionalFields** (collection): Additional Fields
  - Option: active (value: undefined)
  - Option: date_id (value: undefined)
- **eventId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **firstName** (string): The registrant's first name
- **email** (string): The registrant's email address
- **additionalFields** (collection): Additional Fields
  - Option: company (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: ref_url (value: undefined)
  - Option: gdpr (value: undefined)
  - Option: last_name (value: undefined)
  - Option: phone_number (value: undefined)
  - Option: date_id (value: undefined)
  - Option: website (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
- **eventId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **dateId** (options): ID of the session. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **filters** (collection): Filters
  - Option: status (value: undefined)
