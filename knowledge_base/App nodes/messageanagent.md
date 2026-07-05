# Node: Message an n8n Agent

**Name**: messageAnAgent
**Category**: transform
**Description**: Send a message to a n8n agent
**Version**: 1

## Common Usecase
This is an AI Agent node. It uses LLMs to make decisions and use tools dynamically to achieve a goal.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **agentId** (resourceLocator): The agent to send the message to
- **message** (string): The message to send to the agent
- **useStructuredOutput** (boolean): Whether to constrain the agent response to a JSON Schema you provide. The conforming object is returned on the "structuredOutput" field.
- **outputSchema** (json): The JSON Schema that the agent response must conform to
- **structuredOutputNotice** (notice): Structured output is enforced by the model provider. For best results across providers, mark every property as required. Some providers reject optional fields or advanced keywords (e.g. OpenAI and xAI), and a few do not support structured output at all (e.g. DeepSeek).
- **advanced** (collection): Advanced
  - Option: sessionId (value: undefined)
