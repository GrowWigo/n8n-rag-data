# Node: AMQP Sender

**Name**: amqp
**Category**: transform
**Description**: Sends a raw-message via AMQP 1.0, executed once per item
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **sink** (string): Name of the queue of topic to publish to
- **headerParametersJson** (json): Header parameters as JSON (flat object). Sent as application_properties in amqp-message meta info.
- **options** (collection): Options
  - Option: containerId (value: undefined)
  - Option: dataAsObject (value: undefined)
  - Option: reconnect (value: undefined)
  - Option: reconnectLimit (value: undefined)
  - Option: sendOnlyProperty (value: undefined)
