# Node: Netlify Trigger

**Name**: netlifyTrigger
**Category**: trigger
**Description**: Handle netlify events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **siteId** (options): Select the Site ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **event** (options): Event
  - Option: Deploy Building (value: deployBuilding)
  - Option: Deploy Failed (value: deployFailed)
  - Option: Deploy Created (value: deployCreated)
  - Option: Form Submitted (value: submissionCreated)
- **formId** (options): Select a form. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
