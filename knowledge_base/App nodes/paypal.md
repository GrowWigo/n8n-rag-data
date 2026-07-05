# Node: PayPal

**Name**: payPal
**Category**: output
**Description**: Consume PayPal API
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
  - Option: Payout (value: payout)
  - Option: Payout Item (value: payoutItem)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Cancel (value: cancel)
  - Option: Get (value: get)
- **senderBatchId** (string): A sender-specified ID number. Tracks the payout in an accounting system.
- **jsonParameters** (boolean): JSON Parameters
- **itemsUi** (fixedCollection): Items
  - Option: itemsValues (value: undefined)
- **itemsJson** (json): An array of individual payout items
- **additionalFields** (collection): Additional Fields
  - Option: emailSubject (value: undefined)
  - Option: emailMessage (value: undefined)
  - Option: note (value: undefined)
- **payoutBatchId** (string): The ID of the payout for which to show details
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **payoutItemId** (string): The ID of the payout item for which to show details
- **payoutItemId** (string): The ID of the payout item to cancel
