# Node: Twilio Trigger

**Name**: twilioTrigger
**Category**: trigger
**Description**: Starts the workflow on a Twilio update
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **updates** (multiOptions): Trigger On
  - Option: New SMS (value: com.twilio.messaging.inbound-message.received)
  - Option: New Call (value: com.twilio.voice.insights.call-summary.complete)
- **callTriggerNotice** (notice): The 'New Call' event may take up to thirty minutes to be triggered
