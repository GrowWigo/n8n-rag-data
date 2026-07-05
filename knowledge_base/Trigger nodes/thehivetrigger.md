# Node: TheHive Trigger

**Name**: theHiveTrigger
**Category**: trigger
**Description**: Starts the workflow when TheHive events occur
**Version**: 1, 2

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **notice** (notice): You must set up the webhook in TheHive — instructions <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.thehivetrigger/#configure-a-webhook-in-thehive" target="_blank">here</a>
- **events** (multiOptions): Events types
  - Option: * (value: *)
  - Option: Alert Created (value: alert_create)
  - Option: Alert Deleted (value: alert_delete)
  - Option: Alert Updated (value: alert_update)
  - Option: Case Created (value: case_create)
  - Option: Case Deleted (value: case_delete)
  - Option: Case Updated (value: case_update)
  - Option: Log Created (value: case_task_log_create)
  - Option: Log Deleted (value: case_task_log_delete)
  - Option: Log Updated (value: case_task_log_update)
  - Option: Observable Created (value: case_artifact_create)
  - Option: Observable Deleted (value: case_artifact_delete)
  - Option: Observable Updated (value: case_artifact_update)
  - Option: Task Created (value: case_task_create)
  - Option: Task Deleted (value: case_task_delete)
  - Option: Task Updated (value: case_task_update)
- **events** (multiOptions): Events types
  - Option: * (value: *)
  - Option: Alert Created (value: alert_create)
  - Option: Alert Deleted (value: alert_delete)
  - Option: Alert Updated (value: alert_update)
  - Option: Case Created (value: case_create)
  - Option: Case Deleted (value: case_delete)
  - Option: Case Updated (value: case_update)
  - Option: Log Created (value: case_task_log_create)
  - Option: Log Deleted (value: case_task_log_delete)
  - Option: Log Updated (value: case_task_log_update)
  - Option: Observable Created (value: case_artifact_create)
  - Option: Observable Deleted (value: case_artifact_delete)
  - Option: Observable Updated (value: case_artifact_update)
  - Option: Task Created (value: case_task_create)
  - Option: Task Updated (value: case_task_update)
