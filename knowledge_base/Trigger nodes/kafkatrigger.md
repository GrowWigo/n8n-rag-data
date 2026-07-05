# Node: Kafka Trigger

**Name**: kafkaTrigger
**Category**: trigger
**Description**: Consume messages from a Kafka topic
**Version**: 1, 1.1, 1.2, 1.3

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **topic** (string): Name of the queue of topic to consume from
- **groupId** (string): ID of the consumer group
- **resolveOffset** (options): Select on which condition the offsets should be resolved. In the manual mode, when execution started by clicking on Execute Workflow or Execute Step button, offsets are always resolved immediately after message received.
  - Option: On Execution Completion (value: onCompletion)
  - Option: On Execution Success (value: onSuccess)
  - Option: On Allowed Execution Statuses (value: onStatus)
  - Option: Immediately (value: immediately)
- **allowedStatuses** (multiOptions): Allowed Statuses
  - Option: Canceled (value: canceled)
  - Option: Crashed (value: crashed)
  - Option: Error (value: error)
  - Option: New (value: new)
  - Option: Running (value: running)
  - Option: Success (value: success)
  - Option: Unknown (value: unknown)
  - Option: Waiting (value: waiting)
- **useSchemaRegistry** (boolean): Whether to use Confluent Schema Registry
- **schemaRegistryUrl** (string): URL of the schema registry
- **options** (collection): Options
  - Option: allowAutoTopicCreation (value: undefined)
  - Option: autoCommitThreshold (value: undefined)
  - Option: autoCommitInterval (value: undefined)
  - Option: batchSize (value: undefined)
  - Option: eachBatchAutoResolve (value: undefined)
  - Option: fetchMaxBytes (value: undefined)
  - Option: fetchMinBytes (value: undefined)
  - Option: heartbeatInterval (value: undefined)
  - Option: heartbeatInterval (value: undefined)
  - Option: maxInFlightRequests (value: undefined)
  - Option: fromBeginning (value: undefined)
  - Option: jsonParseMessage (value: undefined)
  - Option: keepBinaryData (value: undefined)
  - Option: parallelProcessing (value: undefined)
  - Option: partitionsConsumedConcurrently (value: undefined)
  - Option: onlyMessage (value: undefined)
  - Option: returnHeaders (value: undefined)
  - Option: rebalanceTimeout (value: undefined)
  - Option: errorRetryDelay (value: undefined)
  - Option: sessionTimeout (value: undefined)
