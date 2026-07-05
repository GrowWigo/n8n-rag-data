# Node: Chargebee

**Name**: chargebee
**Category**: input
**Description**: Retrieve data from Chargebee API
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
  - Option: Customer (value: customer)
  - Option: Invoice (value: invoice)
  - Option: Subscription (value: subscription)
- **operation** (options): Operation
  - Option: Create (value: create)
- **properties** (collection): Properties to set on the new user
  - Option: id (value: undefined)
  - Option: first_name (value: undefined)
  - Option: last_name (value: undefined)
  - Option: email (value: undefined)
  - Option: phone (value: undefined)
  - Option: company (value: undefined)
  - Option: customProperties (value: undefined)
- **operation** (options): Operation
  - Option: List (value: list)
  - Option: PDF Invoice URL (value: pdfUrl)
- **maxResults** (number): Max. amount of results to return(< 100).
- **filters** (fixedCollection): Filter for invoices
  - Option: date (value: undefined)
  - Option: total (value: undefined)
- **invoiceId** (string): The ID of the invoice to get
- **operation** (options): Operation
  - Option: Cancel (value: cancel)
  - Option: Delete (value: delete)
- **subscriptionId** (string): The ID of the subscription to cancel
- **endOfTerm** (boolean): Whether it will not cancel it directly in will instead schedule the cancelation for the end of the term
- **subscriptionId** (string): The ID of the subscription to delete
