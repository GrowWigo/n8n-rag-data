# Node: Unleashed Software

**Name**: unleashedSoftware
**Category**: transform
**Description**: Consume Unleashed Software API
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
  - Option: Sales Order (value: salesOrder)
  - Option: Stock On Hand (value: stockOnHand)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: customerId (value: undefined)
  - Option: customerCode (value: undefined)
  - Option: endDate (value: undefined)
  - Option: modifiedSince (value: undefined)
  - Option: orderNumber (value: undefined)
  - Option: orderStatus (value: undefined)
  - Option: startDate (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **productId** (string): Product ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: asAtDate (value: undefined)
  - Option: IsAssembled (value: undefined)
  - Option: modifiedSince (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: productId (value: undefined)
  - Option: warehouseCode (value: undefined)
  - Option: warehouseName (value: undefined)
