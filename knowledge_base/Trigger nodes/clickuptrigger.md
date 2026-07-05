# Node: ClickUp Trigger

**Name**: clickUpTrigger
**Category**: trigger
**Description**: Handle ClickUp events via webhooks (Beta)
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **team** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **events** (multiOptions): Events
  - Option: * (value: *)
  - Option: folder.created (value: folderCreated)
  - Option: folder.deleted (value: folderDeleted)
  - Option: folder.updated (value: folderUpdated)
  - Option: goal.created (value: goalCreated)
  - Option: goal.deleted (value: goalDeleted)
  - Option: goal.updated (value: goalUpdated)
  - Option: keyResult.created (value: keyResultCreated)
  - Option: keyResult.deleted (value: keyResultDelete)
  - Option: keyResult.updated (value: keyResultUpdated)
  - Option: list.created (value: listCreated)
  - Option: list.deleted (value: listDeleted)
  - Option: list.updated (value: listUpdated)
  - Option: space.created (value: spaceCreated)
  - Option: space.deleted (value: spaceDeleted)
  - Option: space.updated (value: spaceUpdated)
  - Option: task.assignee.updated (value: taskAssigneeUpdated)
  - Option: task.comment.posted (value: taskCommentPosted)
  - Option: task.comment.updated (value: taskCommentUpdated)
  - Option: task.created (value: taskCreated)
  - Option: task.deleted (value: taskDeleted)
  - Option: task.dueDate.updated (value: taskDueDateUpdated)
  - Option: task.moved (value: taskMoved)
  - Option: task.status.updated (value: taskStatusUpdated)
  - Option: task.tag.updated (value: taskTagUpdated)
  - Option: task.timeEstimate.updated (value: taskTimeEstimateUpdated)
  - Option: task.timeTracked.updated (value: taskTimeTrackedUpdated)
  - Option: task.updated (value: taskUpdated)
- **filters** (collection): Filters
  - Option: folderId (value: undefined)
  - Option: listId (value: undefined)
  - Option: spaceId (value: undefined)
  - Option: taskId (value: undefined)
