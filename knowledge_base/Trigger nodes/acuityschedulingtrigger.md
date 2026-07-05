# Node: Acuity Scheduling Trigger

**Name**: acuitySchedulingTrigger
**Category**: trigger
**Description**: Handle Acuity Scheduling events via webhooks
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
- **event** (options): Event
  - Option: appointment.canceled (value: appointment.canceled)
  - Option: appointment.changed (value: appointment.changed)
  - Option: appointment.rescheduled (value: appointment.rescheduled)
  - Option: appointment.scheduled (value: appointment.scheduled)
  - Option: order.completed (value: order.completed)
- **resolveData** (boolean): By default does the webhook-data only contain the ID of the object. If this option gets activated, it will resolve the data automatically.
