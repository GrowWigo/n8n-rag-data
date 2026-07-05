# Node: MessageBird

**Name**: messageBird
**Category**: output
**Description**: Sends SMS via MessageBird
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
  - Option: SMS (value: sms)
  - Option: Balance (value: balance)
- **operation** (options): Operation
  - Option: Send (value: send)
- **operation** (options): Operation
  - Option: Get (value: get)
- **originator** (string): The number from which to send the message
- **recipients** (string): All recipients separated by commas
- **message** (string): The message to be send
- **additionalFields** (collection): Additional Fields
  - Option: createdDatetime (value: undefined)
  - Option: datacoding (value: undefined)
  - Option: gateway (value: undefined)
  - Option: groupIds (value: undefined)
  - Option: mclass (value: undefined)
  - Option: reference (value: undefined)
  - Option: reportUrl (value: undefined)
  - Option: scheduledDatetime (value: undefined)
  - Option: type (value: undefined)
  - Option: typeDetails (value: undefined)
  - Option: validity (value: undefined)
