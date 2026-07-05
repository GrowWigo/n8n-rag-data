# Node: Mistral AI

**Name**: mistralAi
**Category**: transform
**Description**: Consume Mistral AI API
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
  - Option: Document (value: document)
- **operation** (options): Operation
  - Option: Extract Text (value: extractText)
- **model** (options): The OCR model to use
  - Option: mistral-ocr-latest (value: mistral-ocr-latest)
- **documentType** (options): The type of document to process
  - Option: Document (value: document_url)
  - Option: Image (value: image_url)
- **inputType** (options): How the document will be provided
  - Option: Binary Data (value: binary)
  - Option: URL (value: url)
- **binaryProperty** (string): Name of the input binary field that contains the file to process
- **url** (string): URL of the document or image to process
- **options** (collection): Options
  - Option: batch (value: undefined)
  - Option: batchSize (value: undefined)
  - Option: deleteFiles (value: undefined)
