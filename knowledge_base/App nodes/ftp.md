# Node: FTP

**Name**: ftp
**Category**: input
**Description**: Transfer files via FTP or SFTP
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **protocol** (options): File transfer protocol
  - Option: FTP (value: ftp)
  - Option: SFTP (value: sftp)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Download (value: download)
  - Option: List (value: list)
  - Option: Rename (value: rename)
  - Option: Upload (value: upload)
- **path** (string): The file path of the file to delete. Has to contain the full path.
- **options** (collection): Options
  - Option: folder (value: undefined)
  - Option: recursive (value: undefined)
  - Option: timeout (value: undefined)
- **path** (string): The file path of the file to download. Has to contain the full path.
- **binaryPropertyName** (string): Put Output File in Field
- **options** (collection): Options
  - Option: enableConcurrentReads (value: undefined)
  - Option: maxConcurrentReads (value: undefined)
  - Option: chunkSize (value: undefined)
  - Option: timeout (value: undefined)
- **oldPath** (string): Old Path
- **newPath** (string): New Path
- **options** (collection): Options
  - Option: createDirectories (value: undefined)
  - Option: timeout (value: undefined)
- **path** (string): The file path of the file to upload. Has to contain the full path.
- **binaryData** (boolean): The text content of the file to upload
- **binaryPropertyName** (string): Input Binary Field
- **fileContent** (string): The text content of the file to upload
- **options** (collection): Options
  - Option: timeout (value: undefined)
- **path** (string): Path of directory to list contents of
- **recursive** (boolean): Whether to return object representing all directories / objects recursively found within SFTP server
- **options** (collection): Options
  - Option: timeout (value: undefined)
