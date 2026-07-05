# Node: Zammad

**Name**: zammad
**Category**: input
**Description**: Consume the Zammad API
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
  - Option: Basic Auth (value: basicAuth)
  - Option: Token Auth (value: tokenAuth)
- **resource** (options): Resource
  - Option: Group (value: group)
  - Option: Organization (value: organization)
  - Option: Ticket (value: ticket)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Group Name
- **id** (string): Group to update. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): Group to delete. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): Group to retrieve. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: active (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: note (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: active (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: name (value: undefined)
  - Option: note (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Organization Name
- **id** (string): Organization to update. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): Organization to delete. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): Organization to retrieve. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: shared (value: undefined)
  - Option: domain (value: undefined)
  - Option: domain_assignment (value: undefined)
  - Option: active (value: undefined)
  - Option: vip (value: undefined)
  - Option: note (value: undefined)
  - Option: customFieldsUi (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: shared (value: undefined)
  - Option: domain (value: undefined)
  - Option: domain_assignment (value: undefined)
  - Option: active (value: undefined)
  - Option: vip (value: undefined)
  - Option: note (value: undefined)
  - Option: customFieldsUi (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): Title of the ticket to create
- **group** (options): Group that will own the ticket to create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **customer** (options): Email address of the customer concerned in the ticket to create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): Ticket to retrieve. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): Ticket to delete. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): Ticket to update. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **article** (fixedCollection): Article
  - Option: articleDetails (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: customFieldsUi (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: title (value: undefined)
  - Option: group (value: undefined)
  - Option: state_id (value: undefined)
  - Option: pending_time (value: undefined)
  - Option: priority_id (value: undefined)
  - Option: owner_id (value: undefined)
  - Option: customer_id (value: undefined)
  - Option: note (value: undefined)
  - Option: customFieldsUi (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Self (value: getSelf)
  - Option: Update (value: update)
- **firstname** (string): First Name
- **lastname** (string): Last Name
- **id** (string): User to update. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): User to delete. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **id** (string): User to retrieve. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: active (value: undefined)
  - Option: addressUi (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: department (value: undefined)
  - Option: email (value: undefined)
  - Option: fax (value: undefined)
  - Option: note (value: undefined)
  - Option: organization (value: undefined)
  - Option: phone (value: undefined)
  - Option: mobile (value: undefined)
  - Option: verified (value: undefined)
  - Option: vip (value: undefined)
  - Option: web (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: active (value: undefined)
  - Option: addressUi (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: department (value: undefined)
  - Option: email (value: undefined)
  - Option: fax (value: undefined)
  - Option: firstname (value: undefined)
  - Option: lastname (value: undefined)
  - Option: note (value: undefined)
  - Option: organization (value: undefined)
  - Option: phone (value: undefined)
  - Option: mobile (value: undefined)
  - Option: verified (value: undefined)
  - Option: vip (value: undefined)
  - Option: web (value: undefined)
- **query** (string): Query
- **limit** (number): Max number of results to return
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: query (value: undefined)
  - Option: sortUi (value: undefined)
