# Node: Philips Hue

**Name**: philipsHue
**Category**: input
**Description**: Consume Philips Hue API
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
  - Option: Light (value: light)
- **operation** (options): Operation
  - Option: Delete (value: delete)
  - Option: Get (value: get)
  - Option: Get Many (value: getAll)
  - Option: Update (value: update)
- **lightId** (string): Light ID
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
- **lightId** (string): Light ID
- **lightId** (options): Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **on** (boolean): On/Off state of the light
- **additionalFields** (collection): Additional Fields
  - Option: alert (value: undefined)
  - Option: bri (value: undefined)
  - Option: bri_inc (value: undefined)
  - Option: ct (value: undefined)
  - Option: ct_inc (value: undefined)
  - Option: xy (value: undefined)
  - Option: xy_inc (value: undefined)
  - Option: effect (value: undefined)
  - Option: hue (value: undefined)
  - Option: hue_inc (value: undefined)
  - Option: sat (value: undefined)
  - Option: sat_inc (value: undefined)
  - Option: transitiontime (value: undefined)
