# Node: XML

**Name**: xml
**Category**: transform
**Description**: Convert data from and to XML
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **mode** (options): From and to what format the data should be converted
  - Option: JSON to XML (value: jsonToxml)
  - Option: XML to JSON (value: xmlToJson)
- **xmlNotice** (notice): If your XML is inside a binary file, use the 'Extract from File' node to convert it to text first
- **dataPropertyName** (string): Name of the property to which to contains the converted XML data
- **options** (collection): Options
  - Option: allowSurrogateChars (value: undefined)
  - Option: attrkey (value: undefined)
  - Option: cdata (value: undefined)
  - Option: charkey (value: undefined)
  - Option: headless (value: undefined)
  - Option: rootName (value: undefined)
- **dataPropertyName** (string): Name of the property which contains the XML data to convert
- **options** (collection): Options
  - Option: attrkey (value: undefined)
  - Option: charkey (value: undefined)
  - Option: explicitArray (value: undefined)
  - Option: explicitRoot (value: undefined)
  - Option: ignoreAttrs (value: undefined)
  - Option: mergeAttrs (value: undefined)
  - Option: normalize (value: undefined)
  - Option: normalizeTags (value: undefined)
  - Option: trim (value: undefined)
