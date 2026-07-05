# Node: KoBoToolbox Trigger

**Name**: koBoToolboxTrigger
**Category**: trigger
**Description**: Process KoBoToolbox submissions
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **formId** (options): Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **triggerOn** (options): Trigger On
  - Option: On Form Submission (value: formSubmission)
- **formatOptions** (collection): Options
  - Option: download (value: undefined)
  - Option: binaryNamingScheme (value: undefined)
  - Option: dataPropertyAttachmentsPrefixName (value: undefined)
  - Option: version (value: undefined)
  - Option: selectMask (value: undefined)
  - Option: numberMask (value: undefined)
  - Option: reformat (value: undefined)
