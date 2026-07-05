# Node: seven

**Name**: sms77
**Category**: transform
**Description**: Send SMS and make text-to-speech calls
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
  - Option: Voice Call (value: voice)
- **operation** (options): Operation
  - Option: Send (value: send)
- **operation** (options): Operation
  - Option: Send (value: send)
- **from** (string): The caller ID displayed in the receivers display. Max 16 numeric or 11 alphanumeric characters.
- **to** (string): The number of your recipient(s) separated by comma. Can be regular numbers or contact/groups from seven.
- **message** (string): The message to send. Max. 1520 characters
- **options** (collection): Options
  - Option: delay (value: undefined)
  - Option: foreign_id (value: undefined)
  - Option: flash (value: undefined)
  - Option: label (value: undefined)
  - Option: performance_tracking (value: undefined)
  - Option: ttl (value: undefined)
- **options** (collection): Options
  - Option: from (value: undefined)
