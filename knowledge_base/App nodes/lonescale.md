# Node: LoneScale

**Name**: loneScale
**Category**: transform
**Description**: Create List, add / delete items
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Create a new list
  - Option: List (value: list)
  - Option: Item (value: item)
- **operation** (options): Operation
  - Option: Create (value: create)
- **operation** (options): Operation
  - Option: Create (value: add)
- **type** (options): Type of your list
  - Option: Company (value: COMPANY)
  - Option: Contact (value: PEOPLE)
- **list** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **first_name** (string): Contact first name
- **last_name** (string): Contact last name
- **company_name** (string): Contact company name
- **peopleAdditionalFields** (collection): Additional Fields
  - Option: full_name (value: undefined)
  - Option: email (value: undefined)
  - Option: company_name (value: undefined)
  - Option: current_position (value: undefined)
  - Option: domain (value: undefined)
  - Option: linkedin_url (value: undefined)
  - Option: location (value: undefined)
  - Option: contact_id (value: undefined)
- **companyAdditionalFields** (collection): Additional Fields
  - Option: linkedin_url (value: undefined)
  - Option: domain (value: undefined)
  - Option: location (value: undefined)
  - Option: contact_id (value: undefined)
- **name** (string): Name of your list
- **type** (options): Type of your list
  - Option: Company (value: COMPANY)
  - Option: Contact (value: PEOPLE)
