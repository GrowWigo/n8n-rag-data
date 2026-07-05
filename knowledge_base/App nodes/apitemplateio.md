# Node: APITemplate.io

**Name**: apiTemplateIo
**Category**: transform
**Description**: Consume the APITemplate.io API
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
  - Option: Account (value: account)
  - Option: Image (value: image)
  - Option: PDF (value: pdf)
- **operation** (options): Operation
  - Option: Create (value: create)
- **operation** (options): Operation
  - Option: Create (value: create)
- **operation** (options): Operation
  - Option: Get (value: get)
- **imageTemplateId** (options): ID of the image template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **pdfTemplateId** (options): ID of the PDF template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **jsonParameters** (boolean): JSON Parameters
- **download** (boolean): Name of the binary property to which to write the data of the read file
- **binaryProperty** (string): Put Output File in Field
- **overridesJson** (json): Overrides (JSON)
- **propertiesJson** (json): Properties (JSON)
- **overridesUi** (fixedCollection): Overrides
  - Option: overrideValues (value: undefined)
- **propertiesUi** (fixedCollection): Properties
  - Option: propertyValues (value: undefined)
- **options** (collection): Options
  - Option: fileName (value: undefined)
