# Node: Form.io Trigger

**Name**: formIoTrigger
**Category**: trigger
**Description**: Handle form.io events via webhooks
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
- **formId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **events** (multiOptions): Trigger Events
  - Option: Submission Created (value: create)
  - Option: Submission Updated (value: update)
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
