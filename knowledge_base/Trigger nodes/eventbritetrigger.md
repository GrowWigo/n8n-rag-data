# Node: Eventbrite Trigger

**Name**: eventbriteTrigger
**Category**: trigger
**Description**: Handle Eventbrite events via webhooks
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
  - Option: Private Key (value: privateKey)
  - Option: OAuth2 (value: oAuth2)
- **organization** (options): The Eventbrite Organization to work on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **event** (options): Limit the triggers to this event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **actions** (multiOptions): One or more action to subscribe to
  - Option: attendee.checked_in (value: attendee.checked_in)
  - Option: attendee.checked_out (value: attendee.checked_out)
  - Option: attendee.updated (value: attendee.updated)
  - Option: event.created (value: event.created)
  - Option: event.published (value: event.published)
  - Option: event.unpublished (value: event.unpublished)
  - Option: event.updated (value: event.updated)
  - Option: order.placed (value: order.placed)
  - Option: order.refunded (value: order.refunded)
  - Option: order.updated (value: order.updated)
  - Option: organizer.updated (value: organizer.updated)
  - Option: ticket_class.created (value: ticket_class.created)
  - Option: ticket_class.deleted (value: ticket_class.deleted)
  - Option: ticket_class.updated (value: ticket_class.updated)
  - Option: venue.updated (value: venue.updated)
- **resolveData** (boolean): By default does the webhook-data only contain the URL to receive the object data manually. If this option gets activated, it will resolve the data automatically.
