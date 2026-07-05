# Node: Compression

**Name**: compression
**Category**: transform
**Description**: Compress and decompress files
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation
  - Option: Compress (value: compress)
  - Option: Decompress (value: decompress)
- **binaryPropertyName** (string): To process more than one file, use a comma-separated list of the binary fields names
- **binaryPropertyName** (string): To process more than one file, use a comma-separated list of the binary fields names
- **outputFormat** (options): Format of the output
  - Option: Gzip (value: gzip)
  - Option: Zip (value: zip)
- **outputFormat** (options): Format of the output
  - Option: Gzip (value: gzip)
  - Option: Zip (value: zip)
- **fileName** (string): Name of the output file
- **binaryPropertyOutput** (string): Put Output File in Field
- **fileName** (string): Name of the output file
- **binaryPropertyOutput** (string): Put Output File in Field
- **outputPrefix** (string): Prefix to add to the gzip file
- **outputPrefix** (string): Prefix to add to the decompressed files
