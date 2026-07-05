# Node: Affinity Trigger

**Name**: affinityTrigger
**Category**: trigger
**Description**: Handle Affinity events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **events** (multiOptions): Webhook events that will be enabled for that endpoint
  - Option: field_value.created (value: field_value.created)
  - Option: field_value.deleted (value: field_value.deleted)
  - Option: field_value.updated (value: field_value.updated)
  - Option: field.created (value: field.created)
  - Option: field.deleted (value: field.deleted)
  - Option: field.updated (value: field.updated)
  - Option: file.created (value: file.created)
  - Option: file.deleted (value: file.deleted)
  - Option: list_entry.created (value: list_entry.created)
  - Option: list_entry.deleted (value: list_entry.deleted)
  - Option: list.created (value: list.created)
  - Option: list.deleted (value: list.deleted)
  - Option: list.updated (value: list.updated)
  - Option: note.created (value: note.created)
  - Option: note.deleted (value: note.deleted)
  - Option: note.updated (value: note.updated)
  - Option: opportunity.created (value: opportunity.created)
  - Option: opportunity.deleted (value: opportunity.deleted)
  - Option: opportunity.updated (value: opportunity.updated)
  - Option: organization.created (value: organization.created)
  - Option: organization.deleted (value: organization.deleted)
  - Option: organization.updated (value: organization.updated)
  - Option: person.created (value: person.created)
  - Option: person.deleted (value: person.deleted)
  - Option: person.updated (value: person.updated)
