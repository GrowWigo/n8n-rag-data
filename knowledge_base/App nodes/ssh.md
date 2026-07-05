# Node: SSH

**Name**: ssh
**Category**: input
**Description**: Execute commands via SSH
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Password (value: password)
  - Option: Private Key (value: privateKey)
- **resource** (options): Resource
  - Option: Command (value: command)
  - Option: File (value: file)
- **operation** (options): Operation
  - Option: Execute (value: execute)
- **command** (string): The command to be executed on a remote device
- **cwd** (string): Working Directory
- **operation** (options): Operation
  - Option: Download (value: download)
  - Option: Upload (value: upload)
- **binaryPropertyName** (string): Input Binary Field
- **path** (string): The directory to upload the file to. The name of the file does not need to be specified, it's taken from the binary data file name. To override this behavior, set the parameter "File Name" under options.
- **path** (string): The file path of the file to download. Has to contain the full path including file name.
- **binaryPropertyName** (string): Object property name which holds binary data
- **options** (collection): Options
  - Option: fileName (value: undefined)
