# Node: Airtable Trigger

**Name**: airtableTrigger
**Category**: trigger
**Description**: Starts the workflow when Airtable events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: API Key (value: airtableApi)
  - Option: Access Token (value: airtableTokenApi)
  - Option: OAuth2 (value: airtableOAuth2Api)
- **baseId** (resourceLocator): The Airtable Base in which to operate on
- **tableId** (resourceLocator): Table
- **triggerField** (string): A Created Time or Last Modified Time field that will be used to sort records. If you do not have a Created Time or Last Modified Time field in your schema, please create one, because without this field trigger will not work correctly.
- **downloadAttachments** (boolean): Whether the attachment fields define in 'Download Fields' will be downloaded
- **downloadFieldNames** (string): Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.
- **additionalFields** (collection): Additional Fields
  - Option: fields (value: undefined)
  - Option: formula (value: undefined)
  - Option: viewId (value: undefined)
