# Node: Shopify Trigger

**Name**: shopifyTrigger
**Category**: trigger
**Description**: Handle Shopify events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
  - Option: API Key (value: apiKey)
- **topic** (options): Trigger On
  - Option: App Uninstalled (value: app/uninstalled)
  - Option: Cart Created (value: carts/create)
  - Option: Cart Updated (value: carts/update)
  - Option: Checkout Created (value: checkouts/create)
  - Option: Checkout Delete (value: checkouts/delete)
  - Option: Checkout Update (value: checkouts/update)
  - Option: Collection Created (value: collections/create)
  - Option: Collection Deleted (value: collections/delete)
  - Option: Collection Listings Added (value: collection_listings/add)
  - Option: Collection Listings Removed (value: collection_listings/remove)
  - Option: Collection Listings Updated (value: collection_listings/update)
  - Option: Collection Updated (value: collections/update)
  - Option: Customer Created (value: customers/create)
  - Option: Customer Deleted (value: customers/delete)
  - Option: Customer Disabled (value: customers/disable)
  - Option: Customer Enabled (value: customers/enable)
  - Option: Customer Groups Created (value: customer_groups/create)
  - Option: Customer Groups Deleted (value: customer_groups/delete)
  - Option: Customer Groups Updated (value: customer_groups/update)
  - Option: Customer Updated (value: customers/update)
  - Option: Draft Orders Created (value: draft_orders/create)
  - Option: Draft Orders Deleted (value: draft_orders/delete)
  - Option: Draft Orders Updated (value: draft_orders/update)
  - Option: Fulfillment Created (value: fulfillments/create)
  - Option: Fulfillment Events Created (value: fulfillment_events/create)
  - Option: Fulfillment Events Deleted (value: fulfillment_events/delete)
  - Option: Fulfillment Updated (value: fulfillments/update)
  - Option: Inventory Items Created (value: inventory_items/create)
  - Option: Inventory Items Deleted (value: inventory_items/delete)
  - Option: Inventory Items Updated (value: inventory_items/update)
  - Option: Inventory Levels Connected (value: inventory_levels/connect)
  - Option: Inventory Levels Disconnected (value: inventory_levels/disconnect)
  - Option: Inventory Levels Updated (value: inventory_levels/update)
  - Option: Locale Created (value: locales/create)
  - Option: Locale Updated (value: locales/update)
  - Option: Location Created (value: locations/create)
  - Option: Location Deleted (value: locations/delete)
  - Option: Location Updated (value: locations/update)
  - Option: Order Cancelled (value: orders/cancelled)
  - Option: Order Created (value: orders/create)
  - Option: Order Fulfilled (value: orders/fulfilled)
  - Option: Order Paid (value: orders/paid)
  - Option: Order Partially Fulfilled (value: orders/partially_fulfilled)
  - Option: Order Transactions Created (value: order_transactions/create)
  - Option: Order Updated (value: orders/updated)
  - Option: Orders Deleted (value: orders/delete)
  - Option: Product Created (value: products/create)
  - Option: Product Deleted (value: products/delete)
  - Option: Product Listings Added (value: product_listings/add)
  - Option: Product Listings Removed (value: product_listings/remove)
  - Option: Product Listings Updated (value: product_listings/update)
  - Option: Product Updated (value: products/update)
  - Option: Refund Created (value: refunds/create)
  - Option: Shop Updated (value: shop/update)
  - Option: Tender Transactions Created (value: tender_transactions/create)
  - Option: Theme Created (value: themes/create)
  - Option: Theme Deleted (value: themes/delete)
  - Option: Theme Published (value: themes/publish)
  - Option: Theme Updated (value: themes/update)
