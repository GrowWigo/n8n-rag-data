# Node: Formstack Trigger

**Name**: formstackTrigger
**Category**: trigger
**Description**: Starts the workflow on a Formstack form submission.
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **formId** (options): The Formstack form to monitor for new submissions. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **simple** (boolean): Whether to return a simplified version of the response instead of the raw data
