# Node: Shopify

**Name**: shopify
**Category**: output
**Description**: Consume Shopify API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **apiVersion** (notice): Shopify API Version: 2024-07
- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
  - Option: API Key (value: apiKey)
- **resource** (options): Resource
  - Option: Order (value: order)
  - Option: Product (value: product)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **additionalFields** (collection): Additional Fields
  - Option: billingAddressUi (value: undefined)
  - Option: discountCodesUi (value: undefined)
  - Option: email (value: undefined)
  - Option: fulfillmentStatus (value: undefined)
  - Option: inventoryBehaviour (value: undefined)
  - Option: locationId (value: undefined)
  - Option: note (value: undefined)
  - Option: sendFulfillmentReceipt (value: undefined)
  - Option: sendReceipt (value: undefined)
  - Option: shippingAddressUi (value: undefined)
  - Option: sourceName (value: undefined)
  - Option: tags (value: undefined)
  - Option: test (value: undefined)
- **limeItemsUi** (fixedCollection): Line Items
  - Option: lineItemValues (value: undefined)
- **orderId** (string): Order ID
- **orderId** (string): Order ID
- **options** (collection): Options
  - Option: fields (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: attributionAppId (value: undefined)
  - Option: createdAtMin (value: undefined)
  - Option: createdAtMax (value: undefined)
  - Option: financialStatus (value: undefined)
  - Option: fulfillmentStatus (value: undefined)
  - Option: fields (value: undefined)
  - Option: ids (value: undefined)
  - Option: processedAtMax (value: undefined)
  - Option: processedAtMin (value: undefined)
  - Option: status (value: undefined)
  - Option: sinceId (value: undefined)
  - Option: updatedAtMax (value: undefined)
  - Option: updatedAtMin (value: undefined)
- **orderId** (string): Order ID
- **updateFields** (collection): Update Fields
  - Option: email (value: undefined)
  - Option: locationId (value: undefined)
  - Option: note (value: undefined)
  - Option: shippingAddressUi (value: undefined)
  - Option: sourceName (value: undefined)
  - Option: tags (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **title** (string): The name of the product
- **productId** (string): Product ID
- **additionalFields** (collection): Additional Fields
  - Option: body_html (value: undefined)
  - Option: handle (value: undefined)
  - Option: images (value: undefined)
  - Option: productOptions (value: undefined)
  - Option: product_type (value: undefined)
  - Option: published_at (value: undefined)
  - Option: published_scope (value: undefined)
  - Option: tags (value: undefined)
  - Option: template_suffix (value: undefined)
  - Option: vendor (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: body_html (value: undefined)
  - Option: handle (value: undefined)
  - Option: images (value: undefined)
  - Option: productOptions (value: undefined)
  - Option: product_type (value: undefined)
  - Option: published_at (value: undefined)
  - Option: published_scope (value: undefined)
  - Option: tags (value: undefined)
  - Option: template_suffix (value: undefined)
  - Option: title (value: undefined)
  - Option: vendor (value: undefined)
- **productId** (string): Product ID
- **productId** (string): Product ID
- **additionalFields** (collection): Additional Fields
  - Option: fields (value: undefined)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **additionalFields** (collection): Additional Fields
  - Option: collection_id (value: undefined)
  - Option: created_at_max (value: undefined)
  - Option: created_at_min (value: undefined)
  - Option: fields (value: undefined)
  - Option: handle (value: undefined)
  - Option: ids (value: undefined)
  - Option: presentment_currencies (value: undefined)
  - Option: product_type (value: undefined)
  - Option: published_at_max (value: undefined)
  - Option: published_at_min (value: undefined)
  - Option: published_status (value: undefined)
  - Option: title (value: undefined)
  - Option: updated_at_max (value: undefined)
  - Option: updated_at_min (value: undefined)
  - Option: vendor (value: undefined)
