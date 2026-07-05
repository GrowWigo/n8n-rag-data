# Node: Brevo Trigger

**Name**: sendInBlueTrigger
**Category**: trigger
**Description**: Starts the workflow when Brevo events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **type** (options): Resource
  - Option: Inbound (value: inbound)
  - Option: Marketing (value: marketing)
  - Option: Transactional (value: transactional)
- **events** (multiOptions): Trigger On
  - Option: Email Blocked (value: blocked)
  - Option: Email Clicked (value: click)
  - Option: Email Deferred (value: deferred)
  - Option: Email Delivered (value: delivered)
  - Option: Email Hard Bounce (value: hardBounce)
  - Option: Email Invalid (value: invalid)
  - Option: Email Marked Spam (value: spam)
  - Option: Email Opened (value: opened)
  - Option: Email Sent (value: request)
  - Option: Email Soft-Bounce (value: softBounce)
  - Option: Email Unique Open (value: uniqueOpened)
  - Option: Email Unsubscribed (value: unsubscribed)
- **events** (multiOptions): Trigger On
  - Option: Marketing Email Clicked (value: click)
  - Option: Marketing Email Delivered (value: delivered)
  - Option: Marketing Email Hard Bounce (value: hardBounce)
  - Option: Marketing Email List Addition (value: listAddition)
  - Option: Marketing Email Opened (value: opened)
  - Option: Marketing Email Soft Bounce (value: softBounce)
  - Option: Marketing Email Spam (value: spam)
  - Option: Marketing Email Unsubscribed (value: unsubscribed)
- **events** (multiOptions): Trigger On
  - Option: Inbound Email Processed (value: inboundEmailProcessed)
