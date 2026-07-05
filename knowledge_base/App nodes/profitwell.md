# Node: ProfitWell

**Name**: profitWell
**Category**: output
**Description**: Consume ProfitWell API
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
  - Option: Company (value: company)
  - Option: Metric (value: metric)
- **operation** (options): Operation
  - Option: Get Settings (value: getSetting)
- **operation** (options): Operation
  - Option: Get (value: get)
- **type** (options): Type
  - Option: Daily (value: daily)
  - Option: Monthly (value: monthly)
- **month** (string): Can only be the current or previous month. Format should be YYYY-MM.
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
- **options** (collection): Options
  - Option: plan_id (value: undefined)
  - Option: dailyMetrics (value: undefined)
  - Option: monthlyMetrics (value: undefined)
