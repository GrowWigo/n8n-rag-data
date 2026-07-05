# Node: Brevo

**Name**: sendInBlue
**Category**: transform
**Description**: Consume Brevo API
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
  - Option: Contact Attribute (value: attribute)
  - Option: Email (value: email)
  - Option: Sender (value: sender)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Update (value: update)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
- **attributeCategory** (options): Category of the attribute
  - Option: Calculated (value: calculated)
  - Option: Category (value: category)
  - Option: Global (value: global)
  - Option: Normal (value: normal)
  - Option: Transactional (value: transactional)
- **attributeName** (string): Name of the attribute
- **attributeType** (options): Attribute Type
  - Option: Boolean (value: boolean)
  - Option: Date (value: date)
  - Option: Float (value: float)
  - Option: Text (value: text)
- **attributeValue** (string): Value of the attribute
- **attributeCategoryList** (collection): Contact Attribute List
  - Option: categoryEnumeration (value: undefined)
- **updateAttributeCategory** (options): Category of the attribute
  - Option: Calculated (value: calculated)
  - Option: Category (value: category)
  - Option: Global (value: global)
- **updateAttributeName** (string): Name of the existing attribute
- **updateAttributeValue** (string): Value of the attribute to update
- **updateAttributeCategoryList** (collection): List of the values and labels that the attribute can take
  - Option: updateCategoryEnumeration (value: undefined)
- **deleteAttributeCategory** (options): Category of the attribute
  - Option: Calculated (value: calculated)
  - Option: Category (value: category)
  - Option: Global (value: global)
  - Option: Normal (value: normal)
  - Option: Transactional (value: transactional)
- **deleteAttributeName** (string): Name of the attribute
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
- **name** (string): Name of the sender
- **email** (string): Email of the sender
- **id** (string): ID of the sender to delete
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Create or Update (value: upsert)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **email** (string): Email
- **createContactAttributes** (fixedCollection): Array of attributes to be added
  - Option: attributesValues (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: sort (value: undefined)
- **filters** (collection): Filters
  - Option: modifiedSince (value: undefined)
- **identifier** (string): Email (urlencoded) OR ID of the contact OR its SMS attribute value
- **identifier** (string): Email (urlencoded) OR ID of the contact OR its SMS attribute value
- **identifier** (string): Email (urlencoded) OR ID of the contact OR its SMS attribute value
- **updateAttributes** (fixedCollection): Array of attributes to be updated
  - Option: updateAttributesValues (value: undefined)
- **email** (string): Email of the contact
- **upsertAttributes** (fixedCollection): Array of attributes to be updated
  - Option: upsertAttributesValues (value: undefined)
- **operation** (options): Operation
  - Option: Send (value: send)
  - Option: Send Template (value: sendTemplate)
- **sendHTML** (boolean): Send HTML
- **subject** (string): Subject of the email
- **textContent** (string): Text content of the message
- **htmlContent** (string): HTML content of the message
- **sender** (string): Sender
- **receipients** (string): Receipients
- **additionalFields** (collection): Additional fields to add
  - Option: emailAttachments (value: undefined)
  - Option: receipientsBCC (value: undefined)
  - Option: receipientsCC (value: undefined)
  - Option: emailTags (value: undefined)
- **templateId** (options): Template ID
- **receipients** (string): Receipients
- **additionalFields** (collection): Additional fields to add
  - Option: emailAttachments (value: undefined)
  - Option: emailTags (value: undefined)
  - Option: templateParameters (value: undefined)
