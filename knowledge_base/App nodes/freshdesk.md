# Node: Freshdesk

**Name**: freshdesk
**Category**: output
**Description**: Consume Freshdesk API
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
  - Option: Ticket (value: ticket)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **requester** (options): Requester Identification
  - Option: Email (value: email)
  - Option: Facebook ID (value: facebookId)
  - Option: Phone (value: phone)
  - Option: Requester ID (value: requesterId)
  - Option: Twitter ID (value: twitterId)
  - Option: Unique External ID (value: uniqueExternalId)
- **requesterIdentificationValue** (string): Value of the identification selected
- **status** (options): Status
  - Option: Closed (value: closed)
  - Option: Open (value: open)
  - Option: Pending (value: pending)
  - Option: Resolved (value: resolved)
- **priority** (options): Priority
  - Option: Low (value: low)
  - Option: Medium (value: medium)
  - Option: High (value: high)
  - Option: Urgent (value: urgent)
- **source** (options): The channel through which the ticket was created
  - Option: Chat (value: chat)
  - Option: Email (value: email)
  - Option: Feedback Widget (value: feedbackWidget)
  - Option: Mobihelp (value: mobileHelp)
  - Option: Outbound Email (value: OutboundEmail)
  - Option: Phone (value: phone)
  - Option: Portal (value: portal)
- **options** (collection): Options
  - Option: agent (value: undefined)
  - Option: ccEmails (value: undefined)
  - Option: company (value: undefined)
  - Option: description (value: undefined)
  - Option: dueBy (value: undefined)
  - Option: emailConfigId (value: undefined)
  - Option: frDueBy (value: undefined)
  - Option: group (value: undefined)
  - Option: name (value: undefined)
  - Option: product (value: undefined)
  - Option: subject (value: undefined)
  - Option: tags (value: undefined)
  - Option: type (value: undefined)
- **ticketId** (string): Ticket ID
- **updateFields** (collection): Update Fields
  - Option: agent (value: undefined)
  - Option: ccEmails (value: undefined)
  - Option: company (value: undefined)
  - Option: dueBy (value: undefined)
  - Option: emailConfigId (value: undefined)
  - Option: frDueBy (value: undefined)
  - Option: group (value: undefined)
  - Option: name (value: undefined)
  - Option: product (value: undefined)
  - Option: priority (value: undefined)
  - Option: requester (value: undefined)
  - Option: requesterIdentificationValue (value: undefined)
  - Option: status (value: undefined)
  - Option: source (value: undefined)
  - Option: tags (value: undefined)
  - Option: type (value: undefined)
- **ticketId** (string): Ticket ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: companyId (value: undefined)
  - Option: include (value: undefined)
  - Option: order (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: requesterEmail (value: undefined)
  - Option: requesterId (value: undefined)
  - Option: updatedSince (value: undefined)
- **ticketId** (string): Ticket ID
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Name of the contact
- **email** (string): Primary email address of the contact. If you want to associate additional email(s) with this contact, use the other_emails attribute.
- **contactId** (string): Contact ID
- **additionalFields** (collection): Additional Fields
  - Option: address (value: undefined)
  - Option: company_id (value: undefined)
  - Option: customFields (value: undefined)
  - Option: description (value: undefined)
  - Option: email (value: undefined)
  - Option: job_title (value: undefined)
  - Option: language (value: undefined)
  - Option: mobile (value: undefined)
  - Option: name (value: undefined)
  - Option: other_companies (value: undefined)
  - Option: other_emails (value: undefined)
  - Option: phone (value: undefined)
  - Option: tags (value: undefined)
  - Option: time_zone (value: undefined)
  - Option: twitter_id (value: undefined)
  - Option: unique_external_id (value: undefined)
  - Option: view_all_tickets (value: undefined)
- **contactId** (string): Contact ID
- **contactId** (string): Contact ID
- **filters** (collection): Filters
  - Option: company_id (value: undefined)
  - Option: email (value: undefined)
  - Option: mobile (value: undefined)
  - Option: phone (value: undefined)
  - Option: state (value: undefined)
  - Option: updated_since (value: undefined)
