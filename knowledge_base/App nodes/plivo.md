# Node: Plivo

**Name**: plivo
**Category**: transform
**Description**: Send SMS/MMS messages or make phone calls
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
  - Option: MMS (value: mms)
  - Option: SMS (value: sms)
- **operation** (options): Operation
  - Option: Send (value: send)
- **from** (string): Plivo Number to send the SMS from
- **to** (string): Phone number to send the message to
- **message** (string): Message to send
- **operation** (options): Operation
  - Option: Send (value: send)
- **from** (string): Plivo Number to send the MMS from
- **to** (string): Phone number to send the MMS to
- **message** (string): Message to send
- **media_urls** (string): Comma-separated list of media URLs of the files from your file server
- **operation** (options): Operation
  - Option: Make (value: make)
- **from** (string): Caller ID for the call to make
- **to** (string): Phone number to make the call to
- **answer_method** (options): HTTP verb to be used when invoking the Answer URL
  - Option: GET (value: GET)
  - Option: POST (value: POST)
- **answer_url** (string): URL to be invoked by Plivo once the call is answered. It should return the XML to handle the call once answered.
