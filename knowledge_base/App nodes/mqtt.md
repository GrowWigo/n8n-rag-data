# Node: MQTT

**Name**: mqtt
**Category**: input
**Description**: Push messages to MQTT
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **topic** (string): The topic to publish to
- **sendInputData** (boolean): Whether to send the data the node receives as JSON
- **message** (string): The message to publish
- **options** (collection): Options
  - Option: qos (value: undefined)
  - Option: retain (value: undefined)
