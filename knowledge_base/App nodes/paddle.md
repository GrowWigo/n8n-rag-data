# Node: Paddle

**Name**: paddle
**Category**: output
**Description**: Consume Paddle API
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
  - Option: Coupon (value: coupon)
  - Option: Payment (value: payment)
  - Option: Plan (value: plan)
  - Option: Product (value: product)
  - Option: User (value: user)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **couponType** (options): Either product (valid for specified products or subscription plans) or checkout (valid for any checkout)
  - Option: Checkout (value: checkout)
  - Option: Product (value: product)
- **productIds** (multiOptions): Comma-separated list of product IDs. Required if coupon_type is product. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **discountType** (options): Either flat or percentage
  - Option: Flat (value: flat)
  - Option: Percentage (value: percentage)
- **discountAmount** (number): Discount amount in currency
- **discountAmount** (number): Discount amount in percentage
- **currency** (options): The currency must match the balance currency specified in your account
  - Option: ARS (value: ARS)
  - Option: AUD (value: AUD)
  - Option: BRL (value: BRL)
  - Option: CAD (value: CAD)
  - Option: CHF (value: CHF)
  - Option: CNY (value: CNY)
  - Option: CZK (value: CZK)
  - Option: DKK (value: DKK)
  - Option: EUR (value: EUR)
  - Option: GBP (value: GBP)
  - Option: HKD (value: HKD)
  - Option: HUF (value: HUF)
  - Option: INR (value: INR)
  - Option: JPY (value: JPY)
  - Option: KRW (value: KRW)
  - Option: MXN (value: MXN)
  - Option: NOK (value: NOK)
  - Option: NZD (value: NZD)
  - Option: PLN (value: PLN)
  - Option: RUB (value: RUB)
  - Option: SEK (value: SEK)
  - Option: SGD (value: SGD)
  - Option: THB (value: THB)
  - Option: TWD (value: TWD)
  - Option: USD (value: USD)
  - Option: ZAR (value: ZAR)
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Attributes in JSON form
- **additionalFields** (collection): Additional Fields
  - Option: allowedUses (value: undefined)
  - Option: couponCode (value: undefined)
  - Option: couponPrefix (value: undefined)
  - Option: description (value: undefined)
  - Option: expires (value: undefined)
  - Option: group (value: undefined)
  - Option: numberOfCoupons (value: undefined)
  - Option: recurring (value: undefined)
- **productId** (string): The specific product/subscription ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **updateBy** (options): Either flat or percentage
  - Option: Coupon Code (value: couponCode)
  - Option: Group (value: group)
- **couponCode** (string): Identify the coupon to update
- **group** (string): The name of the group of coupons you want to update
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Attributes in JSON form
- **additionalFields** (collection): Additional Fields
  - Option: allowedUses (value: undefined)
  - Option: discount (value: undefined)
  - Option: expires (value: undefined)
  - Option: newCouponCode (value: undefined)
  - Option: newGroup (value: undefined)
  - Option: productIds (value: undefined)
  - Option: recurring (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
  - Option: Reschedule (value: reschedule)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Attributes in JSON form
- **additionalFields** (collection): Additional Fields
  - Option: from (value: undefined)
  - Option: to (value: undefined)
  - Option: isPaid (value: undefined)
  - Option: plan (value: undefined)
  - Option: subscriptionId (value: undefined)
  - Option: state (value: undefined)
  - Option: isOneOffCharge (value: undefined)
- **paymentId** (options): The upcoming subscription payment ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **date** (dateTime): Date you want to move the payment to
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **planId** (string): Filter: The subscription plan ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **jsonParameters** (boolean): JSON Parameters
- **additionalFieldsJson** (json): Attributes in JSON form
- **additionalFields** (collection): Additional Fields
  - Option: planId (value: undefined)
  - Option: subscriptionId (value: undefined)
  - Option: state (value: undefined)
