# Node: ConvertKit

**Name**: convertKit
**Category**: input
**Description**: Consume ConvertKit API
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
  - Option: Custom Field (value: customField)
  - Option: Form (value: form)
  - Option: Sequence (value: sequence)
  - Option: Tag (value: tag)
  - Option: Tag Subscriber (value: tagSubscriber)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **id** (string): The ID of your custom field
- **label** (string): The label of the custom field
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): The operations to perform
  - Option: Add Subscriber (value: addSubscriber)
  - Option: Get Many (value: getAll)
  - Option: Get Subscriptions (value: getSubscriptions)
- **id** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **email** (string): The subscriber's email address
- **additionalFields** (collection): Additional Fields
  - Option: fieldsUi (value: undefined)
  - Option: firstName (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Receive only active subscribers or cancelled subscribers
  - Option: subscriberState (value: undefined)
- **operation** (options): The operations to perform
  - Option: Add Subscriber (value: addSubscriber)
  - Option: Get Many (value: getAll)
  - Option: Get Subscriptions (value: getSubscriptions)
- **id** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **email** (string): The subscriber's email address
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: fieldsUi (value: undefined)
  - Option: firstName (value: undefined)
  - Option: tags (value: undefined)
- **additionalFields** (collection): Receive only active subscribers or cancelled subscribers
  - Option: subscriberState (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **name** (string): Tag name, multiple can be added separated by comma
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Get Many (value: getAll)
  - Option: Delete (value: delete)
- **tagId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **email** (string): Subscriber email address
- **additionalFields** (collection): Additional Fields
  - Option: fields (value: undefined)
  - Option: firstName (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Receive only active subscribers or cancelled subscribers
  - Option: subscriberState (value: undefined)
