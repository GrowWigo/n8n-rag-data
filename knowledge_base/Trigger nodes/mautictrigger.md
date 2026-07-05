# Node: Mautic Trigger

**Name**: mauticTrigger
**Category**: trigger
**Description**: Handle Mautic events via webhooks
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
  - Option: Credentials (value: credentials)
  - Option: OAuth2 (value: oAuth2)
- **events** (multiOptions): Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **eventsOrder** (options): Order direction for queued events in one webhook. Can be “DESC” or “ASC”.
  - Option: ASC (value: ASC)
  - Option: DESC (value: DESC)
