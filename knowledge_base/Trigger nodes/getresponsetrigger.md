# Node: GetResponse Trigger

**Name**: getResponseTrigger
**Category**: trigger
**Description**: Starts the workflow when GetResponse events occur
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
- **events** (multiOptions): Events
  - Option: Customer Subscribed (value: subscribe)
  - Option: Customer Unsubscribed (value: unsubscribe)
  - Option: Email Clicked (value: click)
  - Option: Email Opened (value: open)
  - Option: Survey Submitted (value: survey)
- **listIds** (multiOptions): Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **options** (collection): Options
  - Option: delete (value: undefined)
