# Node: HTML

**Name**: html
**Category**: transform
**Description**: Work with HTML
**Version**: 1, 1.1, 1.2

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation
  - Option: Generate HTML Template (value: generateHtmlTemplate)
  - Option: Extract HTML Content (value: extractHtmlContent)
  - Option: Convert to HTML Table (value: convertToHtmlTable)
- **html** (string): HTML template to render
- **notice** (notice): <b>Tips</b>: Type ctrl+space for completions. Use <code>{{ }}</code> for expressions and <code>&lt;style&gt;</code> tags for CSS. JS in <code>&lt;script&gt;</code> tags is included but not executed in n8n.
- **sourceData** (options): If HTML should be read from binary or JSON data
  - Option: Binary (value: binary)
  - Option: JSON (value: json)
- **dataPropertyName** (string): Input Binary Field
- **dataPropertyName** (string): Name of the JSON property in which the HTML to extract the data from can be found. The property can either contain a string or an array of strings.
- **extractionValues** (fixedCollection): Extraction Values
  - Option: values (value: undefined)
- **extractionValues** (fixedCollection): Extraction Values
  - Option: values (value: undefined)
- **options** (collection): Options
  - Option: trimValues (value: undefined)
  - Option: cleanUpText (value: undefined)
- **options** (collection): Options
  - Option: capitalize (value: undefined)
  - Option: customStyling (value: undefined)
  - Option: caption (value: undefined)
  - Option: tableAttributes (value: undefined)
  - Option: headerAttributes (value: undefined)
  - Option: rowAttributes (value: undefined)
  - Option: cellAttributes (value: undefined)
