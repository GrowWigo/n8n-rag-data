# Node: ConvertKit Trigger

**Name**: convertKitTrigger
**Category**: trigger
**Description**: Handle ConvertKit events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **event** (options): The events that can trigger the webhook and whether they are enabled
  - Option: Form Subscribe (value: formSubscribe)
  - Option: Link Click (value: linkClick)
  - Option: Product Purchase (value: productPurchase)
  - Option: Purchase Created (value: purchaseCreate)
  - Option: Sequence Complete (value: courseComplete)
  - Option: Sequence Subscribe (value: courseSubscribe)
  - Option: Subscriber Activated (value: subscriberActivate)
  - Option: Subscriber Unsubscribe (value: subscriberUnsubscribe)
  - Option: Tag Add (value: tagAdd)
  - Option: Tag Remove (value: tagRemove)
- **formId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **courseId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **link** (string): The URL of the initiating link
- **productId** (string): Product ID
- **tagId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
