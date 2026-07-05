# Node: Nextcloud

**Name**: nextCloud
**Category**: input
**Description**: Access data on Nextcloud
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
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **resource** (options): Resource
  - Option: File (value: file)
  - Option: Folder (value: folder)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Copy (value: copy)
  - Option: Delete (value: delete)
  - Option: Download (value: download)
  - Option: Move (value: move)
  - Option: Share (value: share)
  - Option: Upload (value: upload)
- **operation** (options): Operation
  - Option: Copy (value: copy)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: List (value: list)
  - Option: Move (value: move)
  - Option: Share (value: share)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **path** (string): The path of file or folder to copy. The path should start with "/".
- **toPath** (string): The destination path of file or folder. The path should start with "/".
- **path** (string): The path to delete. Can be a single file or a whole folder. The path should start with "/".
- **path** (string): The path of file or folder to move. The path should start with "/".
- **toPath** (string): The new path of file or folder. The path should start with "/".
- **path** (string): The file path of the file to download. Has to contain the full path. The path should start with "/".
- **binaryPropertyName** (string): Put Output File in Field
- **path** (string): The absolute file path of the file to upload. Has to contain the full path. The parent folder has to exist. Existing files get overwritten.
- **binaryDataUpload** (boolean): Binary File
- **fileContent** (string): The text content of the file to upload
- **binaryPropertyName** (string): Input Binary Field
- **path** (string): The file path of the file to share. Has to contain the full path. The path should start with "/".
- **shareType** (options): The share permissions to set
  - Option: Circle (value: 7)
  - Option: Email (value: 4)
  - Option: Group (value: 1)
  - Option: Public Link (value: 3)
  - Option: User (value: 0)
- **circleId** (string): The ID of the circle to share with
- **email** (string): The Email address to share with
- **groupId** (string): The ID of the group to share with
- **user** (string): The user to share with
- **options** (collection): Options
  - Option: password (value: undefined)
  - Option: permissions (value: undefined)
- **path** (string): The folder to create. The parent folder has to exist. The path should start with "/".
- **path** (string): The path of which to list the content. The path should start with "/".
- **userId** (string): Username the user will have
- **email** (string): The email of the user to invite
- **additionalFields** (collection): Additional Fields
  - Option: displayName (value: undefined)
- **userId** (string): Username the user will have
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: search (value: undefined)
  - Option: offset (value: undefined)
- **updateFields** (fixedCollection): Update Fields
  - Option: field (value: undefined)
