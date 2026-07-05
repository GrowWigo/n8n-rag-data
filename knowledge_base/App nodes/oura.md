# Node: Oura

**Name**: oura
**Category**: output
**Description**: Consume Oura API
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
  - Option: Profile (value: profile)
  - Option: Summary (value: summary)
- **operation** (options): Operation
  - Option: Get (value: get)
- **operation** (options): Operation
  - Option: Get Activity Summary (value: getActivity)
  - Option: Get Readiness Summary (value: getReadiness)
  - Option: Get Sleep Periods (value: getSleep)
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **filters** (collection): Filters
  - Option: end (value: undefined)
  - Option: start (value: undefined)
