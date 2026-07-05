# Node: Facebook Trigger

**Name**: facebookTrigger
**Category**: trigger
**Description**: Starts the workflow when Facebook events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **appId** (string): Facebook APP ID
- **whatsappBusinessAccountNotice** (notice): To watch Whatsapp business account events use the Whatsapp trigger node
- **object** (options): The object to subscribe to
  - Option: Ad Account (value: adAccount)
  - Option: Application (value: application)
  - Option: Certificate Transparency (value: certificateTransparency)
  - Option: Group (value: group)
  - Option: Instagram (value: instagram)
  - Option: Link (value: link)
  - Option: Page (value: page)
  - Option: Permissions (value: permissions)
  - Option: User (value: user)
  - Option: Whatsapp Business Account (value: whatsappBusinessAccount)
  - Option: Workplace Security (value: workplaceSecurity)
- **fields** (multiOptions): The set of fields in this object that are subscribed to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **options** (collection): Options
  - Option: includeValues (value: undefined)
