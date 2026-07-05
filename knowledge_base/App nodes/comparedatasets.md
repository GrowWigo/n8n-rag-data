# Node: Compare Datasets

**Name**: compareDatasets
**Category**: transform
**Description**: Compare two inputs for changes
**Version**: 1, 2, 2.1, 2.2, 2.3

## Common Usecase
This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.

## Inputs
["main","main"]

## Outputs
["main","main","main","main"]

## Properties & Settings
These are the settings you can configure for this node:

- **infoBox** (notice): Items from different branches are paired together when the fields below match. If paired, the rest of the fields are compared to determine whether the items are the same or different
- **mergeByFields** (fixedCollection): Fields to Match
  - Option: values (value: undefined)
- **resolve** (options): When There Are Differences
  - Option: Use Input A Version (value: preferInput1)
  - Option: Use Input B Version (value: preferInput2)
  - Option: Use a Mix of Versions (value: mix)
  - Option: Include Both Versions (value: includeBoth)
- **resolve** (options): When There Are Differences
  - Option: Use Input A Version (value: preferInput1)
  - Option: Use Input B Version (value: preferInput2)
  - Option: Use a Mix of Versions (value: mix)
  - Option: Include Both Versions (value: includeBoth)
- **fuzzyCompare** (boolean): Whether to tolerate small type differences when comparing fields. E.g. the number 3 and the string '3' are treated as the same.
- **preferWhenMix** (options): Prefer
  - Option: Input A Version (value: input1)
  - Option: Input B Version (value: input2)
- **exceptWhenMix** (string): For Everything Except
- **options** (collection): Options
  - Option: skipFields (value: undefined)
  - Option: fuzzyCompare (value: undefined)
  - Option: disableDotNotation (value: undefined)
  - Option: multipleMatches (value: undefined)
