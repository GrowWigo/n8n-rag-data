# Node: Dropbox

**Name**: dropbox
**Category**: input
**Description**: Access data on Dropbox
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Means of authenticating with the service
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: File (value: file)
  - Option: Folder (value: folder)
  - Option: Search (value: search)
- **operation** (options): Operation
  - Option: Copy (value: copy)
  - Option: Delete (value: delete)
  - Option: Download (value: download)
  - Option: Move (value: move)
  - Option: Upload (value: upload)
- **operation** (options): Operation
  - Option: Copy (value: copy)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: List (value: list)
  - Option: Move (value: move)
- **operation** (options): Operation
  - Option: Query (value: query)
- **path** (string): The path of file or folder to copy
- **toPath** (string): The destination path of file or folder
- **path** (string): The path to delete. Can be a single file or a whole folder.
- **path** (string): The path of file or folder to move
- **toPath** (string): The new path of file or folder
- **path** (string): The file path of the file to download. Has to contain the full path.
- **binaryPropertyName** (string): Put Output File in Field
- **path** (string): The file path of the file to upload. Has to contain the full path. The parent folder has to exist. Existing files get overwritten.
- **binaryData** (boolean): Whether the data to upload should be taken from binary field
- **fileContent** (string): The text content of the file to upload
- **binaryPropertyName** (string): Input Binary Field
- **query** (string): The string to search for. May match across multiple fields based on the request arguments.
- **fileStatus** (options): The string to search for. May match across multiple fields based on the request arguments.
  - Option: Active (value: active)
  - Option: Deleted (value: deleted)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **filters** (collection): Filters
  - Option: file_categories (value: undefined)
  - Option: file_extensions (value: undefined)
  - Option: path (value: undefined)
- **path** (string): The folder to create. The parent folder has to exist.
- **path** (string): The path of which to list the content
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: include_deleted (value: undefined)
  - Option: include_has_explicit_shared_members (value: undefined)
  - Option: include_mounted_folders (value: undefined)
  - Option: include_non_downloadable_files (value: undefined)
  - Option: recursive (value: undefined)
