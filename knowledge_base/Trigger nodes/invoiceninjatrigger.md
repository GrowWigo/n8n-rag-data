# Node: Invoice Ninja Trigger

**Name**: invoiceNinjaTrigger
**Category**: trigger
**Description**: Starts the workflow when Invoice Ninja events occur
**Version**: 1, 2

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **apiVersion** (options): API Version
  - Option: Version 4 (value: v4)
  - Option: Version 5 (value: v5)
- **apiVersion** (options): API Version
  - Option: Version 4 (value: v4)
  - Option: Version 5 (value: v5)
- **event** (options): Event
  - Option: Client Created (value: create_client)
  - Option: Invoice Created (value: create_invoice)
  - Option: Payment Created (value: create_payment)
  - Option: Quote Created (value: create_quote)
  - Option: Vendor Created (value: create_vendor)
