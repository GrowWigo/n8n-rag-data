# Node: Postmark Trigger

**Name**: postmarkTrigger
**Category**: trigger
**Description**: Starts the workflow when Postmark events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **events** (multiOptions): Webhook events that will be enabled for that endpoint
  - Option: Bounce (value: bounce)
  - Option: Click (value: click)
  - Option: Delivery (value: delivery)
  - Option: Open (value: open)
  - Option: Spam Complaint (value: spamComplaint)
  - Option: Subscription Change (value: subscriptionChange)
- **firstOpen** (boolean): Only fires on first open for event "Open"
- **includeContent** (boolean): Whether to include message content for events "Bounce" and "Spam Complaint"
