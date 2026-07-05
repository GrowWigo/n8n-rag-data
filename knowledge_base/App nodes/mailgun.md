# Node: Mailgun

**Name**: mailgun
**Category**: output
**Description**: Sends an email via Mailgun
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **fromEmail** (string): Email address of the sender optional with name
- **toEmail** (string): Email address of the recipient. Multiple ones can be separated by comma.
- **ccEmail** (string): Cc Email address of the recipient. Multiple ones can be separated by comma.
- **bccEmail** (string): Bcc Email address of the recipient. Multiple ones can be separated by comma.
- **subject** (string): Subject line of the email
- **text** (string): Plain text message of email
- **html** (string): HTML text message of email
- **attachments** (string): Name of the binary properties which contain data which should be added to email as attachment. Multiple ones can be comma-separated.
