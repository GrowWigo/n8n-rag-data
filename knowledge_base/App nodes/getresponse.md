# Node: GetResponse

**Name**: getResponse
**Category**: input
**Description**: Consume GetResponse API
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
  - Option: API Key (value: apiKey)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Contact (value: contact)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **email** (string): Email
- **campaignId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **additionalFields** (collection): Additional Fields
  - Option: customFieldsUi (value: undefined)
  - Option: dayOfCycle (value: undefined)
  - Option: ipAddress (value: undefined)
  - Option: name (value: undefined)
  - Option: note (value: undefined)
  - Option: scoring (value: undefined)
  - Option: tags (value: undefined)
- **contactId** (string): ID of contact to delete
- **options** (collection): Options
  - Option: ipAddress (value: undefined)
  - Option: messageId (value: undefined)
- **contactId** (string): Unique identifier for a particular contact
- **options** (collection): Options
  - Option: fields (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: campaignId (value: undefined)
  - Option: changeOnFrom (value: undefined)
  - Option: changeOnTo (value: undefined)
  - Option: createdOnFrom (value: undefined)
  - Option: createdOnTo (value: undefined)
  - Option: exactMatch (value: undefined)
  - Option: fields (value: undefined)
  - Option: name (value: undefined)
  - Option: origin (value: undefined)
  - Option: sortBy (value: undefined)
  - Option: sortOrder (value: undefined)
- **contactId** (string): Unique identifier for a particular contact
- **updateFields** (collection): Update Fields
  - Option: campaignId (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: dayOfCycle (value: undefined)
  - Option: email (value: undefined)
  - Option: ipAddress (value: undefined)
  - Option: name (value: undefined)
  - Option: note (value: undefined)
  - Option: scoring (value: undefined)
  - Option: tags (value: undefined)
