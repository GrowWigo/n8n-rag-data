# Node: Mocean

**Name**: mocean
**Category**: transform
**Description**: Send SMS and voice messages via Mocean
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
  - Option: Voice (value: voice)
- **operation** (options): Operation
  - Option: Send (value: send)
- **from** (string): Number to which to send the message
- **to** (string): Number from which to send the message
- **language** (options): Language
  - Option: Chinese Mandarin (China) (value: cmn-CN)
  - Option: English (United Kingdom) (value: en-GB)
  - Option: English (United States) (value: en-US)
  - Option: Japanese (Japan) (value: ja-JP)
  - Option: Korean (Korea) (value: ko-KR)
- **message** (string): Message to send
- **options** (collection): Options
  - Option: dlrUrl (value: undefined)
