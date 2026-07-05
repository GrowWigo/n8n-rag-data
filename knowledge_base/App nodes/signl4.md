# Node: SIGNL4

**Name**: signl4
**Category**: transform
**Description**: Consume SIGNL4 API
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
  - Option: Alert (value: alert)
- **operation** (options): Operation
  - Option: Send (value: send)
  - Option: Resolve (value: resolve)
- **message** (string): A more detailed description for the alert
- **additionalFields** (collection): Additional Fields
  - Option: alertingScenario (value: undefined)
  - Option: attachmentsUi (value: undefined)
  - Option: externalId (value: undefined)
  - Option: filtering (value: undefined)
  - Option: locationFieldsUi (value: undefined)
  - Option: service (value: undefined)
  - Option: title (value: undefined)
- **externalId** (string): If the event originates from a record in a 3rd party system, use this parameter to pass the unique ID of that record. That ID will be communicated in outbound webhook notifications from SIGNL4, which is great for correlation/synchronization of that record with the alert. If you resolve / close an alert you must use the same External ID as in the original alert.
