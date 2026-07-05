# Node: HTML Extract

**Name**: htmlExtract
**Category**: transform
**Description**: Extracts data from HTML
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **sourceData** (options): If HTML should be read from binary or JSON data
  - Option: Binary (value: binary)
  - Option: JSON (value: json)
- **dataPropertyName** (string): Input Binary Field
- **dataPropertyName** (string): Name of the JSON property in which the HTML to extract the data from can be found. The property can either contain a string or an array of strings.
- **extractionValues** (fixedCollection): Extraction Values
  - Option: values (value: undefined)
- **options** (collection): Options
  - Option: trimValues (value: undefined)
