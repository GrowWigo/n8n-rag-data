# Node: Stripe

**Name**: stripe
**Category**: transform
**Description**: Consume the Stripe API
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
  - Option: Balance (value: balance)
  - Option: Charge (value: charge)
  - Option: Coupon (value: coupon)
  - Option: Customer (value: customer)
  - Option: Customer Card (value: customerCard)
  - Option: Meter Event (value: meterEvent)
  - Option: Source (value: source)
  - Option: Token (value: token)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Add (value: add)
  - Option: Get (value: get)
  - Option: Remove (value: remove)
- **customerId** (string): ID of the customer to be associated with this card
- **token** (string): Token representing sensitive card information
- **customerId** (string): ID of the customer whose card to remove
- **cardId** (string): ID of the card to remove
- **customerId** (string): ID of the customer whose card to retrieve
- **sourceId** (string): ID of the source to retrieve
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **customerId** (string): ID of the customer to be associated with this charge
- **amount** (number): Amount in cents to be collected for this charge, e.g. enter <code>100</code> for $1.00
- **currency** (options): Three-letter ISO currency code, e.g. <code>USD</code> or <code>EUR</code>. It must be a <a href="https://stripe.com/docs/currencies">Stripe-supported currency</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **source** (string): ID of the customer's payment source to be charged
- **additionalFields** (collection): Additional Fields
  - Option: description (value: undefined)
  - Option: metadata (value: undefined)
  - Option: receipt_email (value: undefined)
  - Option: shipping (value: undefined)
- **chargeId** (string): ID of the charge to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **chargeId** (string): ID of the charge to update
- **updateFields** (collection): Update Fields
  - Option: description (value: undefined)
  - Option: metadata (value: undefined)
  - Option: receipt_email (value: undefined)
  - Option: shipping (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
- **duration** (options): How long the discount will be in effect
  - Option: Forever (value: forever)
  - Option: Once (value: once)
- **type** (options): Whether the coupon discount is a percentage or a fixed amount
  - Option: Fixed Amount (in Cents) (value: fixedAmount)
  - Option: Percent (value: percent)
- **amountOff** (number): Amount in cents to subtract from an invoice total, e.g. enter <code>100</code> for $1.00
- **currency** (options): Three-letter ISO currency code, e.g. <code>USD</code> or <code>EUR</code>. It must be a <a href="https://stripe.com/docs/currencies">Stripe-supported currency</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **percentOff** (number): Percentage to apply with the coupon
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **name** (string): Full name or business name of the customer to create
- **additionalFields** (collection): Additional Fields
  - Option: address (value: undefined)
  - Option: description (value: undefined)
  - Option: email (value: undefined)
  - Option: metadata (value: undefined)
  - Option: phone (value: undefined)
  - Option: shipping (value: undefined)
- **customerId** (string): ID of the customer to delete
- **customerId** (string): ID of the customer to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: email (value: undefined)
- **customerId** (string): ID of the customer to update
- **updateFields** (collection): Update Fields
  - Option: address (value: undefined)
  - Option: description (value: undefined)
  - Option: email (value: undefined)
  - Option: metadata (value: undefined)
  - Option: name (value: undefined)
  - Option: phone (value: undefined)
  - Option: shipping (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
- **eventName** (string): The name of the meter event. Corresponds with the event_name field on a meter.
- **customerId** (string): The Stripe customer ID associated with this meter event
- **value** (number): The value of the meter event. Must be an integer. Can be positive or negative.
- **additionalFields** (collection): Additional Fields
  - Option: identifier (value: undefined)
  - Option: timestamp (value: undefined)
  - Option: customPayload (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
- **customerId** (string): ID of the customer to attach the source to
- **type** (options): Type of source (payment instrument) to create
  - Option: WeChat (value: wechat)
- **amount** (number): Amount in cents to be collected for this charge, e.g. enter <code>100</code> for $1.00
- **currency** (options): Three-letter ISO currency code, e.g. <code>USD</code> or <code>EUR</code>. It must be a <a href="https://stripe.com/docs/currencies">Stripe-supported currency</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: metadata (value: undefined)
  - Option: statement_descriptor (value: undefined)
- **customerId** (string): ID of the customer whose source to delete
- **sourceId** (string): ID of the source to delete
- **sourceId** (string): ID of the source to retrieve
- **operation** (options): Operation
  - Option: Create (value: create)
- **type** (options): Type of token to create
  - Option: Card Token (value: cardToken)
- **number** (string): Card Number
- **cvc** (string): Security code printed on the back of the card
- **expirationMonth** (string): Number of the month when the card will expire
- **expirationYear** (string): Year when the card will expire
