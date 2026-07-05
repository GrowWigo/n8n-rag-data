# Node: HaloPSA

**Name**: haloPSA
**Category**: input
**Description**: Consume HaloPSA API
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
  - Option: Site (value: site)
  - Option: Ticket (value: ticket)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **clientName** (string): Enter client name
- **additionalFields** (collection): Additional Fields
  - Option: inactive (value: undefined)
  - Option: notes (value: undefined)
  - Option: is_vip (value: undefined)
  - Option: website (value: undefined)
- **clientId** (string): Client ID
- **simplify** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: activeStatus (value: undefined)
  - Option: search (value: undefined)
- **clientId** (string): Client ID
- **updateFields** (collection): Update Fields
  - Option: inactive (value: undefined)
  - Option: name (value: undefined)
  - Option: notes (value: undefined)
  - Option: is_vip (value: undefined)
  - Option: website (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **ticketType** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **summary** (string): Summary
- **details** (string): Details
- **additionalFields** (collection): Additional Fields
  - Option: agent_id (value: undefined)
  - Option: startdate (value: undefined)
  - Option: targetdate (value: undefined)
- **ticketId** (string): Ticket ID
- **simplify** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: activeStatus (value: undefined)
  - Option: search (value: undefined)
- **ticketId** (string): Ticket ID
- **updateFields** (collection): Update Fields
  - Option: agent_id (value: undefined)
  - Option: details (value: undefined)
  - Option: startdate (value: undefined)
  - Option: summary (value: undefined)
  - Option: targetdate (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **siteName** (string): Enter site name
- **selectOption** (boolean): Whether client can be selected by ID
- **clientId** (string): Client ID
- **clientId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **additionalFields** (collection): Additional Fields
  - Option: maincontact_name (value: undefined)
  - Option: notes (value: undefined)
  - Option: phonenumber (value: undefined)
- **siteId** (string): Site ID
- **simplify** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: activeStatus (value: undefined)
  - Option: search (value: undefined)
- **siteId** (string): Site ID
- **updateFields** (collection): Update Fields
  - Option: client_id (value: undefined)
  - Option: maincontact_name (value: undefined)
  - Option: name (value: undefined)
  - Option: notes (value: undefined)
  - Option: phonenumber (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **userName** (string): Enter user name
- **siteId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **additionalFields** (collection): Additional Fields
  - Option: emailaddress (value: undefined)
  - Option: notes (value: undefined)
  - Option: password (value: undefined)
  - Option: surname (value: undefined)
  - Option: inactive (value: undefined)
- **userId** (string): User ID
- **simplify** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: activeStatus (value: undefined)
  - Option: search (value: undefined)
- **userId** (string): User ID
- **updateFields** (collection): Update Fields
  - Option: emailaddress (value: undefined)
  - Option: name (value: undefined)
  - Option: notes (value: undefined)
  - Option: password (value: undefined)
  - Option: site_id (value: undefined)
  - Option: surname (value: undefined)
  - Option: inactive (value: undefined)
