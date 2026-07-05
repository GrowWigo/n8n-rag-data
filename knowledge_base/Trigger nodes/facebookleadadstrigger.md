# Node: Facebook Lead Ads Trigger

**Name**: facebookLeadAdsTrigger
**Category**: trigger
**Description**: Handle Facebook Lead Ads events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **facebookLeadAdsNotice** (notice): Due to Facebook API limitations, you can use just one Facebook Lead Ads trigger for each Facebook App
- **event** (options): Event
  - Option: New Lead (value: newLead)
- **page** (resourceLocator): The page linked to the form for retrieving new leads
- **form** (resourceLocator): The form to monitor for fetching lead details upon submission
- **options** (collection): Options
  - Option: simplifyOutput (value: undefined)
