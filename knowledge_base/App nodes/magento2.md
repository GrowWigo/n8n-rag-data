# Node: Magento 2

**Name**: magento2
**Category**: input
**Description**: Consume Magento API
**Version**: 1

## Common Usecase
This is an AI Agent node. It uses LLMs to make decisions and use tools dynamically to achieve a goal.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Customer (value: customer)
  - Option: Invoice (value: invoice)
  - Option: Order (value: order)
  - Option: Product (value: product)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **email** (string): Email address of the user to create
- **firstname** (string): First name of the user to create
- **lastname** (string): Last name of the user to create
- **additionalFields** (collection): Additional Fields
  - Option: addresses (value: undefined)
  - Option: amazon_id (value: undefined)
  - Option: confirmation (value: undefined)
  - Option: customAttributes (value: undefined)
  - Option: dob (value: undefined)
  - Option: default_billing (value: undefined)
  - Option: default_shipping (value: undefined)
  - Option: gender (value: undefined)
  - Option: group_id (value: undefined)
  - Option: is_subscribed (value: undefined)
  - Option: middlename (value: undefined)
  - Option: password (value: undefined)
  - Option: prefix (value: undefined)
  - Option: store_id (value: undefined)
  - Option: suffix (value: undefined)
  - Option: vertex_customer_code (value: undefined)
  - Option: vertex_customer_country (value: undefined)
  - Option: website_id (value: undefined)
- **customerId** (string): ID of the customer to update
- **email** (string): Email
- **firstName** (string): First Name
- **lastName** (string): Last Name
- **website_id** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **updateFields** (collection): Update Fields
  - Option: addresses (value: undefined)
  - Option: amazon_id (value: undefined)
  - Option: confirmation (value: undefined)
  - Option: customAttributes (value: undefined)
  - Option: dob (value: undefined)
  - Option: default_billing (value: undefined)
  - Option: default_shipping (value: undefined)
  - Option: gender (value: undefined)
  - Option: group_id (value: undefined)
  - Option: is_subscribed (value: undefined)
  - Option: middlename (value: undefined)
  - Option: password (value: undefined)
  - Option: prefix (value: undefined)
  - Option: store_id (value: undefined)
  - Option: suffix (value: undefined)
  - Option: vertex_customer_code (value: undefined)
  - Option: vertex_customer_country (value: undefined)
  - Option: website_id (value: undefined)
- **customerId** (string): Customer ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterType** (options): Filter
  - Option: None (value: none)
  - Option: Build Manually (value: manual)
  - Option: JSON (value: json)
- **matchType** (options): Must Match
  - Option: Any filter (value: anyFilter)
  - Option: All Filters (value: allFilters)
- **filters** (fixedCollection): Filters
  - Option: conditions (value: undefined)
- **jsonNotice** (notice): See <a href="https://devdocs.magento.com/guides/v2.4/rest/performing-searches.html" target="_blank">Magento guide</a> to creating filters
- **filterJson** (string): Filters (JSON)
- **options** (collection): Options
  - Option: sort (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
- **orderId** (string): Order ID
- **operation** (options): Operation
  - Option: Cancel (value: cancel)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Ship (value: ship)
- **orderId** (string): Order ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterType** (options): Filter
  - Option: None (value: none)
  - Option: Build Manually (value: manual)
  - Option: JSON (value: json)
- **matchType** (options): Must Match
  - Option: Any filter (value: anyFilter)
  - Option: All Filters (value: allFilters)
- **filters** (fixedCollection): Filters
  - Option: conditions (value: undefined)
- **jsonNotice** (notice): See <a href="https://devdocs.magento.com/guides/v2.4/rest/performing-searches.html" target="_blank">Magento guide</a> to creating filters
- **filterJson** (string): Filters (JSON)
- **options** (collection): Options
  - Option: sort (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **sku** (string): Stock-keeping unit of the product
- **name** (string): Name
- **attributeSetId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **price** (number): Price
- **additionalFields** (collection): Additional Fields
  - Option: attribute_set_id (value: undefined)
  - Option: name (value: undefined)
  - Option: price (value: undefined)
  - Option: status (value: undefined)
  - Option: type_id (value: undefined)
  - Option: visibility (value: undefined)
  - Option: weight (value: undefined)
- **updateFields** (collection): Update Fields
  - Option: attribute_set_id (value: undefined)
  - Option: name (value: undefined)
  - Option: price (value: undefined)
  - Option: status (value: undefined)
  - Option: type_id (value: undefined)
  - Option: visibility (value: undefined)
  - Option: weight (value: undefined)
- **sku** (string): Stock-keeping unit of the product
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filterType** (options): Filter
  - Option: None (value: none)
  - Option: Build Manually (value: manual)
  - Option: JSON (value: json)
- **matchType** (options): Must Match
  - Option: Any filter (value: anyFilter)
  - Option: All Filters (value: allFilters)
- **filters** (fixedCollection): Filters
  - Option: conditions (value: undefined)
- **jsonNotice** (notice): See <a href="https://devdocs.magento.com/guides/v2.4/rest/performing-searches.html" target="_blank">Magento guide</a> to creating filters
- **filterJson** (string): Filters (JSON)
- **options** (collection): Options
  - Option: sort (value: undefined)
