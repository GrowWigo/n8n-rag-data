# Node: TheHive 5 Trigger

**Name**: theHiveProjectTrigger
**Category**: trigger
**Description**: Starts the workflow when TheHive events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **notice** (notice): You must set up the webhook in TheHive — instructions <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.thehive5trigger/#configure-a-webhook-in-thehive" target="_blank">here</a>
- **events** (multiOptions): Events types
  - Option: * (value: *)
  - Option: Alert Created (value: alert_create)
  - Option: Alert Deleted (value: alert_delete)
  - Option: Alert Updated (value: alert_update)
  - Option: Case Created (value: case_create)
  - Option: Case Deleted (value: case_delete)
  - Option: Case Updated (value: case_update)
  - Option: Comment Created (value: comment_create)
  - Option: Comment Deleted (value: comment_delete)
  - Option: Comment Updated (value: comment_update)
  - Option: Observable Created (value: observable_create)
  - Option: Observable Deleted (value: observable_delete)
  - Option: Observable Updated (value: observable_update)
  - Option: Page Created (value: page_create)
  - Option: Page Deleted (value: page_delete)
  - Option: Page Updated (value: page_update)
  - Option: Task Created (value: task_create)
  - Option: Task Updated (value: task_update)
  - Option: Task Log Created (value: log_create)
  - Option: Task Log Deleted (value: log_delete)
  - Option: Task Log Updated (value: log_update)
- **filters** (fixedCollection): Filter any incoming events based on their fields
  - Option: values (value: undefined)
- **options** (collection): Options
  - Option: outputOnlyData (value: undefined)
