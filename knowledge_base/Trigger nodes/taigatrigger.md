# Node: Taiga Trigger

**Name**: taigaTrigger
**Category**: trigger
**Description**: Handle Taiga events via webhook
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **projectId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **resources** (multiOptions): Resources to listen to
  - Option: All (value: all)
  - Option: Issue (value: issue)
  - Option: Milestone (Sprint) (value: milestone)
  - Option: Task (value: task)
  - Option: User Story (value: userstory)
  - Option: Wikipage (value: wikipage)
- **operations** (multiOptions): Operations to listen to
  - Option: All (value: all)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Update (value: change)
