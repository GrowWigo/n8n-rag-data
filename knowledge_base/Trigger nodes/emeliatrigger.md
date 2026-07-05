# Node: Emelia Trigger

**Name**: emeliaTrigger
**Category**: trigger
**Description**: Handle Emelia campaign activity events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **campaignId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **events** (multiOptions): Events
  - Option: Email Bounced (value: bounced)
  - Option: Email Opened (value: opened)
  - Option: Email Replied (value: replied)
  - Option: Email Sent (value: sent)
  - Option: Link Clicked (value: clicked)
  - Option: Unsubscribed Contact (value: unsubscribed)
