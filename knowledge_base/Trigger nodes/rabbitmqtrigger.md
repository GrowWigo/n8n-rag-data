# Node: RabbitMQ Trigger

**Name**: rabbitmqTrigger
**Category**: trigger
**Description**: Listens to RabbitMQ messages
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **queue** (string): The name of the queue to read from
- **options** (collection): Options
  - Option: arguments (value: undefined)
  - Option: assertExchange (value: undefined)
  - Option: assertQueue (value: undefined)
  - Option: autoDelete (value: undefined)
  - Option: binding (value: undefined)
  - Option: contentIsBinary (value: undefined)
  - Option: acknowledge (value: undefined)
  - Option: durable (value: undefined)
  - Option: exclusive (value: undefined)
  - Option: headers (value: undefined)
  - Option: jsonParseBody (value: undefined)
  - Option: onlyContent (value: undefined)
  - Option: parallelMessages (value: undefined)
- **laterMessageNode** (notice): To delete an item from the queue, insert a RabbitMQ node later in the workflow and use the 'Delete from queue' operation
