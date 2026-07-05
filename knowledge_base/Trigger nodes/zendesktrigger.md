# Node: Zendesk Trigger

**Name**: zendeskTrigger
**Category**: trigger
**Description**: Handle Zendesk events via webhooks
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
- **service** (options): Service
  - Option: Support (value: support)
- **options** (collection): Options
  - Option: fields (value: undefined)
- **conditions** (fixedCollection): The condition to set
  - Option: all (value: undefined)
  - Option: any (value: undefined)
