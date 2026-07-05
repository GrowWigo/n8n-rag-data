# Node: Pipedrive Trigger

**Name**: pipedriveTrigger
**Category**: trigger
**Description**: Starts the workflow when Pipedrive events occur
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
  - Option: API Token (value: apiToken)
  - Option: OAuth2 (value: oAuth2)
- **incomingAuthentication** (options): If authentication should be activated for the webhook (makes it more secure)
  - Option: Basic Auth (value: basicAuth)
  - Option: None (value: none)
- **action** (options): Type of action to receive notifications about
  - Option: Added (value: added)
  - Option: All (value: *)
  - Option: Deleted (value: deleted)
  - Option: Merged (value: merged)
  - Option: Updated (value: updated)
- **action** (options): Type of action to receive notifications about
  - Option: All (value: *)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Change (value: change)
- **entity** (options): Type of object to receive notifications about
  - Option: Activity (value: activity)
  - Option: Activity Type (value: activityType)
  - Option: All (value: *)
  - Option: Deal (value: deal)
  - Option: Note (value: note)
  - Option: Organization (value: organization)
  - Option: Person (value: person)
  - Option: Pipeline (value: pipeline)
  - Option: Product (value: product)
  - Option: Stage (value: stage)
  - Option: User (value: user)
- **object** (options): Type of object to receive notifications about
  - Option: Activity (value: activity)
  - Option: Activity Type (value: activityType)
  - Option: All (value: *)
  - Option: Deal (value: deal)
  - Option: Note (value: note)
  - Option: Organization (value: organization)
  - Option: Person (value: person)
  - Option: Pipeline (value: pipeline)
  - Option: Product (value: product)
  - Option: Stage (value: stage)
  - Option: User (value: user)
