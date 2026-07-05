# Node: LingvaNex

**Name**: lingvaNex
**Category**: output
**Description**: Consume LingvaNex API
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
  - Option: Translate (value: translate)
- **text** (string): The input text to translate
- **translateTo** (options): The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **options** (collection): Additional Options
  - Option: from (value: undefined)
  - Option: platform (value: undefined)
  - Option: translateMode (value: undefined)
