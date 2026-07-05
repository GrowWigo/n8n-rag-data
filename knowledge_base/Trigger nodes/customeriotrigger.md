# Node: Customer.io Trigger

**Name**: customerIoTrigger
**Category**: trigger
**Description**: Starts the workflow on a Customer.io update (Beta)
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **events** (multiOptions): The events that can trigger the webhook and whether they are enabled
  - Option: Customer Subscribed (value: customer.subscribed)
  - Option: Customer Unsubscribe (value: customer.unsubscribed)
  - Option: Email Attempted (value: email.attempted)
  - Option: Email Bounced (value: email.bounced)
  - Option: Email Clicked (value: email.clicked)
  - Option: Email Converted (value: email.converted)
  - Option: Email Delivered (value: email.delivered)
  - Option: Email Drafted (value: email.drafted)
  - Option: Email Failed (value: email.failed)
  - Option: Email Opened (value: email.opened)
  - Option: Email Sent (value: email.sent)
  - Option: Email Spammed (value: email.spammed)
  - Option: Push Attempted (value: push.attempted)
  - Option: Push Bounced (value: push.bounced)
  - Option: Push Clicked (value: push.clicked)
  - Option: Push Delivered (value: push.delivered)
  - Option: Push Drafted (value: push.drafted)
  - Option: Push Failed (value: push.failed)
  - Option: Push Opened (value: push.opened)
  - Option: Push Sent (value: push.sent)
  - Option: Slack Attempted (value: slack.attempted)
  - Option: Slack Clicked (value: slack.clicked)
  - Option: Slack Drafted (value: slack.drafted)
  - Option: Slack Failed (value: slack.failed)
  - Option: Slack Sent (value: slack.sent)
  - Option: SMS Attempted (value: sms.attempted)
  - Option: SMS Bounced (value: sms.bounced)
  - Option: SMS Clicked (value: sms.clicked)
  - Option: SMS Delivered (value: sms.delivered)
  - Option: SMS Drafted (value: sms.drafted)
  - Option: SMS Failed (value: sms.failed)
  - Option: SMS Sent (value: sms.sent)
