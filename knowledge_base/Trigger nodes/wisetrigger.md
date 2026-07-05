# Node: Wise Trigger

**Name**: wiseTrigger
**Category**: trigger
**Description**: Handle Wise events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **profileId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **event** (options): Event
  - Option: Balance Credit (value: balanceCredit)
  - Option: Balance Update (value: balanceUpdate)
  - Option: Transfer Active Case (value: transferActiveCases)
  - Option: Transfer State Changed (value: tranferStateChange)
