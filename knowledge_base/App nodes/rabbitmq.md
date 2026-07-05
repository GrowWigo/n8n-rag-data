# Node: RabbitMQ

**Name**: rabbitmq
**Category**: transform
**Description**: Sends messages to a RabbitMQ topic
**Version**: 1, 1.1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (hidden): Operation
  - Option: Send a Message to RabbitMQ (value: sendMessage)
  - Option: Delete From Queue (value: deleteMessage)
- **operation** (options): Operation
  - Option: Send a Message to RabbitMQ (value: sendMessage)
  - Option: Delete From Queue (value: deleteMessage)
- **deleteMessage** (notice): Will delete an item from the queue triggered earlier in the workflow by a RabbitMQ Trigger node
- **mode** (options): To where data should be moved
  - Option: Queue (value: queue)
  - Option: Exchange (value: exchange)
- **queue** (string): Name of the queue to publish to
- **exchange** (string): Name of the exchange to publish to
- **exchangeType** (options): Type of exchange
  - Option: Direct (value: direct)
  - Option: Topic (value: topic)
  - Option: Headers (value: headers)
  - Option: Fanout (value: fanout)
- **routingKey** (string): The routing key for the message
- **sendInputData** (boolean): Whether to send the data the node receives as JSON
- **message** (string): The message to be sent
- **options** (collection): Options
  - Option: alternateExchange (value: undefined)
  - Option: arguments (value: undefined)
  - Option: autoDelete (value: undefined)
  - Option: durable (value: undefined)
  - Option: exclusive (value: undefined)
  - Option: headers (value: undefined)
