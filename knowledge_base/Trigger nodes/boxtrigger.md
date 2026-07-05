# Node: Box Trigger

**Name**: boxTrigger
**Category**: trigger
**Description**: Starts the workflow when Box events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **events** (multiOptions): The events to listen to
  - Option: Collaboration Accepted (value: COLLABORATION.ACCEPTED)
  - Option: Collaboration Created (value: COLLABORATION.CREATED)
  - Option: Collaboration Rejected (value: COLLABORATION.REJECTED)
  - Option: Collaboration Removed (value: COLLABORATION.REMOVED)
  - Option: Collaboration Updated (value: COLLABORATION.UPDATED)
  - Option: Comment Created (value: COMMENT.CREATED)
  - Option: Comment Deleted (value: COMMENT.DELETED)
  - Option: Comment Updated (value: COMMENT.UPDATED)
  - Option: File Copied (value: FILE.COPIED)
  - Option: File Deleted (value: FILE.DELETED)
  - Option: File Downloaded (value: FILE.DOWNLOADED)
  - Option: File Locked (value: FILE.LOCKED)
  - Option: File Moved (value: FILE.MOVED)
  - Option: File Previewed (value: FILE.PREVIEWED)
  - Option: File Renamed (value: FILE.RENAMED)
  - Option: File Restored (value: FILE.RESTORED)
  - Option: File Trashed (value: FILE.TRASHED)
  - Option: File Unlocked (value: FILE.UNLOCKED)
  - Option: File Uploaded (value: FILE.UPLOADED)
  - Option: Folder Copied (value: FOLDER.COPIED)
  - Option: Folder Created (value: FOLDER.CREATED)
  - Option: Folder Deleted (value: FOLDER.DELETED)
  - Option: Folder Downloaded (value: FOLDER.DOWNLOADED)
  - Option: Folder Moved (value: FOLDER.MOVED)
  - Option: Folder Renamed (value: FOLDER.RENAMED)
  - Option: Folder Restored (value: FOLDER.RESTORED)
  - Option: Folder Trashed (value: FOLDER.TRASHED)
  - Option: Metadata Instance Created (value: METADATA_INSTANCE.CREATED)
  - Option: Metadata Instance Deleted (value: METADATA_INSTANCE.DELETED)
  - Option: Metadata Instance Updated (value: METADATA_INSTANCE.UPDATED)
  - Option: Sharedlink Created (value: SHARED_LINK.CREATED)
  - Option: Sharedlink Deleted (value: SHARED_LINK.DELETED)
  - Option: Sharedlink Updated (value: SHARED_LINK.UPDATED)
  - Option: Task Assignment Created (value: TASK_ASSIGNMENT.CREATED)
  - Option: Task Assignment Updated (value: TASK_ASSIGNMENT.UPDATED)
  - Option: Webhook Deleted (value: WEBHOOK.DELETED)
- **targetType** (options): The type of item to trigger a webhook
  - Option: File (value: file)
  - Option: Folder (value: folder)
- **targetId** (string): The ID of the item to trigger a webhook
