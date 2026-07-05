# Node: Twilio

**Name**: twilio
**Category**: transform
**Description**: Send SMS and WhatsApp messages or make phone calls
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
  - Option: Call (value: call)
  - Option: SMS (value: sms)
- **operation** (options): Operation
  - Option: Send (value: send)
- **operation** (options): Operation
  - Option: Make (value: make)
- **from** (string): The number from which to send the message
- **to** (string): The number to which to send the message
- **toWhatsapp** (boolean): Whether the message should be sent to WhatsApp
- **message** (string): The message to send
- **twiml** (boolean): Whether to use the <a href="https://www.twilio.com/docs/voice/twiml">Twilio Markup Language</a> in the message
- **message** (string): Message
- **options** (collection): Options
  - Option: statusCallback (value: undefined)
