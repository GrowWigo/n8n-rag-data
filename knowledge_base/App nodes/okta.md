# Node: Okta

**Name**: okta
**Category**: transform
**Description**: Use the Okta API
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
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **userId** (resourceLocator): The user you want to operate on. Choose from the list, or specify an ID.
- **firstName** (string): First Name
- **lastName** (string): Last Name
- **login** (string): Username
- **email** (string): Email
- **activate** (boolean): Whether to activate the user and allow access to all assigned applications
- **getCreateFields** (collection): Fields
  - Option: city (value: undefined)
  - Option: costCenter (value: undefined)
  - Option: countryCode (value: undefined)
  - Option: department (value: undefined)
  - Option: displayName (value: undefined)
  - Option: division (value: undefined)
  - Option: employeeNumber (value: undefined)
  - Option: honorificPrefix (value: undefined)
  - Option: honorificSuffix (value: undefined)
  - Option: locale (value: undefined)
  - Option: manager (value: undefined)
  - Option: managerId (value: undefined)
  - Option: middleName (value: undefined)
  - Option: mobilePhone (value: undefined)
  - Option: nickName (value: undefined)
  - Option: password (value: undefined)
  - Option: organization (value: undefined)
  - Option: postalAddress (value: undefined)
  - Option: preferredLanguage (value: undefined)
  - Option: primaryPhone (value: undefined)
  - Option: profileUrl (value: undefined)
  - Option: recoveryQuestionAnswer (value: undefined)
  - Option: recoveryQuestionQuestion (value: undefined)
  - Option: secondEmail (value: undefined)
  - Option: state (value: undefined)
  - Option: streetAddress (value: undefined)
  - Option: timezone (value: undefined)
  - Option: title (value: undefined)
  - Option: userType (value: undefined)
  - Option: zipCode (value: undefined)
- **getUpdateFields** (collection): Fields
  - Option: city (value: undefined)
  - Option: costCenter (value: undefined)
  - Option: countryCode (value: undefined)
  - Option: department (value: undefined)
  - Option: displayName (value: undefined)
  - Option: division (value: undefined)
  - Option: email (value: undefined)
  - Option: employeeNumber (value: undefined)
  - Option: firstName (value: undefined)
  - Option: honorificPrefix (value: undefined)
  - Option: honorificSuffix (value: undefined)
  - Option: lastName (value: undefined)
  - Option: locale (value: undefined)
  - Option: manager (value: undefined)
  - Option: managerId (value: undefined)
  - Option: middleName (value: undefined)
  - Option: mobilePhone (value: undefined)
  - Option: nickName (value: undefined)
  - Option: organization (value: undefined)
  - Option: password (value: undefined)
  - Option: postalAddress (value: undefined)
  - Option: preferredLanguage (value: undefined)
  - Option: primaryPhone (value: undefined)
  - Option: profileUrl (value: undefined)
  - Option: recoveryQuestionAnswer (value: undefined)
  - Option: recoveryQuestionQuestion (value: undefined)
  - Option: secondEmail (value: undefined)
  - Option: state (value: undefined)
  - Option: streetAddress (value: undefined)
  - Option: timezone (value: undefined)
  - Option: title (value: undefined)
  - Option: userType (value: undefined)
  - Option: login (value: undefined)
  - Option: zipCode (value: undefined)
- **searchQuery** (string): Search Query
- **limit** (number): Max number of results to return
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **simplify** (boolean): Whether to return a simplified version of the response instead of the raw data
- **sendEmail** (boolean): Whether to send a deactivation email to the administrator
