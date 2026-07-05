# Node: Gumroad Trigger

**Name**: gumroadTrigger
**Category**: trigger
**Description**: Handle Gumroad events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): The resource is gonna fire the event
  - Option: Cancellation (value: cancellation)
  - Option: Dispute (value: dispute)
  - Option: Dispute Won (value: dispute_won)
  - Option: Refund (value: refund)
  - Option: Sale (value: sale)
