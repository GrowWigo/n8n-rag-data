# Node: Model Selector

**Name**: modelSelector
**Category**: transform
**Description**: Use this node to select one of the connected models to this node based on workflow data
**Version**: 1

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
"={{\n\t\t\t\t((parameters) => {\n\t\t\t\t\tfunction configuredInputs(parameters) {\n    return Array.from({ length: parameters.numberInputs || 2 }, (_, i) => ({\n        type: 'ai_languageModel',\n        displayName: `Model ${(i + 1).toString()}`,\n        required: true,\n        maxConnections: 1,\n    }));\n};\n\t\t\t\t\treturn configuredInputs(parameters)\n\t\t\t\t})($parameter)\n\t\t\t}}"

## Outputs
["ai_languageModel"]

## Properties & Settings
These are the settings you can configure for this node:

- **numberInputs** (options): The number of data inputs you want to merge. The node waits for all connected inputs to be executed.
  - Option: 2 (value: 2)
  - Option: 3 (value: 3)
  - Option: 4 (value: 4)
  - Option: 5 (value: 5)
  - Option: 6 (value: 6)
  - Option: 7 (value: 7)
  - Option: 8 (value: 8)
  - Option: 9 (value: 9)
  - Option: 10 (value: 10)
- **rules** (fixedCollection): Rules to map workflow data to specific models
  - Option: rule (value: undefined)
