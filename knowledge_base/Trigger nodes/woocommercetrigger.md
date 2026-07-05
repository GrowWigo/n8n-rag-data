# Node: WooCommerce Trigger

**Name**: wooCommerceTrigger
**Category**: trigger
**Description**: Handle WooCommerce events via webhooks
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
  - Option: coupon.created (value: coupon.created)
  - Option: coupon.deleted (value: coupon.deleted)
  - Option: coupon.updated (value: coupon.updated)
  - Option: customer.created (value: customer.created)
  - Option: customer.deleted (value: customer.deleted)
  - Option: customer.updated (value: customer.updated)
  - Option: order.created (value: order.created)
  - Option: order.deleted (value: order.deleted)
  - Option: order.updated (value: order.updated)
  - Option: product.created (value: product.created)
  - Option: product.deleted (value: product.deleted)
  - Option: product.updated (value: product.updated)
