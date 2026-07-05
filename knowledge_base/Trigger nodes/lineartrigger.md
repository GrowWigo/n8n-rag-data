# Node: Linear Trigger

**Name**: linearTrigger
**Category**: trigger
**Description**: Starts the workflow when Linear events occur
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
  - Option: API Token (value: apiToken)
  - Option: OAuth2 (value: oAuth2)
- **notice** (notice): Make sure your credential has the "Admin" scope to create webhooks.
- **teamId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **resources** (multiOptions): Listen to Resources
  - Option: Comment Reaction (value: reaction)
  - Option: Cycle (value: cycle)
  - Option: Issue (value: issue)
  - Option: Issue Comment (value: comment)
  - Option: Issue Label (value: issueLabel)
  - Option: Project (value: project)
