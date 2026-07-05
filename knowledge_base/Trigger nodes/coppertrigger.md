# Node: Copper Trigger

**Name**: copperTrigger
**Category**: trigger
**Description**: Handle Copper events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): The resource which will fire the event
  - Option: Company (value: company)
  - Option: Lead (value: lead)
  - Option: Opportunity (value: opportunity)
  - Option: Person (value: person)
  - Option: Project (value: project)
  - Option: Task (value: task)
- **event** (options): The event to listen to
  - Option: Delete (value: delete)
  - Option: New (value: new)
  - Option: Update (value: update)
