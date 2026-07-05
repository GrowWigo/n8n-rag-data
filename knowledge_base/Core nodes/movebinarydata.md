# Node: Convert to/from binary data

**Name**: moveBinaryData
**Category**: transform
**Description**: Move data between binary and JSON properties
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **mode** (options): From and to where data should be moved
  - Option: Binary to JSON (value: binaryToJson)
  - Option: JSON to Binary (value: jsonToBinary)
- **setAllData** (boolean): Whether all JSON data should be replaced with the data retrieved from binary key. Else the data will be written to a single key.
- **sourceKey** (string): The name of the binary key to get data from. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.currentKey".
- **destinationKey** (string): The name the JSON key to copy data to. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.newKey".
- **convertAllData** (boolean): Whether all JSON data should be converted to binary. Else only the data of one key will be converted.
- **sourceKey** (string): The name of the JSON key to get data from. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.currentKey".
- **destinationKey** (string): The name the binary key to copy data to. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.newKey".
- **options** (collection): Options
  - Option: addBOM (value: undefined)
  - Option: dataIsBase64 (value: undefined)
  - Option: encoding (value: undefined)
  - Option: stripBOM (value: undefined)
  - Option: fileName (value: undefined)
  - Option: jsonParse (value: undefined)
  - Option: keepSource (value: undefined)
  - Option: keepAsBase64 (value: undefined)
  - Option: mimeType (value: undefined)
  - Option: useRawData (value: undefined)
