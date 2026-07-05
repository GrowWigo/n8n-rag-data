# Node: AMQP Trigger

**Name**: amqpTrigger
**Category**: trigger
**Description**: Listens to AMQP 1.0 Messages
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **sink** (string): Name of the queue of topic to listen to
- **clientname** (string): Leave empty for non-durable topic subscriptions or queues
- **subscription** (string): Leave empty for non-durable topic subscriptions or queues
- **options** (collection): Options
  - Option: containerId (value: undefined)
  - Option: jsonConvertByteArrayToString (value: undefined)
  - Option: jsonParseBody (value: undefined)
  - Option: pullMessagesNumber (value: undefined)
  - Option: onlyBody (value: undefined)
  - Option: parallelProcessing (value: undefined)
  - Option: reconnect (value: undefined)
  - Option: reconnectLimit (value: undefined)
  - Option: sleepTime (value: undefined)
