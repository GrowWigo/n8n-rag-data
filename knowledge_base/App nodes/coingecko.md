# Node: CoinGecko

**Name**: coinGecko
**Category**: output
**Description**: Consume CoinGecko API
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
  - Option: Coin (value: coin)
  - Option: Event (value: event)
- **operation** (options): Operation
  - Option: Candlestick (value: candlestick)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: History (value: history)
  - Option: Market (value: market)
  - Option: Market Chart (value: marketChart)
  - Option: Price (value: price)
  - Option: Ticker (value: ticker)
- **searchBy** (options): Search by coin ID or contract address
  - Option: Coin ID (value: coinId)
  - Option: Contract Address (value: contractAddress)
- **coinId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **baseCurrency** (options): The first currency in the pair. For BTC:ETH this is BTC. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **baseCurrency** (options): The first currency in the pair. For BTC:ETH this is BTC. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **coinId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **baseCurrencies** (multiOptions): The first currency in the pair. For BTC:ETH this is BTC. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **platformId** (options): The ID of the platform issuing tokens
  - Option: Ethereum (value: ethereum)
- **contractAddress** (string): Token's contract address
- **contractAddresses** (string): The contract address of tokens, comma-separated
- **baseCurrency** (options): The first currency in the pair. For BTC:ETH this is BTC. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **quoteCurrency** (options): The second currency in the pair. For BTC:ETH this is ETH. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **quoteCurrencies** (multiOptions): The second currency in the pair. For BTC:ETH this is ETH. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **days** (options): Return data for this many days in the past from now
  - Option: 1 (value: 1)
  - Option: 7 (value: 7)
  - Option: 14 (value: 14)
  - Option: 30 (value: 30)
  - Option: 90 (value: 90)
  - Option: 180 (value: 180)
  - Option: 365 (value: 365)
  - Option: Max (value: max)
- **date** (dateTime): The date of data snapshot
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: ids (value: undefined)
  - Option: category (value: undefined)
  - Option: order (value: undefined)
  - Option: sparkline (value: undefined)
  - Option: price_change_percentage (value: undefined)
- **options** (collection): Options
  - Option: include_24hr_change (value: undefined)
  - Option: include_24hr_vol (value: undefined)
  - Option: include_last_updated_at (value: undefined)
  - Option: include_market_cap (value: undefined)
- **options** (collection): Options
  - Option: exchange_ids (value: undefined)
  - Option: include_exchange_logo (value: undefined)
  - Option: order (value: undefined)
- **options** (collection): Options
  - Option: localization (value: undefined)
- **options** (collection): Options
  - Option: community_data (value: undefined)
  - Option: developer_data (value: undefined)
  - Option: localization (value: undefined)
  - Option: market_data (value: undefined)
  - Option: sparkline (value: undefined)
  - Option: tickers (value: undefined)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **options** (collection): Options
  - Option: country_code (value: undefined)
  - Option: from_date (value: undefined)
  - Option: to_date (value: undefined)
  - Option: type (value: undefined)
  - Option: upcoming_events_only (value: undefined)
