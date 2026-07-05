# Node: urlscan.io

**Name**: urlScanIo
**Category**: transform
**Description**: Provides various utilities for monitoring websites like health checks or screenshots
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
  - Option: Scan (value: scan)
- **operation** (options): Operation
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Perform (value: perform)
- **scanId** (string): ID of the scan to retrieve
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: query (value: undefined)
- **url** (string): URL to scan
- **additionalFields** (collection): Additional Fields
  - Option: customAgent (value: undefined)
  - Option: overrideSafety (value: undefined)
  - Option: referer (value: undefined)
  - Option: tags (value: undefined)
  - Option: visibility (value: undefined)
