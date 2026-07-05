# Node: Bannerbear

**Name**: bannerbear
**Category**: output
**Description**: Consume Bannerbear API
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
  - Option: Image (value: image)
  - Option: Template (value: template)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
- **templateId** (options): The template ID you want to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: metadata (value: undefined)
  - Option: waitForImage (value: undefined)
  - Option: waitForImageMaxTries (value: undefined)
  - Option: webhookUrl (value: undefined)
- **modificationsUi** (fixedCollection): Modifications
  - Option: modificationsValues (value: undefined)
- **imageId** (string): Unique identifier for the image
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **templateId** (string): Unique identifier for the template
