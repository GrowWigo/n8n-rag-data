# Node: Cal.com Trigger

**Name**: calTrigger
**Category**: trigger
**Description**: Handle Cal.com events via webhooks
**Version**: 1, 2

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **events** (multiOptions): Events
  - Option: Booking Cancelled (value: BOOKING_CANCELLED)
  - Option: Booking Created (value: BOOKING_CREATED)
  - Option: Booking Rescheduled (value: BOOKING_RESCHEDULED)
  - Option: Meeting Ended (value: MEETING_ENDED)
- **version** (options): API Version
  - Option: Before v2.0 (value: 1)
  - Option: v2.0 Onwards (value: 2)
- **version** (options): API Version
  - Option: Before v2.0 (value: 1)
  - Option: v2.0 Onwards (value: 2)
- **options** (collection): Options
  - Option: appId (value: undefined)
  - Option: eventTypeId (value: undefined)
  - Option: payloadTemplate (value: undefined)
