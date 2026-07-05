# Node: WhatsApp Trigger

**Name**: whatsAppTrigger
**Category**: trigger
**Description**: Handle WhatsApp events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **whatsAppNotice** (notice): Due to Facebook API limitations, you can use just one WhatsApp trigger for each Facebook App
- **updates** (multiOptions): Trigger On
  - Option: Account Review Update (value: account_review_update)
  - Option: Account Update (value: account_update)
  - Option: Business Capability Update (value: business_capability_update)
  - Option: Message Template Quality Update (value: message_template_quality_update)
  - Option: Message Template Status Update (value: message_template_status_update)
  - Option: Messages (value: messages)
  - Option: Phone Number Name Update (value: phone_number_name_update)
  - Option: Phone Number Quality Update (value: phone_number_quality_update)
  - Option: Security (value: security)
  - Option: Template Category Update (value: template_category_update)
- **options** (collection): Options
  - Option: messageStatusUpdates (value: undefined)
