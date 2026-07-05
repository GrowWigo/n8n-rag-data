# Node: Odoo

**Name**: odoo
**Category**: transform
**Description**: Consume Odoo API
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
  - Option: Custom Resource (value: custom)
  - Option: Note (value: note)
  - Option: Opportunity (value: opportunity)
- **customResource** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **fieldsToCreateOrUpdate** (fixedCollection): Fields
  - Option: fields (value: undefined)
- **customResourceId** (string): Custom Resource ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: fieldsList (value: undefined)
- **filterRequest** (fixedCollection): Filter request by applying filters
  - Option: filter (value: undefined)
- **customResourceId** (string): Custom Resource ID
- **fieldsToCreateOrUpdate** (fixedCollection): Update Fields
  - Option: fields (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **opportunityName** (string): Name
- **additionalFields** (collection): Additional Fields
  - Option: email_from (value: undefined)
  - Option: expected_revenue (value: undefined)
  - Option: description (value: undefined)
  - Option: phone (value: undefined)
  - Option: priority (value: undefined)
  - Option: probability (value: undefined)
- **opportunityId** (string): Opportunity ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: fieldsList (value: undefined)
- **opportunityId** (string): Opportunity ID
- **updateFields** (collection): Update Fields
  - Option: email_from (value: undefined)
  - Option: expected_revenue (value: undefined)
  - Option: description (value: undefined)
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
  - Option: priority (value: undefined)
  - Option: probability (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **contactName** (string): Name
- **additionalFields** (collection): Additional Fields
  - Option: address (value: undefined)
  - Option: email (value: undefined)
  - Option: comment (value: undefined)
  - Option: function (value: undefined)
  - Option: mobile (value: undefined)
  - Option: phone (value: undefined)
  - Option: vat (value: undefined)
  - Option: website (value: undefined)
- **contactId** (string): Contact ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: fieldsList (value: undefined)
- **contactId** (string): Contact ID
- **updateFields** (collection): Update Fields
  - Option: address (value: undefined)
  - Option: email (value: undefined)
  - Option: comment (value: undefined)
  - Option: function (value: undefined)
  - Option: mobile (value: undefined)
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
  - Option: vat (value: undefined)
  - Option: website (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **memo** (string): Memo
- **noteId** (string): Note ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: fieldsList (value: undefined)
- **noteId** (string): Note ID
- **memo** (string): Memo
