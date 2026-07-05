# Node: Clearbit

**Name**: clearbit
**Category**: output
**Description**: Consume Clearbit API
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
  - Option: Company (value: company)
  - Option: Person (value: person)
- **operation** (options): Operation
  - Option: Autocomplete (value: autocomplete)
  - Option: Enrich (value: enrich)
- **domain** (string): The domain to look up
- **additionalFields** (collection): Additional Fields
  - Option: companyName (value: undefined)
  - Option: facebook (value: undefined)
  - Option: linkedin (value: undefined)
  - Option: twitter (value: undefined)
- **name** (string): Name is the partial name of the company
- **operation** (options): Operation
  - Option: Enrich (value: enrich)
- **email** (string): The email address to look up
- **additionalFields** (collection): Additional Fields
  - Option: company (value: undefined)
  - Option: companyDomain (value: undefined)
  - Option: facebook (value: undefined)
  - Option: familyName (value: undefined)
  - Option: givenName (value: undefined)
  - Option: ipAddress (value: undefined)
  - Option: location (value: undefined)
  - Option: linkedIn (value: undefined)
  - Option: twitter (value: undefined)
