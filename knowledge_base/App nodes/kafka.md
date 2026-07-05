# Node: Kafka

**Name**: kafka
**Category**: transform
**Description**: Sends messages to a Kafka topic
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **topic** (string): Name of the queue of topic to publish to
- **sendInputData** (boolean): Whether to send the data the node receives as JSON to Kafka
- **message** (string): The message to be sent
- **jsonParameters** (boolean): JSON Parameters
- **useSchemaRegistry** (boolean): Whether to use Confluent Schema Registry
- **schemaRegistryUrl** (string): URL of the schema registry
- **useKey** (boolean): Whether to use a message key
- **key** (string): The message key
- **eventName** (string): Namespace and Name of Schema in Schema Registry (namespace.name)
- **headersUi** (fixedCollection): Headers
  - Option: headerValues (value: undefined)
- **headerParametersJson** (json): Header parameters as JSON (flat object)
- **options** (collection): Options
  - Option: acks (value: undefined)
  - Option: compression (value: undefined)
  - Option: timeout (value: undefined)
