# Node: n8n Trigger

**Name**: n8nTrigger
**Category**: trigger
**Description**: Handle events and perform actions on your n8n instance
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **events** (multiOptions): Specifies under which conditions an execution should happen:
				<ul>
					<li><b>Published Workflow Updated</b>: Triggers when workflow version is published from a published state (workflow was already published)</li>
					<li><b>Instance Started</b>:  Triggers when this n8n instance is started or re-started</li>
					<li><b>Workflow Published</b>: Triggers when workflow version is published from an unpublished state (workflow was unpublished)</li>
				</ul>
  - Option: Published Workflow Updated (value: update)
  - Option: Instance Started (value: init)
  - Option: Workflow Published (value: activate)
