# Node: Marketstack

**Name**: marketstack
**Category**: transform
**Description**: Consume Marketstack API
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
  - Option: End-of-Day Data (value: endOfDayData)
  - Option: Exchange (value: exchange)
  - Option: Ticker (value: ticker)
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **symbols** (string): One or multiple comma-separated stock symbols (tickers) to retrieve, e.g. <code>AAPL</code> or <code>AAPL,MSFT</code>
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: exchange (value: undefined)
  - Option: latest (value: undefined)
  - Option: sort (value: undefined)
  - Option: specificDate (value: undefined)
  - Option: dateFrom (value: undefined)
  - Option: dateTo (value: undefined)
- **operation** (options): Operation
  - Option: Get (value: get)
- **exchange** (string): Stock exchange to retrieve, specified by <a href="https://en.wikipedia.org/wiki/Market_Identifier_Code">Market Identifier Code</a>, e.g. <code>XNAS</code>
- **operation** (options): Operation
  - Option: Get (value: get)
- **symbol** (string): Stock symbol (ticker) to retrieve, e.g. <code>AAPL</code>
