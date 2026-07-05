# Node: Help Scout Trigger

**Name**: helpScoutTrigger
**Category**: trigger
**Description**: Starts the workflow when Help Scout events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **events** (multiOptions): Events
  - Option: Conversation - Assigned (value: convo.assigned)
  - Option: Conversation - Created (value: convo.created)
  - Option: Conversation - Deleted (value: convo.deleted)
  - Option: Conversation - Merged (value: convo.merged)
  - Option: Conversation - Moved (value: convo.moved)
  - Option: Conversation - Status (value: convo.status)
  - Option: Conversation - Tags (value: convo.tags)
  - Option: Conversation Agent Reply - Created (value: convo.agent.reply.created)
  - Option: Conversation Customer Reply - Created (value: convo.customer.reply.created)
  - Option: Conversation Note - Created (value: convo.note.created)
  - Option: Customer - Created (value: customer.created)
  - Option: Rating - Received (value: satisfaction.ratings)
