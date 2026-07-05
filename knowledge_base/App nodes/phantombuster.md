# Node: Phantombuster

**Name**: phantombuster
**Category**: input
**Description**: Consume Phantombuster API
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Resource
  - Option: Agent (value: agent)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Get Output (value: getOutput)
  - Option: Launch (value: launch)
- **agentId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **agentId** (string): Agent ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **agentId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **resolveData** (boolean): By default the outpout is presented as string. If this option gets activated, it will resolve the data automatically.
- **additionalFields** (collection): Additional Fields
  - Option: prevContainerId (value: undefined)
  - Option: prevStatus (value: undefined)
  - Option: prevRuntimeEventIndex (value: undefined)
- **agentId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **resolveData** (boolean): By default the launch just include the container ID. If this option gets activated, it will resolve the data automatically.
- **jsonParameters** (boolean): JSON Parameters
- **additionalFields** (collection): Additional Fields
  - Option: argumentsJson (value: undefined)
  - Option: argumentsUi (value: undefined)
  - Option: bonusArgumentUi (value: undefined)
  - Option: bonusArgumentJson (value: undefined)
  - Option: manualLaunch (value: undefined)
  - Option: maxInstanceCount (value: undefined)
  - Option: saveArgument (value: undefined)
