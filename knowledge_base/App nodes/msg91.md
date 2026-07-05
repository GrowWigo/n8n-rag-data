# Node: MSG91

**Name**: msg91
**Category**: transform
**Description**: Sends transactional SMS via MSG91
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
- **from** (string): The number from which to send the message
- **to** (string): The number, with coutry code, to which to send the message
- **message** (string): The message to send
