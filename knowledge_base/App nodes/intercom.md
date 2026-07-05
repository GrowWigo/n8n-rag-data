# Node: Intercom

**Name**: intercom
**Category**: output
**Description**: Consume Intercom API
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
  - Option: Lead (value: lead)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
  - Option: Users (value: users)
- **id** (string): The Intercom defined ID representing the Lead
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: company_id (value: undefined)
  - Option: email (value: undefined)
  - Option: segment_id (value: undefined)
  - Option: tag_id (value: undefined)
- **selectBy** (options): The property to select the user by
  - Option: ID (value: id)
  - Option: User ID (value: userId)
- **value** (string): View by value
- **updateBy** (options): The property via which to query the user
  - Option: ID (value: id)
  - Option: Email (value: email)
  - Option: User ID (value: userId)
- **value** (string): Value of the property to identify the user to update
- **identifierType** (options): Unique string identifier
  - Option: User ID (value: userId)
  - Option: Email (value: email)
- **idValue** (string): Unique string identifier value
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: avatar (value: undefined)
  - Option: companies (value: undefined)
  - Option: email (value: undefined)
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
  - Option: sessionCount (value: undefined)
  - Option: userId (value: undefined)
  - Option: unsubscribedFromEmails (value: undefined)
  - Option: updateLastRequestAt (value: undefined)
  - Option: utmCampaign (value: undefined)
  - Option: utmContent (value: undefined)
  - Option: utmMedium (value: undefined)
  - Option: utmSource (value: undefined)
  - Option: utmTerm (value: undefined)
- **customAttributesJson** (json): A hash of key/value pairs to represent custom data you want to attribute to a user
- **customAttributesUi** (fixedCollection): A hash of key/value pairs to represent custom data you want to attribute to a user
  - Option: customAttributesValues (value: undefined)
- **deleteBy** (options): Delete By
  - Option: ID (value: id)
  - Option: User ID (value: userId)
- **value** (string): Delete by value
- **selectBy** (options): The property to select the lead by
  - Option: Email (value: email)
  - Option: ID (value: id)
  - Option: User ID (value: userId)
  - Option: Phone (value: phone)
- **value** (string): View by value
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: email (value: undefined)
  - Option: phone (value: undefined)
- **updateBy** (options): The property via which to query the lead
  - Option: User ID (value: userId)
  - Option: ID (value: id)
- **value** (string): Value of the property to identify the lead to update
- **email** (string): The email of the user
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: avatar (value: undefined)
  - Option: companies (value: undefined)
  - Option: email (value: undefined)
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
  - Option: unsubscribedFromEmails (value: undefined)
  - Option: updateLastRequestAt (value: undefined)
  - Option: utmCampaign (value: undefined)
  - Option: utmContent (value: undefined)
  - Option: utmMedium (value: undefined)
  - Option: utmSource (value: undefined)
  - Option: utmTerm (value: undefined)
- **customAttributesJson** (json): A hash of key/value pairs to represent custom data you want to attribute to a user
- **customAttributesUi** (fixedCollection): A hash of key/value pairs to represent custom data you want to attribute to a user
  - Option: customAttributesValues (value: undefined)
- **listBy** (options): List By
  - Option: ID (value: id)
  - Option: Company ID (value: companyId)
- **value** (string): View by value
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: segment_id (value: undefined)
  - Option: tag_id (value: undefined)
- **selectBy** (options): What property to use to query the company
  - Option: Company ID (value: companyId)
  - Option: ID (value: id)
  - Option: Name (value: name)
- **value** (string): View by value
- **companyId** (string): The company ID you have defined for the company
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: industry (value: undefined)
  - Option: monthlySpend (value: undefined)
  - Option: name (value: undefined)
  - Option: plan (value: undefined)
  - Option: size (value: undefined)
  - Option: website (value: undefined)
- **customAttributesJson** (json): A hash of key/value pairs to represent custom data you want to attribute to a user
- **customAttributesUi** (fixedCollection): A hash of key/value pairs to represent custom data you want to attribute to a user
  - Option: customAttributesValues (value: undefined)
