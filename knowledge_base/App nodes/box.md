# Node: Box

**Name**: box
**Category**: input
**Description**: Consume Box API
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
  - Option: File (value: file)
  - Option: Folder (value: folder)
- **operation** (options): Operation
  - Option: Copy (value: copy)
  - Option: Delete (value: delete)
  - Option: Download (value: download)
  - Option: Get (value: get)
  - Option: Search (value: search)
  - Option: Share (value: share)
  - Option: Upload (value: upload)
- **fileId** (string): File ID
- **parentId** (string): The ID of folder to copy the file to. If not defined will be copied to the root folder.
- **additionalFields** (collection): Additional Fields
  - Option: fields (value: undefined)
  - Option: name (value: undefined)
  - Option: version (value: undefined)
- **fileId** (string): Field ID
- **fileId** (string): File ID
- **binaryPropertyName** (string): Put Output File in Field
- **fileId** (string): Field ID
- **additionalFields** (collection): Additional Fields
  - Option: fields (value: undefined)
- **query** (string): The string to search for. This query is matched against item names, descriptions, text content of files, and various other fields of the different item types.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: contet_types (value: undefined)
  - Option: createdRangeUi (value: undefined)
  - Option: direction (value: undefined)
  - Option: fields (value: undefined)
  - Option: file_extensions (value: undefined)
  - Option: ancestor_folder_ids (value: undefined)
  - Option: scope (value: undefined)
  - Option: size_range (value: undefined)
  - Option: sort (value: undefined)
  - Option: trash_content (value: undefined)
  - Option: updatedRangeUi (value: undefined)
  - Option: owner_user_ids (value: undefined)
- **fileId** (string): The ID of the file to share
- **accessibleBy** (options): The type of object the file will be shared with
  - Option: Group (value: group)
  - Option: User (value: user)
- **useEmail** (boolean): Whether identify the user by email or ID
- **email** (string): The user's email address to share the file with
- **userId** (string): The user's ID to share the file with
- **groupId** (string): The group's ID to share the file with
- **role** (options): The level of access granted
  - Option: Co-Owner (value: coOwner)
  - Option: Editor (value: editor)
  - Option: Previewer (value: previewer)
  - Option: Previewer Uploader (value: previewerUploader)
  - Option: Uploader (value: uploader)
  - Option: Viewer (value: viewer)
  - Option: Viewer Uploader (value: viewerUploader)
- **options** (collection): Options
  - Option: can_view_path (value: undefined)
  - Option: expires_at (value: undefined)
  - Option: fields (value: undefined)
  - Option: notify (value: undefined)
- **fileName** (string): The name the file should be saved as
- **binaryData** (boolean): Whether the data to upload should be taken from binary field
- **fileContent** (string): The text content of the file
- **binaryPropertyName** (string): Input Binary Field
- **parentId** (string): ID of the parent folder that will contain the file. If not it will be uploaded to the root folder.
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Search (value: search)
  - Option: Share (value: share)
  - Option: Update (value: update)
- **name** (string): Folder's name
- **parentId** (string): ID of the folder you want to create the new folder in. if not defined it will be created on the root folder.
- **options** (collection): Options
  - Option: access (value: undefined)
  - Option: fields (value: undefined)
- **folderId** (string): Folder ID
- **folderId** (string): Folder ID
- **recursive** (boolean): Whether to delete a folder that is not empty by recursively deleting the folder and all of its content
- **query** (string): The string to search for. This query is matched against item names, descriptions, text content of files, and various other fields of the different item types.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: contet_types (value: undefined)
  - Option: createdRangeUi (value: undefined)
  - Option: direction (value: undefined)
  - Option: fields (value: undefined)
  - Option: file_extensions (value: undefined)
  - Option: ancestor_folder_ids (value: undefined)
  - Option: scope (value: undefined)
  - Option: size_range (value: undefined)
  - Option: sort (value: undefined)
  - Option: trash_content (value: undefined)
  - Option: updatedRangeUi (value: undefined)
  - Option: owner_user_ids (value: undefined)
- **folderId** (string): The ID of the folder to share
- **accessibleBy** (options): The type of object the file will be shared with
  - Option: User (value: user)
  - Option: Group (value: group)
- **useEmail** (boolean): Whether identify the user by email or ID
- **email** (string): The user's email address to share the folder with
- **userId** (string): The user's ID to share the folder with
- **groupId** (string): The group's ID to share the folder with
- **role** (options): The level of access granted
  - Option: Co-Owner (value: coOwner)
  - Option: Editor (value: editor)
  - Option: Previewer (value: previewer)
  - Option: Previewer Uploader (value: previewerUploader)
  - Option: Uploader (value: uploader)
  - Option: Viewer (value: viewer)
  - Option: Viewer Uploader (value: viewerUploader)
- **options** (collection): Options
  - Option: can_view_path (value: undefined)
  - Option: expires_at (value: undefined)
  - Option: fields (value: undefined)
  - Option: notify (value: undefined)
- **folderId** (string): Folder ID
- **updateFields** (collection): Update Fields
  - Option: can_non_owners_invite (value: undefined)
  - Option: can_non_owners_view_collaborators (value: undefined)
  - Option: description (value: undefined)
  - Option: fields (value: undefined)
  - Option: is_collaboration_restricted_to_enterprise (value: undefined)
  - Option: name (value: undefined)
  - Option: parentId (value: undefined)
  - Option: shared_link (value: undefined)
