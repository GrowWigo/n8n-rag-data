# Node: MQTT Trigger

**Name**: mqttTrigger
**Category**: trigger
**Description**: Listens to MQTT events
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **topics** (string): Topics to subscribe to, multiple can be defined with comma. Wildcard characters are supported (+ - for single level and # - for multi level). By default all subscription used QoS=0. To set a different QoS, write the QoS desired after the topic preceded by a colom. For Example: topicA:1,topicB:2
- **options** (collection): Options
  - Option: jsonParseBody (value: undefined)
  - Option: onlyMessage (value: undefined)
  - Option: parallelProcessing (value: undefined)
