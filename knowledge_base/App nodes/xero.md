# Node: Xero

**Name**: xero
**Category**: output
**Description**: Consume Xero API
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
  - Option: Contact (value: contact)
  - Option: Invoice (value: invoice)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **organizationId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **name** (string): Full name of contact/organisation
- **additionalFields** (collection): Additional Fields
  - Option: accountNumber (value: undefined)
  - Option: addressesUi (value: undefined)
  - Option: bankAccountDetails (value: undefined)
  - Option: contactNumber (value: undefined)
  - Option: contactStatus (value: undefined)
  - Option: defaultCurrency (value: undefined)
  - Option: emailAddress (value: undefined)
  - Option: firstName (value: undefined)
  - Option: lastName (value: undefined)
  - Option: phonesUi (value: undefined)
  - Option: purchasesDefaultAccountCode (value: undefined)
  - Option: salesDefaultAccountCode (value: undefined)
  - Option: skypeUserName (value: undefined)
  - Option: taxNumber (value: undefined)
  - Option: xeroNetworkKey (value: undefined)
- **organizationId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **contactId** (string): Contact ID
- **organizationId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: includeArchived (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: sortOrder (value: undefined)
  - Option: where (value: undefined)
- **organizationId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **contactId** (string): Contact ID
- **updateFields** (collection): Update Fields
  - Option: accountNumber (value: undefined)
  - Option: addressesUi (value: undefined)
  - Option: bankAccountDetails (value: undefined)
  - Option: contactNumber (value: undefined)
  - Option: contactStatus (value: undefined)
  - Option: defaultCurrency (value: undefined)
  - Option: emailAddress (value: undefined)
  - Option: firstName (value: undefined)
  - Option: lastName (value: undefined)
  - Option: name (value: undefined)
  - Option: phonesUi (value: undefined)
  - Option: purchasesDefaultAccountCode (value: undefined)
  - Option: salesDefaultAccountCode (value: undefined)
  - Option: skypeUserName (value: undefined)
  - Option: taxNumber (value: undefined)
  - Option: xeroNetworkKey (value: undefined)
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **organizationId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **type** (options): Invoice Type
  - Option: Bill (value: ACCPAY)
  - Option: Sales Invoice (value: ACCREC)
- **contactId** (string): Contact ID
- **lineItemsUi** (fixedCollection): Line item data
  - Option: lineItemsValues (value: undefined)
- **additionalFields** (collection): Additional Fields
  - Option: brandingThemeId (value: undefined)
  - Option: currency (value: undefined)
  - Option: currencyRate (value: undefined)
  - Option: date (value: undefined)
  - Option: dueDate (value: undefined)
  - Option: expectedPaymentDate (value: undefined)
  - Option: invoiceNumber (value: undefined)
  - Option: lineAmountType (value: undefined)
  - Option: plannedPaymentDate (value: undefined)
  - Option: reference (value: undefined)
  - Option: sendToContact (value: undefined)
  - Option: status (value: undefined)
  - Option: url (value: undefined)
- **organizationId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **invoiceId** (string): Invoice ID
- **updateFields** (collection): Update Fields
  - Option: brandingThemeId (value: undefined)
  - Option: contactId (value: undefined)
  - Option: currency (value: undefined)
  - Option: currencyRate (value: undefined)
  - Option: date (value: undefined)
  - Option: dueDate (value: undefined)
  - Option: expectedPaymentDate (value: undefined)
  - Option: invoiceNumber (value: undefined)
  - Option: lineAmountType (value: undefined)
  - Option: lineItemsUi (value: undefined)
  - Option: plannedPaymentDate (value: undefined)
  - Option: reference (value: undefined)
  - Option: sendToContact (value: undefined)
  - Option: status (value: undefined)
  - Option: url (value: undefined)
- **organizationId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **invoiceId** (string): Invoice ID
- **organizationId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: createdByMyApp (value: undefined)
  - Option: orderBy (value: undefined)
  - Option: sortOrder (value: undefined)
  - Option: statuses (value: undefined)
  - Option: where (value: undefined)
