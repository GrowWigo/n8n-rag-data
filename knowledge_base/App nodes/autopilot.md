# Node: Autopilot

**Name**: autopilot
**Category**: input
**Description**: Consume Autopilot API
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
  - Option: Contact Journey (value: contactJourney)
  - Option: Contact List (value: contactList)
  - Option: List (value: list)
- **operation** (options): Operation
  - Option: Create or Update (value: upsert)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **email** (string): Email address of the contact
- **additionalFields** (collection): Additional Fields
  - Option: Company (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: Fax (value: undefined)
  - Option: FirstName (value: undefined)
  - Option: Industry (value: undefined)
  - Option: LastName (value: undefined)
  - Option: LeadSource (value: undefined)
  - Option: LinkedIn (value: undefined)
  - Option: autopilotList (value: undefined)
  - Option: MailingCountry (value: undefined)
  - Option: MailingPostalCode (value: undefined)
  - Option: MailingState (value: undefined)
  - Option: MailingStreet (value: undefined)
  - Option: MailingCity (value: undefined)
  - Option: MobilePhone (value: undefined)
  - Option: newEmail (value: undefined)
  - Option: notify (value: undefined)
  - Option: NumberOfEmployees (value: undefined)
  - Option: owner_name (value: undefined)
  - Option: Phone (value: undefined)
  - Option: Salutation (value: undefined)
  - Option: autopilotSessionId (value: undefined)
  - Option: Status (value: undefined)
  - Option: Title (value: undefined)
  - Option: unsubscribed (value: undefined)
  - Option: Website (value: undefined)
- **contactId** (string): Can be ID or email
- **contactId** (string): Can be ID or email
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Add (value: add)
- **triggerId** (options): List ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **contactId** (string): Can be ID or email
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Exist (value: exist)
  - Option: Get Many (value: getAll)
  - Option: Remove (value: remove)
- **listId** (options): ID of the list to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **contactId** (string): Can be ID or email
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **name** (string): Name of the list to create
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
