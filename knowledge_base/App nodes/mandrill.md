# Node: Mandrill

**Name**: mandrill
**Category**: output
**Description**: Consume Mandrill API
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
  - Option: Message (value: message)
- **operation** (options): Operation
  - Option: Send Template (value: sendTemplate)
  - Option: Send HTML (value: sendHtml)
- **template** (options): The template you want to send. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **fromEmail** (string): Email address of the sender optional with name
- **toEmail** (string): Email address of the recipient. Multiple ones can be separated by comma.
- **jsonParameters** (boolean): JSON Parameters
- **options** (collection): Options
  - Option: async (value: undefined)
  - Option: autoText (value: undefined)
  - Option: autoHtml (value: undefined)
  - Option: bccAddress (value: undefined)
  - Option: fromName (value: undefined)
  - Option: googleAnalyticsCampaign (value: undefined)
  - Option: googleAnalyticsDomains (value: undefined)
  - Option: html (value: undefined)
  - Option: important (value: undefined)
  - Option: inlineCss (value: undefined)
  - Option: ipPool (value: undefined)
  - Option: preserveRecipients (value: undefined)
  - Option: returnPathDomain (value: undefined)
  - Option: sendAt (value: undefined)
  - Option: signingDomain (value: undefined)
  - Option: subAccount (value: undefined)
  - Option: subject (value: undefined)
  - Option: tags (value: undefined)
  - Option: text (value: undefined)
  - Option: trackClicks (value: undefined)
  - Option: trackOpens (value: undefined)
  - Option: trackingDomain (value: undefined)
  - Option: urlStripQs (value: undefined)
  - Option: viewContentLink (value: undefined)
- **mergeVarsJson** (json): Global merge variables
- **mergeVarsUi** (fixedCollection): Per-recipient merge variables
  - Option: mergeVarsValues (value: undefined)
- **metadataUi** (fixedCollection): Metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
  - Option: metadataValues (value: undefined)
- **metadataJson** (json): Metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
- **attachmentsJson** (json): An array of supported attachments to add to the message
- **attachmentsUi** (fixedCollection): Array of supported attachments to add to the message
  - Option: attachmentsValues (value: undefined)
  - Option: attachmentsBinary (value: undefined)
- **headersJson** (json): Optional extra headers to add to the message (most headers are allowed)
- **headersUi** (fixedCollection): Optional extra headers to add to the message (most headers are allowed)
  - Option: headersValues (value: undefined)
