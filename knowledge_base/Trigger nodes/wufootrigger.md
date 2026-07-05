# Node: Wufoo Trigger

**Name**: wufooTrigger
**Category**: trigger
**Description**: Handle Wufoo events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **form** (options): The form upon which will trigger this node when a new entry is made. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **onlyAnswers** (boolean): Whether to return only the answers of the form and not any of the other data
