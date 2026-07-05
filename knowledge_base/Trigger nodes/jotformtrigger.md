# Node: Jotform Trigger

**Name**: jotFormTrigger
**Category**: trigger
**Description**: Handle Jotform events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **form** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **resolveData** (boolean): By default does the webhook-data use internal keys instead of the names. If this option gets activated, it will resolve the keys automatically to the actual names.
- **onlyAnswers** (boolean): Whether to return only the answers of the form and not any of the other data
