# Node: Calendly Trigger

**Name**: calendlyTrigger
**Category**: trigger
**Description**: Starts the workflow when Calendly events occur
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
  - Option: OAuth2 (recommended) (value: oAuth2)
  - Option: API Key or Personal Access Token (value: apiKey)
- **deprecationNotice** (notice): Action required: Calendly will discontinue API Key authentication on May 31, 2025. Update node to use OAuth2 authentication now to ensure your workflows continue to work.
- **scope** (options): Scope
  - Option: Organization (value: organization)
  - Option: User (value: user)
- **events** (multiOptions): Events
  - Option: Event Created (value: invitee.created)
  - Option: Event Canceled (value: invitee.canceled)
