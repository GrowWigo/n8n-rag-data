# Node: Figma Trigger (Beta)

**Name**: figmaTrigger
**Category**: trigger
**Description**: Starts the workflow when Figma events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **teamId** (string): Trigger will monitor this Figma Team for changes. Team ID can be found in the URL of a Figma Team page when viewed in a web browser: figma.com/files/team/{TEAM-ID}/.
- **triggerOn** (options): Trigger On
  - Option: File Commented (value: fileComment)
  - Option: File Deleted (value: fileDelete)
  - Option: File Updated (value: fileUpdate)
  - Option: File Version Updated (value: fileVersionUpdate)
  - Option: Library Publish (value: libraryPublish)
