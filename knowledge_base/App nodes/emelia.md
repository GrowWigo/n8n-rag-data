# Node: Emelia

**Name**: emelia
**Category**: input
**Description**: Consume the Emelia API
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
  - Option: Campaign (value: campaign)
  - Option: Contact List (value: contactList)
- **operation** (options): Operation
  - Option: Add Contact (value: addContact)
  - Option: Create (value: create)
  - Option: Duplicate (value: duplicate)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Pause (value: pause)
  - Option: Start (value: start)
- **campaignId** (options): The ID of the campaign to add the contact to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **contactEmail** (string): The email of the contact to add to the campaign
- **additionalFields** (collection): Additional Fields
  - Option: customFieldsUi (value: undefined)
  - Option: firstName (value: undefined)
  - Option: lastContacted (value: undefined)
  - Option: lastName (value: undefined)
  - Option: lastOpen (value: undefined)
  - Option: lastReplied (value: undefined)
  - Option: mailsSent (value: undefined)
  - Option: phoneNumber (value: undefined)
- **campaignName** (string): The name of the campaign to create
- **campaignId** (string): The ID of the campaign to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **campaignId** (string): The ID of the campaign to pause. The campaign must be in RUNNING mode.
- **campaignId** (string): The ID of the campaign to start. Email provider and contacts must be set.
- **campaignId** (options): The ID of the campaign to duplicate. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **campaignName** (string): The name of the new campaign to create
- **options** (collection): Options
  - Option: copyContacts (value: undefined)
  - Option: copyProvider (value: undefined)
  - Option: copyMails (value: undefined)
  - Option: copySettings (value: undefined)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Get Many (value: getAll)
- **contactListId** (options): The ID of the contact list to add the contact to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **contactEmail** (string): The email of the contact to add to the contact list
- **additionalFields** (collection): Additional Fields
  - Option: customFieldsUi (value: undefined)
  - Option: firstName (value: undefined)
  - Option: lastContacted (value: undefined)
  - Option: lastName (value: undefined)
  - Option: lastOpen (value: undefined)
  - Option: lastReplied (value: undefined)
  - Option: mailsSent (value: undefined)
  - Option: phoneNumber (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
