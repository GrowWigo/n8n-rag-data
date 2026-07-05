# Node: Mailchimp Trigger

**Name**: mailchimpTrigger
**Category**: trigger
**Description**: Handle Mailchimp events via webhooks
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
  - Option: API Key (value: apiKey)
  - Option: OAuth2 (value: oAuth2)
- **list** (options): The list that is gonna fire the event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **events** (multiOptions): The events that can trigger the webhook and whether they are enabled
  - Option: Campaign Sent (value: campaign)
  - Option: Cleaned (value: cleaned)
  - Option: Email Address Updated (value: upemail)
  - Option: Profile Updated (value: profile)
  - Option: Subscribe (value: subscribe)
  - Option: Unsubscribe (value: unsubscribe)
- **sources** (multiOptions): The possible sources of any events that can trigger the webhook and whether they are enabled
  - Option: User (value: user)
  - Option: Admin (value: admin)
  - Option: API (value: api)
