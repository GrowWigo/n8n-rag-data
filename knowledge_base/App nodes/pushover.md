# Node: Pushover

**Name**: pushover
**Category**: input
**Description**: Consume Pushover API
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
  - Option: Message (value: message)
- **operation** (options): Operation
  - Option: Push (value: push)
- **userKey** (string): The user/group key (not e-mail address) of your user (or you), viewable when logged into the <a href="https://pushover.net/">dashboard</a> (often referred to as <code>USER_KEY</code> in the <a href="https://support.pushover.net/i44-example-code-and-pushover-libraries">libraries</a> and code examples)
- **message** (string): Your message
- **priority** (options): Send as -2 to generate no notification/alert, -1 to always send as a quiet notification, 1 to display as high-priority and bypass the user's quiet hours, or 2 to also require confirmation from the user
  - Option: Lowest Priority (value: -2)
  - Option: Low Priority (value: -1)
  - Option: Normal Priority (value: 0)
  - Option: High Priority (value: 1)
  - Option: Emergency Priority (value: 2)
- **retry** (number): Specifies how often (in seconds) the Pushover servers will send the same notification to the user. This parameter must have a value of at least 30 seconds between retries.
- **expire** (number): Specifies how many seconds your notification will continue to be retried for (every retry seconds)
- **additionalFields** (collection): Additional Fields
  - Option: attachmentsUi (value: undefined)
  - Option: device (value: undefined)
  - Option: html (value: undefined)
  - Option: sound (value: undefined)
  - Option: timestamp (value: undefined)
  - Option: title (value: undefined)
  - Option: timestamp (value: undefined)
  - Option: url (value: undefined)
  - Option: url_title (value: undefined)
