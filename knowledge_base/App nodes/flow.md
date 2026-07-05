# Node: Flow

**Name**: flow
**Category**: output
**Description**: Consume Flow API
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
  - Option: Task (value: task)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Update (value: update)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **workspaceId** (string): Create resources under the given workspace
- **name** (string): The title of the task
- **additionalFields** (collection): Additional Fields
  - Option: ownerid (value: undefined)
  - Option: listID (value: undefined)
  - Option: startsOn (value: undefined)
  - Option: dueOn (value: undefined)
  - Option: mirrorParentSubscribers (value: undefined)
  - Option: mirrorParentTags (value: undefined)
  - Option: noteContent (value: undefined)
  - Option: noteMimeType (value: undefined)
  - Option: parentId (value: undefined)
  - Option: positionList (value: undefined)
  - Option: positionUpcoming (value: undefined)
  - Option: position (value: undefined)
  - Option: sectionId (value: undefined)
  - Option: tags (value: undefined)
- **workspaceId** (string): Create resources under the given workspace
- **taskId** (string): Task ID
- **updateFields** (collection): Update Fields
  - Option: name (value: undefined)
  - Option: completed (value: undefined)
  - Option: ownerid (value: undefined)
  - Option: listID (value: undefined)
  - Option: startsOn (value: undefined)
  - Option: dueOn (value: undefined)
  - Option: mirrorParentSubscribers (value: undefined)
  - Option: mirrorParentTags (value: undefined)
  - Option: noteContent (value: undefined)
  - Option: noteMimeType (value: undefined)
  - Option: parentId (value: undefined)
  - Option: positionList (value: undefined)
  - Option: positionUpcoming (value: undefined)
  - Option: position (value: undefined)
  - Option: sectionId (value: undefined)
  - Option: tags (value: undefined)
- **taskId** (string): Task ID
- **filters** (collection): Filters
  - Option: include (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: include (value: undefined)
  - Option: order (value: undefined)
  - Option: workspaceId (value: undefined)
  - Option: createdBefore (value: undefined)
  - Option: createdAfter (value: undefined)
  - Option: updateBefore (value: undefined)
  - Option: updateAfter (value: undefined)
  - Option: deleted (value: undefined)
  - Option: cleared (value: undefined)
