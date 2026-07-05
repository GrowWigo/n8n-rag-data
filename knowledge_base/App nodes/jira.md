# Node: Jira Software

**Name**: jira
**Category**: output
**Description**: Consume Jira Software API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **jiraVersion** (options): Jira Version
  - Option: Cloud (value: cloud)
  - Option: Server (Self Hosted) (value: server)
  - Option: Server Pat (Self Hosted) (value: serverPat)
- **resource** (options): Resource
  - Option: Issue (value: issue)
  - Option: Issue Attachment (value: issueAttachment)
  - Option: Issue Comment (value: issueComment)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Changelog (value: changelog)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Notify (value: notify)
  - Option: Status (value: transitions)
  - Option: Update (value: update)
- **project** (resourceLocator): Project
- **issueType** (resourceLocator): Issue Type
- **summary** (string): Summary
- **additionalFields** (collection): Additional Fields
  - Option: assignee (value: undefined)
  - Option: description (value: undefined)
  - Option: componentIds (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: labels (value: undefined)
  - Option: serverLabels (value: undefined)
  - Option: parentIssueKey (value: undefined)
  - Option: priority (value: undefined)
  - Option: reporter (value: undefined)
  - Option: updateHistory (value: undefined)
- **issueKey** (string): Issue Key
- **updateFields** (collection): Update Fields
  - Option: assignee (value: undefined)
  - Option: description (value: undefined)
  - Option: customFieldsUi (value: undefined)
  - Option: issueType (value: undefined)
  - Option: labels (value: undefined)
  - Option: serverLabels (value: undefined)
  - Option: parentIssueKey (value: undefined)
  - Option: priority (value: undefined)
  - Option: reporter (value: undefined)
  - Option: summary (value: undefined)
  - Option: statusId (value: undefined)
- **issueKey** (string): Issue Key
- **deleteSubtasks** (boolean): Delete Subtasks
- **issueKey** (string): Issue Key
- **simplifyOutput** (boolean): Whether to return a simplified version of the response instead of the raw data
- **additionalFields** (collection): Additional Fields
  - Option: expand (value: undefined)
  - Option: fields (value: undefined)
  - Option: fieldsByKey (value: undefined)
  - Option: properties (value: undefined)
  - Option: updateHistory (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: expand (value: undefined)
  - Option: fields (value: undefined)
  - Option: fieldsByKey (value: undefined)
  - Option: jql (value: undefined)
- **issueKey** (string): Issue Key
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **issueKey** (string): Issue Key
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: htmlBody (value: undefined)
  - Option: subject (value: undefined)
  - Option: textBody (value: undefined)
- **notificationRecipientsUi** (fixedCollection): The recipients of the email notification for the issue
  - Option: notificationRecipientsValues (value: undefined)
- **notificationRecipientsJson** (json): The recipients of the email notification for the issue
- **notificationRecipientsRestrictionsUi** (fixedCollection): Restricts the notifications to users with the specified permissions
  - Option: notificationRecipientsRestrictionsValues (value: undefined)
- **notificationRecipientsRestrictionsJson** (json): Restricts the notifications to users with the specified permissions
- **issueKey** (string): Issue Key
- **additionalFields** (collection): Additional Fields
  - Option: expand (value: undefined)
  - Option: transitionId (value: undefined)
  - Option: skipRemoteOnlyCondition (value: undefined)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Remove (value: remove)
- **issueKey** (string): Issue Key
- **binaryPropertyName** (string): Input Binary Field
- **attachmentId** (string): The ID of the attachment
- **download** (boolean): Download
- **binaryProperty** (string): Put Output File in Field
- **issueKey** (string): Issue Key
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **download** (boolean): Download
- **binaryProperty** (string): Put Output File in Field
- **attachmentId** (string): The ID of the attachment
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Remove (value: remove)
  - Option: Update (value: update)
- **issueKey** (string): issueComment Key
- **jsonParameters** (boolean): JSON Parameters
- **comment** (string): Comment's text
- **commentJson** (json): The Atlassian Document Format (ADF). Online builder can be found <a href="https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/">here</a>.
- **options** (collection): Options
  - Option: expand (value: undefined)
  - Option: wikiMarkup (value: undefined)
- **issueKey** (string): The ID or key of the issue
- **commentId** (string): The ID of the comment
- **options** (collection): Options
  - Option: expand (value: undefined)
- **issueKey** (string): The ID or key of the issue
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: expand (value: undefined)
  - Option: orderBy (value: undefined)
- **issueKey** (string): The ID or key of the issue
- **commentId** (string): The ID of the comment
- **issueKey** (string): The Issue Comment key
- **commentId** (string): The ID of the comment
- **jsonParameters** (boolean): JSON Parameters
- **comment** (string): Comment's text
- **commentJson** (json): The Atlassian Document Format (ADF). Online builder can be found <a href="https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/">here</a>.
- **options** (collection): Options
  - Option: expand (value: undefined)
  - Option: wikiMarkup (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
- **username** (string): Username
- **emailAddress** (string): Email Address
- **displayName** (string): Display Name
- **additionalFields** (collection): Additional Fields
  - Option: password (value: undefined)
  - Option: notification (value: undefined)
- **accountId** (string): Account ID of the user to delete
- **accountId** (string): Account ID of the user to retrieve
- **additionalFields** (collection): Additional Fields
  - Option: expand (value: undefined)
