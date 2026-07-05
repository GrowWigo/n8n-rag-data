# Node: Jenkins

**Name**: jenkins
**Category**: output
**Description**: Consume Jenkins API
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
  - Option: Build (value: build)
  - Option: Instance (value: instance)
  - Option: Job (value: job)
- **operation** (options): Possible operations
  - Option: Copy (value: copy)
  - Option: Create (value: create)
  - Option: Trigger (value: trigger)
  - Option: Trigger with Parameters (value: triggerParams)
- **triggerParamsNotice** (notice): Make sure the job is setup to support triggering with parameters. <a href="https://wiki.jenkins.io/display/JENKINS/Parameterized+Build" target="_blank">More info</a>
- **job** (options): Name of the job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **param** (fixedCollection): Parameters for Jenkins job
  - Option: params (value: undefined)
- **newJob** (string): Name of the new Jenkins job
- **xml** (string): XML of Jenkins config
- **createNotice** (notice): To get the XML of an existing job, add ‘config.xml’ to the end of the job URL
- **operation** (options): Jenkins instance operations
  - Option: Cancel Quiet Down (value: cancelQuietDown)
  - Option: Quiet Down (value: quietDown)
  - Option: Restart (value: restart)
  - Option: Safely Restart (value: safeRestart)
  - Option: Safely Shutdown (value: safeExit)
  - Option: Shutdown (value: exit)
- **reason** (string): Freeform reason for quiet down mode
- **instanceNotice** (notice): Instance operation can shutdown Jenkins instance and make it unresponsive. Some commands may not be available depending on instance implementation.
- **operation** (options): Operation
  - Option: Get Many (value: getAll)
- **job** (options): Name of the job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **returnAll** (boolean): Whether to return all results or only up to a given limit
- **limit** (number): Max number of results to return
