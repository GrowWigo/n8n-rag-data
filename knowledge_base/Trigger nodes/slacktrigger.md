# Node: Slack Trigger

**Name**: slackTrigger
**Category**: trigger
**Description**: Handle Slack events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (hidden): Authentication
- **notice** (notice): Set up a webhook in your Slack app to enable this node. <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger/#configure-a-webhook-in-slack" target="_blank">More info</a>. We also recommend setting up a <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger/#verify-the-webhook" target="_blank">signing secret</a> to ensure the authenticity of requests.
- **trigger** (multiOptions): Trigger On
  - Option: Any Event (value: any_event)
  - Option: Bot / App Mention (value: app_mention)
  - Option: File Made Public (value: file_public)
  - Option: File Shared (value: file_share)
  - Option: New Message Posted to Channel (value: message)
  - Option: New Public Channel Created (value: channel_created)
  - Option: New User (value: team_join)
  - Option: Reaction Added (value: reaction_added)
- **watchWorkspace** (boolean): Whether to watch for the event in the whole workspace, rather than a specific channel
- **notice** (notice): This will use one execution for every event in any channel your bot is in, use with caution
- **channelId** (resourceLocator): The Slack channel to listen to events from. Applies to events: Bot/App mention, File Shared, New Message Posted on Channel, Reaction Added.
- **downloadFiles** (boolean): Whether to download the files and add it to the output
- **options** (collection): Options
  - Option: resolveIds (value: undefined)
  - Option: userIds (value: undefined)
