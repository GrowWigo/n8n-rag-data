# Node: SendGrid

**Name**: sendGrid
**Category**: transform
**Description**: Consume SendGrid API
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
  - Option: List (value: list)
  - Option: Mail (value: mail)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **name** (string): Name of the list
- **listId** (string): ID of the list
- **deleteContacts** (boolean): Whether to delete all contacts on the list
- **listId** (string): ID of the list
- **contactSample** (boolean): Whether to return the contact sample
- **listId** (string): ID of the list
- **name** (string): Name of the list
- **operation** (options): Operation
  - Option: Create or Update (value: upsert)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: query (value: undefined)
- **email** (string): Primary email for the contact
- **additionalFields** (collection): Additional Fields
  - Option: addressUi (value: undefined)
  - Option: alternateEmails (value: undefined)
  - Option: city (value: undefined)
  - Option: country (value: undefined)
  - Option: firstName (value: undefined)
  - Option: lastName (value: undefined)
  - Option: postalCode (value: undefined)
  - Option: stateProvinceRegion (value: undefined)
  - Option: listIdsUi (value: undefined)
  - Option: customFieldsUi (value: undefined)
- **ids** (string): ID of the contact. Multiple can be added separated by comma.
- **deleteAll** (boolean): Whether all contacts will be deleted
- **by** (options): Search the user by ID or email
  - Option: ID (value: id)
  - Option: Email (value: email)
- **contactId** (string): ID of the contact
- **email** (string): Email of the contact
- **operation** (options): Operation
  - Option: Send (value: send)
- **fromEmail** (string): Email address of the sender of the email
- **fromName** (string): Name of the sender of the email
- **toEmail** (string): Comma-separated list of recipient email addresses
- **subject** (string): Subject of the email to send
- **dynamicTemplate** (boolean): Whether this email will contain a dynamic template
- **contentType** (options): MIME type of the email to send
  - Option: Plain Text (value: text/plain)
  - Option: HTML (value: text/html)
- **contentValue** (string): Message body of the email to send
- **templateId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **dynamicTemplateFields** (fixedCollection): Dynamic Template Fields
  - Option: fields (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: attachments (value: undefined)
  - Option: bccEmail (value: undefined)
  - Option: categories (value: undefined)
  - Option: ccEmail (value: undefined)
  - Option: enableSandbox (value: undefined)
  - Option: ipPoolName (value: undefined)
  - Option: replyToEmail (value: undefined)
  - Option: headers (value: undefined)
  - Option: sendAt (value: undefined)
