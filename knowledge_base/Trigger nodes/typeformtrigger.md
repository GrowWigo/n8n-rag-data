# Node: Typeform Trigger

**Name**: typeformTrigger
**Category**: trigger
**Description**: Starts the workflow on a Typeform form submission
**Version**: 1, 1.1

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
- **formId** (options): Form which should trigger workflow on submission. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **simplifyAnswers** (boolean): Whether to convert the answers to a key:value pair ("FIELD_TITLE":"USER_ANSER") to be easily processable
- **onlyAnswers** (boolean): Whether to return only the answers of the form and not any of the other data
