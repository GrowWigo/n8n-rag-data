# Node: Cortex

**Name**: cortex
**Category**: transform
**Description**: Apply the Cortex analyzer/responder on the given entity
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main"]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **resource** (options): Choose a resource
  - Option: Analyzer (value: analyzer)
  - Option: Job (value: job)
  - Option: Responder (value: responder)
- **operation** (options): Choose an operation
  - Option: Execute (value: execute)
- **analyzer** (options): Choose the analyzer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **observableType** (options): Choose the observable type. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **observableValue** (string): Enter the observable value
- **binaryPropertyName** (string): Put Output File in Field
- **tlp** (options): The TLP of the analyzed observable
  - Option: White (value: 0)
  - Option: Green (value: 1)
  - Option: Amber (value: 2)
  - Option: Red (value: 3)
- **additionalFields** (collection): Additional Fields
  - Option: force (value: undefined)
  - Option: timeout (value: undefined)
- **operation** (options): Choose an operation
  - Option: Execute (value: execute)
- **responder** (options): Choose the responder. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **entityType** (options): Choose the Data type. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **jsonObject** (boolean): Choose between providing JSON object or seperated attributes
- **objectData** (string): Entity Object (JSON)
- **parameters** (fixedCollection): Parameters
  - Option: values (value: undefined)
- **parameters** (fixedCollection): Parameters
  - Option: values (value: undefined)
- **parameters** (fixedCollection): Parameters
  - Option: values (value: undefined)
- **parameters** (fixedCollection): Parameters
  - Option: values (value: undefined)
- **parameters** (fixedCollection): Parameters
  - Option: values (value: undefined)
- **operation** (options): Choose an operation
  - Option: Get (value: get)
  - Option: Report (value: report)
- **jobId** (string): ID of the job
