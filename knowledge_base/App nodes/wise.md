# Node: Wise

**Name**: wise
**Category**: transform
**Description**: Consume the Wise API
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
  - Option: Account (value: account)
  - Option: Exchange Rate (value: exchangeRate)
  - Option: Profile (value: profile)
  - Option: Quote (value: quote)
  - Option: Recipient (value: recipient)
  - Option: Transfer (value: transfer)
- **operation** (options): Operation
  - Option: Get Balances (value: getBalances)
  - Option: Get Currencies (value: getCurrencies)
  - Option: Get Statement (value: getStatement)
- **profileId** (options): ID of the user profile to retrieve the balance of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **profileId** (options): ID of the user profile whose account to retrieve the statement of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **borderlessAccountId** (options): ID of the borderless account to retrieve the statement of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **currency** (string): Code of the currency of the borderless account to retrieve the statement of
- **format** (options): File format to retrieve the statement in
  - Option: JSON (value: json)
  - Option: CSV (value: csv)
  - Option: PDF (value: pdf)
  - Option: XML (CAMT.053) (value: xml)
- **binaryProperty** (string): Put Output File in Field
- **fileName** (string): Name of the file that will be downloaded
- **additionalFields** (collection): Additional Fields
  - Option: lineStyle (value: undefined)
  - Option: range (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
- **source** (string): Code of the source currency to retrieve the exchange rate for
- **target** (string): Code of the target currency to retrieve the exchange rate for
- **additionalFields** (collection): Additional Fields
  - Option: interval (value: undefined)
  - Option: range (value: undefined)
  - Option: time (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **profileId** (options): ID of the user profile to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Get (value: get)
- **profileId** (options): ID of the user profile to create the quote under. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **targetAccountId** (options): ID of the account that will receive the funds. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **amountType** (options): Whether the amount is to be sent or received
  - Option: Source (value: source)
  - Option: Target (value: target)
- **amount** (number): Amount of funds for the quote to create
- **sourceCurrency** (string): Code of the currency to send for the quote to create
- **targetCurrency** (string): Code of the currency to receive for the quote to create
- **quoteId** (string): ID of the quote to retrieve
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **operation** (options): Operation
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Execute (value: execute)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
- **profileId** (options): ID of the user profile to retrieve the balance of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **quoteId** (string): ID of the quote based on which to create the transfer
- **targetAccountId** (options): ID of the account that will receive the funds. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: reference (value: undefined)
- **transferId** (string): ID of the transfer to delete
- **profileId** (options): ID of the user profile to execute the transfer under. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **transferId** (string): ID of the transfer to execute
- **transferId** (string): ID of the transfer to retrieve
- **downloadReceipt** (boolean): Whether to download the transfer receipt as a PDF file. Only for executed transfers, having status 'Outgoing Payment Sent'.
- **binaryProperty** (string): Put Output File in Field
- **fileName** (string): Name of the file that will be downloaded
- **profileId** (options): ID of the user profile to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: range (value: undefined)
  - Option: sourceCurrency (value: undefined)
  - Option: status (value: undefined)
  - Option: targetCurrency (value: undefined)
