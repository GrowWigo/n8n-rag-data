# Node: DeepL

**Name**: deepL
**Category**: input, output
**Description**: Translate data using DeepL
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
  - Option: Language (value: language)
- **operation** (options): Operation
  - Option: Translate (value: translate)
- **text** (string): Input text to translate
- **translateTo** (options): Language to translate to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **additionalFields** (collection): Additional Fields
  - Option: sourceLang (value: undefined)
  - Option: splitSentences (value: undefined)
  - Option: preserveFormatting (value: undefined)
  - Option: formality (value: undefined)
