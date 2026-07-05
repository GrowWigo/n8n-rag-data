# Node: Strava Trigger

**Name**: stravaTrigger
**Category**: trigger
**Description**: Starts the workflow when Strava events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **object** (options): Object
  - Option: [All] (value: *)
  - Option: Activity (value: activity)
  - Option: Athlete (value: athlete)
- **event** (options): Event
  - Option: [All] (value: *)
  - Option: Created (value: create)
  - Option: Deleted (value: delete)
  - Option: Updated (value: update)
- **resolveData** (boolean): By default the webhook-data only contain the Object ID. If this option gets activated, it will resolve the data automatically.
- **options** (collection): Options
  - Option: deleteIfExist (value: undefined)
