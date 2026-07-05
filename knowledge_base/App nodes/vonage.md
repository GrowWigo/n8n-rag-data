# Node: Vonage

**Name**: vonage
**Category**: input
**Description**: Consume Vonage API
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
- **operation** (options): Operation
  - Option: Send (value: send)
- **from** (string): The name or number the message should be sent from
- **to** (string): The number that the message should be sent to. Numbers are specified in E.164 format.
- **message** (string): The body of the message being sent
- **additionalFields** (collection): Additional Fields
  - Option: account-ref (value: undefined)
  - Option: callback (value: undefined)
  - Option: client-ref (value: undefined)
  - Option: message-class (value: undefined)
  - Option: protocol-id (value: undefined)
  - Option: status-report-req (value: undefined)
  - Option: ttl (value: undefined)
