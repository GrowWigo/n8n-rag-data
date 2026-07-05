# Node: Local File Trigger

**Name**: localFileTrigger
**Category**: trigger
**Description**: Triggers a workflow on file system changes
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **triggerOn** (options): Trigger On
  - Option: Changes to a Specific File (value: file)
  - Option: Changes Involving a Specific Folder (value: folder)
- **path** (string): File to Watch
- **path** (string): Folder to Watch
- **events** (multiOptions): The events to listen to
  - Option: File Added (value: add)
  - Option: File Changed (value: change)
  - Option: File Deleted (value: unlink)
  - Option: Folder Added (value: addDir)
  - Option: Folder Deleted (value: unlinkDir)
- **options** (collection): Options
  - Option: awaitWriteFinish (value: undefined)
  - Option: followSymlinks (value: undefined)
  - Option: ignored (value: undefined)
  - Option: ignoreInitial (value: undefined)
  - Option: depth (value: undefined)
  - Option: usePolling (value: undefined)
  - Option: ignoreMode (value: undefined)
