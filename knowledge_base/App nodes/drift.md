# Node: Drift

**Name**: drift
**Category**: output
**Description**: Consume Drift API
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
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: Contact (value: contact)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Custom Attributes (value: getCustomAttributes)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Update (value: update)
- **email** (string): The email of the contact
- **additionalFields** (collection): Additional Fields
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
- **contactId** (string): Unique identifier for the contact
- **updateFields** (collection): Update Fields
  - Option: email (value: undefined)
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
- **contactId** (string): Unique identifier for the contact
- **contactId** (string): Unique identifier for the contact
