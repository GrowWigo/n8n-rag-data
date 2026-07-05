# Node: Zendesk

**Name**: zendesk
**Category**: output
**Description**: Consume Zendesk API
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
  - Option: API Token (value: apiToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Ticket (value: ticket)
  - Option: Ticket Field (value: ticketField)
  - Option: User (value: user)
  - Option: Organization (value: organization)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Recover (value: recover)
  - Option: Update (value: update)
- **description** (string): The first comment on the ticket
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: customFieldsUi (value: undefined)
  - Option: externalId (value: undefined)
  - Option: group (value: undefined)
  - Option: recipient (value: undefined)
  - Option: status (value: undefined)
  - Option: subject (value: undefined)
  - Option: tags (value: undefined)
  - Option: type (value: undefined)
- **additionalFieldsJson** (json): Object of values to set as described <a href="https://developer.zendesk.com/rest_api/docs/support/tickets">here</a>
- **id** (string): Ticket ID
- **jsonParameters** (boolean): JSON Parameters
- **updateFields** (collection): Update Fields
  - Option: assigneeEmail (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: externalId (value: undefined)
  - Option: group (value: undefined)
  - Option: internalNote (value: undefined)
  - Option: publicReply (value: undefined)
  - Option: recipient (value: undefined)
  - Option: status (value: undefined)
  - Option: subject (value: undefined)
  - Option: tags (value: undefined)
  - Option: type (value: undefined)
- **updateFieldsJson** (json): Object of values to update as described <a href="https://developer.zendesk.com/rest_api/docs/support/tickets">here</a>
- **ticketType** (options): Ticket Type
  - Option: Regular (value: regular)
  - Option: Suspended (value: suspended)
- **id** (string): Ticket ID
- **id** (string): Ticket ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: group (value: undefined)
  - Option: query (value: undefined)
  - Option: sortBy (value: undefined)
  - Option: sortOrder (value: undefined)
  - Option: status (value: undefined)
- **id** (string): Ticket ID
- **id** (string): Ticket ID
- **id** (string): Suspended Ticket ID
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **ticketFieldId** (string): Ticket Field ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Organizations (value: getOrganizations)
  - Option: Get Related Data (value: getRelatedData)
  - Option: Search (value: search)
  - Option: Update (value: update)
- **name** (string): The user's name
- **additionalFields** (collection): Additional Fields
  - Option: alias (value: undefined)
  - Option: custom_role_id (value: undefined)
  - Option: details (value: undefined)
  - Option: email (value: undefined)
  - Option: external_id (value: undefined)
  - Option: locale (value: undefined)
  - Option: moderator (value: undefined)
  - Option: notes (value: undefined)
  - Option: only_private_comments (value: undefined)
  - Option: organization_id (value: undefined)
  - Option: phone (value: undefined)
  - Option: report_csv (value: undefined)
  - Option: restricted_agent (value: undefined)
  - Option: role (value: undefined)
  - Option: signature (value: undefined)
  - Option: suspended (value: undefined)
  - Option: tags (value: undefined)
  - Option: ticket_restriction (value: undefined)
  - Option: time_zone (value: undefined)
  - Option: userFieldsUi (value: undefined)
  - Option: verified (value: undefined)
- **id** (string): User ID
- **updateFields** (collection): Update Fields
  - Option: alias (value: undefined)
  - Option: custom_role_id (value: undefined)
  - Option: details (value: undefined)
  - Option: email (value: undefined)
  - Option: external_id (value: undefined)
  - Option: locale (value: undefined)
  - Option: moderator (value: undefined)
  - Option: name (value: undefined)
  - Option: notes (value: undefined)
  - Option: only_private_comments (value: undefined)
  - Option: organization_id (value: undefined)
  - Option: phone (value: undefined)
  - Option: report_csv (value: undefined)
  - Option: restricted_agent (value: undefined)
  - Option: role (value: undefined)
  - Option: signature (value: undefined)
  - Option: suspended (value: undefined)
  - Option: tags (value: undefined)
  - Option: ticket_restriction (value: undefined)
  - Option: time_zone (value: undefined)
  - Option: userFieldsUi (value: undefined)
  - Option: verified (value: undefined)
- **id** (string): User ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: role (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: query (value: undefined)
  - Option: external_id (value: undefined)
- **id** (string): User ID
- **id** (string): User ID
- **id** (string): User ID
- **operation** (options): Operation
  - Option: Count (value: count)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Related Data (value: getRelatedData)
  - Option: Update (value: update)
- **name** (string): Name
- **additionalFields** (collection): Additional Fields
  - Option: details (value: undefined)
  - Option: domain_names (value: undefined)
  - Option: notes (value: undefined)
  - Option: organizationFieldsUi (value: undefined)
  - Option: tags (value: undefined)
- **id** (string): Organization ID
- **updateFields** (collection): Update Fields
  - Option: details (value: undefined)
  - Option: domain_names (value: undefined)
  - Option: name (value: undefined)
  - Option: notes (value: undefined)
  - Option: organizationFieldsUi (value: undefined)
  - Option: tags (value: undefined)
- **id** (string): Organization ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **id** (string): Organization ID
- **id** (string): Organization ID
