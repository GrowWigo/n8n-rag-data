# Node: Action Network

**Name**: actionNetwork
**Category**: transform
**Description**: Consume the Action Network API
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
  - Option: Attendance (value: attendance)
  - Option: Event (value: event)
  - Option: Person (value: person)
  - Option: Person Tag (value: personTag)
  - Option: Petition (value: petition)
  - Option: Signature (value: signature)
  - Option: Tag (value: tag)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **personId** (string): ID of the person to create an attendance for
- **eventId** (string): ID of the event to create an attendance for
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **eventId** (string): ID of the event whose attendance to retrieve
- **attendanceId** (string): ID of the attendance to retrieve
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **eventId** (string): ID of the event to create an attendance for
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **originSystem** (string): Source where the event originated
- **title** (string): Title of the event to create
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **additionalFields** (collection): Additional Fields
  - Option: browser_url (value: undefined)
  - Option: description (value: undefined)
  - Option: end_date (value: undefined)
  - Option: featured_image_url (value: undefined)
  - Option: instructions (value: undefined)
  - Option: location (value: undefined)
  - Option: name (value: undefined)
  - Option: start_date (value: undefined)
- **eventId** (string): ID of the event to retrieve
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **email_addresses** (fixedCollection): Person’s email addresses
  - Option: email_addresses_fields (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: family_name (value: undefined)
  - Option: given_name (value: undefined)
  - Option: languages_spoken (value: undefined)
  - Option: phone_numbers (value: undefined)
  - Option: postal_addresses (value: undefined)
- **personId** (string): ID of the person to retrieve
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **personId** (string): ID of the person to update
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **updateFields** (collection): Update Fields
  - Option: family_name (value: undefined)
  - Option: given_name (value: undefined)
  - Option: languages_spoken (value: undefined)
  - Option: phone_numbers (value: undefined)
  - Option: postal_addresses (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **originSystem** (string): Source where the petition originated
- **title** (string): Title of the petition to create
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **additionalFields** (collection): Additional Fields
  - Option: browser_url (value: undefined)
  - Option: featured_image_url (value: undefined)
  - Option: name (value: undefined)
  - Option: petition_text (value: undefined)
  - Option: target (value: undefined)
- **petitionId** (string): ID of the petition to retrieve
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **petitionId** (string): ID of the petition to update
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **updateFields** (collection): Update Fields
  - Option: browser_url (value: undefined)
  - Option: featured_image_url (value: undefined)
  - Option: name (value: undefined)
  - Option: petition_text (value: undefined)
  - Option: target (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **petitionId** (string): ID of the petition to sign
- **personId** (string): ID of the person whose signature to create
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **additionalFields** (collection): Additional Fields
  - Option: comments (value: undefined)
- **petitionId** (string): ID of the petition whose signature to retrieve
- **signatureId** (string): ID of the signature to retrieve
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **petitionId** (string): ID of the petition whose signatures to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **petitionId** (string): ID of the petition whose signature to update
- **signatureId** (string): ID of the signature to update
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **updateFields** (collection): Update Fields
  - Option: comments (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **name** (string): Name of the tag to create
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **tagId** (string): ID of the tag to retrieve
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Remove (value: remove)
- **tagId** (options): ID of the tag to add. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **personId** (string): ID of the person to add the tag to
- **tagId** (options): ID of the tag whose tagging to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **taggingId** (options): ID of the tagging to remove. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
