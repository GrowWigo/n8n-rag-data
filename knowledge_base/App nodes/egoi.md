# Node: E-goi

**Name**: egoi
**Category**: output
**Description**: Consume E-goi API
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
  - Option: Contact (value: contact)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **list** (options): ID of list to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **email** (string): Email address for a subscriber
- **contactId** (string): Contact ID of the subscriber
- **resolveData** (boolean): By default the response just includes the contact ID. If this option gets activated, it will resolve the data automatically.
- **additionalFields** (collection): Additional Fields
  - Option: birth_date (value: undefined)
  - Option: cellphone (value: undefined)
  - Option: extraFieldsUi (value: undefined)
  - Option: first_name (value: undefined)
  - Option: last_name (value: undefined)
  - Option: status (value: undefined)
  - Option: tagIds (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: birth_date (value: undefined)
  - Option: cellphone (value: undefined)
  - Option: email (value: undefined)
  - Option: extraFieldsUi (value: undefined)
  - Option: first_name (value: undefined)
  - Option: last_name (value: undefined)
  - Option: status (value: undefined)
  - Option: tagIds (value: undefined)
- **by** (options): Search by
  - Option: Contact ID (value: id)
  - Option: Email (value: email)
- **contactId** (string): Contact ID of the subscriber
- **email** (string): Email address for subscriber
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
