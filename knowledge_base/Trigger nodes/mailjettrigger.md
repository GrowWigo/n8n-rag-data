# Node: Mailjet Trigger

**Name**: mailjetTrigger
**Category**: trigger
**Description**: Handle Mailjet events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **event** (options): Determines which resource events the webhook is triggered for
  - Option: email.blocked (value: blocked)
  - Option: email.bounce (value: bounce)
  - Option: email.open (value: open)
  - Option: email.sent (value: sent)
  - Option: email.spam (value: spam)
  - Option: email.unsub (value: unsub)
