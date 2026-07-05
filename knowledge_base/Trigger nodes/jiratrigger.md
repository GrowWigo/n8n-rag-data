# Node: Jira Trigger

**Name**: jiraTrigger
**Category**: trigger
**Description**: Starts the workflow when Jira events occur
**Version**: 1, 1.1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **jiraVersion** (options): Jira Version
  - Option: Cloud (value: cloud)
  - Option: Server (Self Hosted) (value: server)
  - Option: Server (Pat) (Self Hosted) (value: serverPat)
- **authenticateWebhook** (boolean): Whether authentication should be activated for the incoming webhooks (makes it more secure)
- **incomingAuthentication** (options): If authentication should be activated for the webhook (makes it more secure)
  - Option: Query Auth (value: queryAuth)
  - Option: None (value: none)
- **events** (multiOptions): The events to listen to
  - Option: * (value: *)
  - Option: Board Configuration Changed (value: board_configuration_changed)
  - Option: Board Created (value: board_created)
  - Option: Board Deleted (value: board_deleted)
  - Option: Board Updated (value: board_updated)
  - Option: Comment Created (value: comment_created)
  - Option: Comment Deleted (value: comment_deleted)
  - Option: Comment Updated (value: comment_updated)
  - Option: Issue Created (value: jira:issue_created)
  - Option: Issue Deleted (value: jira:issue_deleted)
  - Option: Issue Link Created (value: issuelink_created)
  - Option: Issue Link Deleted (value: issuelink_deleted)
  - Option: Issue Updated (value: jira:issue_updated)
  - Option: Option Attachments Changed (value: option_attachments_changed)
  - Option: Option Issue Links Changed (value: option_issuelinks_changed)
  - Option: Option Subtasks Changed (value: option_subtasks_changed)
  - Option: Option Timetracking Changed (value: option_timetracking_changed)
  - Option: Option Unassigned Issues Changed (value: option_unassigned_issues_changed)
  - Option: Option Voting Changed (value: option_voting_changed)
  - Option: Option Watching Changed (value: option_watching_changed)
  - Option: Project Created (value: project_created)
  - Option: Project Deleted (value: project_deleted)
  - Option: Project Updated (value: project_updated)
  - Option: Sprint Closed (value: sprint_closed)
  - Option: Sprint Created (value: sprint_created)
  - Option: Sprint Deleted (value: sprint_deleted)
  - Option: Sprint Started (value: sprint_started)
  - Option: Sprint Updated (value: sprint_updated)
  - Option: User Created (value: user_created)
  - Option: User Deleted (value: user_deleted)
  - Option: User Updated (value: user_updated)
  - Option: Version Created (value: jira:version_created)
  - Option: Version Deleted (value: jira:version_deleted)
  - Option: Version Moved (value: jira:version_moved)
  - Option: Version Released (value: jira:version_released)
  - Option: Version Unreleased (value: jira:version_unreleased)
  - Option: Version Updated (value: jira:version_updated)
  - Option: Worklog Created (value: worklog_created)
  - Option: Worklog Deleted (value: worklog_deleted)
  - Option: Worklog Updated (value: worklog_updated)
- **additionalFields** (collection): Additional Fields
  - Option: excludeBody (value: undefined)
  - Option: filter (value: undefined)
  - Option: includeFields (value: undefined)
