# Node: Dropcontact

**Name**: dropcontact
**Category**: transform
**Description**: Find B2B emails and enrich contacts
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
- **operation** (options): Operation
  - Option: Enrich (value: enrich)
  - Option: Fetch Request (value: fetchRequest)
- **requestId** (string): Request ID
- **email** (string): Email
- **simplify** (boolean): When off, waits for the contact data before completing. Waiting time can be adjusted with Extend Wait Time option. When on, returns a request_id that can be used later in the Fetch Request operation.
- **additionalFields** (collection): Additional Fields
  - Option: num_siren (value: undefined)
  - Option: siret (value: undefined)
  - Option: company (value: undefined)
  - Option: country (value: undefined)
  - Option: first_name (value: undefined)
  - Option: full_name (value: undefined)
  - Option: last_name (value: undefined)
  - Option: linkedin (value: undefined)
  - Option: phone (value: undefined)
  - Option: website (value: undefined)
- **options** (collection): Options
  - Option: waitTime (value: undefined)
  - Option: siren (value: undefined)
  - Option: language (value: undefined)
