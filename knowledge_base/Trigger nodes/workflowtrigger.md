# Node: Workflow Trigger

**Name**: workflowTrigger
**Category**: trigger
**Description**: Triggers based on various lifecycle events, like when a workflow is activated
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **oldVersionNotice** (notice): This node is deprecated and would not be updated in the future. Please use 'n8n Trigger' node instead.
- **events** (multiOptions): Specifies under which conditions an execution should happen:
					<ul>
						<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li>
						<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li>
					</ul>
  - Option: Active Workflow Updated (value: update)
  - Option: Workflow Activated (value: activate)
