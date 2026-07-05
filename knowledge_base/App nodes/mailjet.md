# Node: Mailjet

**Name**: mailjet
**Category**: output
**Description**: Consume Mailjet API
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
  - Option: Email (value: email)
  - Option: SMS (value: sms)
- **operation** (options): Operation
  - Option: Send (value: send)
  - Option: Send Template (value: sendTemplate)
- **fromEmail** (string): The title for the email
- **toEmail** (string): Email address of the recipient. Multiple ones can be separated by comma.
- **subject** (string): Subject line of the email
- **text** (string): Plain text message of email
- **html** (string): HTML text message of email
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: bccEmail (value: undefined)
  - Option: ccAddresses (value: undefined)
  - Option: fromName (value: undefined)
  - Option: priority (value: undefined)
  - Option: replyTo (value: undefined)
  - Option: templateLanguage (value: undefined)
  - Option: trackClicks (value: undefined)
  - Option: trackOpens (value: undefined)
  - Option: customCampaign (value: undefined)
  - Option: deduplicateCampaign (value: undefined)
- **variablesJson** (string): HTML text message of email
- **variablesUi** (fixedCollection): Variables
  - Option: variablesValues (value: undefined)
- **fromEmail** (string): The title for the email
- **toEmail** (string): Email address of the recipient. Multiple ones can be separated by comma.
- **templateId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: bccEmail (value: undefined)
  - Option: ccEmail (value: undefined)
  - Option: fromName (value: undefined)
  - Option: priority (value: undefined)
  - Option: replyTo (value: undefined)
  - Option: subject (value: undefined)
  - Option: templateLanguage (value: undefined)
  - Option: trackClicks (value: undefined)
  - Option: trackOpens (value: undefined)
  - Option: customCampaign (value: undefined)
  - Option: deduplicateCampaign (value: undefined)
- **variablesUi** (fixedCollection): Variables
  - Option: variablesValues (value: undefined)
- **variablesJson** (string): HTML text message of email
- **operation** (options): Operation
  - Option: Send (value: send)
- **from** (string): Customizable sender name. Should be between 3 and 11 characters in length, only alphanumeric characters are allowed.
- **to** (string): Message recipient. Should be between 3 and 15 characters in length. The number always starts with a plus sign followed by a country code, followed by the number. Phone numbers are expected to comply with the E.164 format.
- **text** (string): Text
