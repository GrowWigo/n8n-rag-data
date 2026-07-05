# Node: E2E Test

**Name**: e2eTest
**Category**: output
**Description**: Dummy node used for e2e testing
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **operation** (options): Operation
  - Option: Remote Options (value: remoteOptions)
  - Option: Resource Locator (value: resourceLocator)
  - Option: Resource Mapping Component (value: resourceMapper)
- **fieldId** (string): Field ID
- **remoteOptions** (options): Remote options to load. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **rlc** (resourceLocator): Resource Locator
- **resourceMapper** (resourceMapper): Resource Mapping Component
- **otherField** (string): Other Non Important Field
