# Node: Tool Executor

**Name**: toolExecutor
**Category**: transform
**Description**: Node to execute tools without an AI Agent
**Version**: 1

## Common Usecase
This is a Tool node. It gives the AI Agent the ability to perform specific actions like searching the web or reading files.

## Inputs
["main","ai_tool"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **query** (json): Key-value pairs, where key is the name of the tool name and value is the parameters to pass to the tool
- **toolName** (string): Name of the tool to execute if the connected tool is a toolkit
- **node** (string): Name of the node that is being executed
