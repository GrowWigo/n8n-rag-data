# Node: Mautic

**Name**: mautic
**Category**: output
**Description**: Consume Mautic API
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
  - Option: Credentials (value: credentials)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Campaign Contact (value: campaignContact)
  - Option: Company (value: company)
  - Option: Company Contact (value: companyContact)
  - Option: Contact (value: contact)
  - Option: Contact Segment (value: contactSegment)
  - Option: Segment Email (value: segmentEmail)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): The name of the company to create
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **additionalFields** (collection): Additional Fields
  - Option: addressUi (value: undefined)
  - Option: annualRevenue (value: undefined)
  - Option: companyEmail (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: description (value: undefined)
  - Option: fax (value: undefined)
  - Option: industry (value: undefined)
  - Option: isPublished (value: undefined)
  - Option: numberOfEmpoyees (value: undefined)
  - Option: overwriteWithBlank (value: undefined)
  - Option: phone (value: undefined)
  - Option: website (value: undefined)
- **companyId** (string): The ID of the company to update
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **updateFields** (collection): Update Fields
  - Option: addressUi (value: undefined)
  - Option: annualRevenue (value: undefined)
  - Option: companyEmail (value: undefined)
  - Option: name (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: description (value: undefined)
  - Option: fax (value: undefined)
  - Option: industry (value: undefined)
  - Option: isPublished (value: undefined)
  - Option: numberOfEmpoyees (value: undefined)
  - Option: overwriteWithBlank (value: undefined)
  - Option: phone (value: undefined)
  - Option: website (value: undefined)
- **companyId** (string): The ID of the company to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **additionalFields** (collection): Additional Fields
  - Option: orderByDir (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: search (value: undefined)
- **companyId** (string): The ID of the company to delete
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Edit Contact Points (value: editContactPoint)
  - Option: Edit Do Not Contact List (value: editDoNotContactList)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Send Email (value: sendEmail)
  - Option: Update (value: update)
- **jsonParameters** (boolean): JSON Parameters
- **email** (string): Email address of the contact
- **firstName** (string): First Name
- **lastName** (string): Last Name
- **company** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **position** (string): Position
- **title** (string): Title
- **bodyJson** (json): Contact parameters
- **additionalFields** (collection): Additional Fields
  - Option: addressUi (value: undefined)
  - Option: b2bOrb2c (value: undefined)
  - Option: crmId (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: fax (value: undefined)
  - Option: hasPurchased (value: undefined)
  - Option: ipAddress (value: undefined)
  - Option: lastActive (value: undefined)
  - Option: mobile (value: undefined)
  - Option: ownerId (value: undefined)
  - Option: phone (value: undefined)
  - Option: prospectOrCustomer (value: undefined)
  - Option: sandbox (value: undefined)
  - Option: stage (value: undefined)
  - Option: tags (value: undefined)
  - Option: socialMediaUi (value: undefined)
  - Option: website (value: undefined)
- **contactId** (string): Contact ID
- **jsonParameters** (boolean): JSON Parameters
- **updateFields** (collection): Update Fields
  - Option: bodyJson (value: undefined)
  - Option: addressUi (value: undefined)
  - Option: b2bOrb2c (value: undefined)
  - Option: crmId (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: email (value: undefined)
  - Option: fax (value: undefined)
  - Option: firstName (value: undefined)
  - Option: hasPurchased (value: undefined)
  - Option: ipAddress (value: undefined)
  - Option: lastActive (value: undefined)
  - Option: lastName (value: undefined)
  - Option: mobile (value: undefined)
  - Option: ownerId (value: undefined)
  - Option: phone (value: undefined)
  - Option: position (value: undefined)
  - Option: company (value: undefined)
  - Option: prospectOrCustomer (value: undefined)
  - Option: sandbox (value: undefined)
  - Option: stage (value: undefined)
  - Option: tags (value: undefined)
  - Option: title (value: undefined)
  - Option: socialMediaUi (value: undefined)
  - Option: website (value: undefined)
  - Option: ipAddress (value: undefined)
- **contactId** (string): Contact ID
- **action** (options): Action
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **channel** (options): Channel
  - Option: Email (value: email)
  - Option: SMS (value: sms)
- **additionalFields** (collection): Additional Fields
  - Option: reason (value: undefined)
  - Option: comments (value: undefined)
- **contactId** (string): Contact ID
- **action** (options): Action
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **points** (number): Points
- **contactId** (string): Contact ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **contactId** (string): Contact ID
- **options** (collection): Options
  - Option: search (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: orderByDir (value: undefined)
  - Option: publishedOnly (value: undefined)
  - Option: minimal (value: undefined)
  - Option: rawData (value: undefined)
- **campaignEmailId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **contactId** (string): Contact ID
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **contactId** (string): Contact ID
- **segmentId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **contactId** (string): Contact ID
- **campaignId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **contactId** (string): The ID of the contact
- **companyId** (string): The ID of the company
- **operation** (options): Operation
  - Option: Send (value: send)
- **segmentEmailId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
