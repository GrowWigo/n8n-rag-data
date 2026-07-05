# Node: Yourls

**Name**: yourls
**Category**: input
**Description**: Consume Yourls API
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
  - Option: URL (value: url)
- **operation** (options): Operation
  - Option: Expand (value: expand)
  - Option: Shorten (value: shorten)
  - Option: Stats (value: stats)
- **url** (string): The URL to shorten
- **additionalFields** (collection): Additional Fields
  - Option: keyword (value: undefined)
  - Option: title (value: undefined)
- **shortUrl** (string): The short URL to expand
- **shortUrl** (string): The short URL for which to get stats
