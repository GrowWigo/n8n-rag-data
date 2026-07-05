# Node: Lemlist Trigger

**Name**: lemlistTrigger
**Category**: trigger
**Description**: Handle Lemlist events via webhooks
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **event** (options): Event
  - Option: * (value: *)
  - Option: Contacted (value: contacted)
  - Option: Hooked (value: hooked)
  - Option: Attracted (value: attracted)
  - Option: Warmed (value: warmed)
  - Option: Interested (value: interested)
  - Option: Skipped (value: skipped)
  - Option: Not Interested (value: notInterested)
  - Option: Emails Sent (value: emailsSent)
  - Option: Emails Opened (value: emailsOpened)
  - Option: Emails Clicked (value: emailsClicked)
  - Option: Emails Replied (value: emailsReplied)
  - Option: Emails Bounced (value: emailsBounced)
  - Option: Emails Send Failed (value: emailsSendFailed)
  - Option: Emails Failed (value: emailsFailed)
  - Option: Emails Unsubscribed (value: emailsUnsubscribed)
  - Option: Emails Interested (value: emailsInterested)
  - Option: Emails Not Interested (value: emailsNotInterested)
  - Option: Opportunities Done (value: opportunitiesDone)
  - Option: Aircall Created (value: aircallCreated)
  - Option: Aircall Ended (value: aircallEnded)
  - Option: Aircall Done (value: aircallDone)
  - Option: Aircall Interested (value: aircallInterested)
  - Option: Aircall Not Interested (value: aircallNotInterested)
  - Option: Api Done (value: apiDone)
  - Option: Api Interested (value: apiInterested)
  - Option: Api Not Interested (value: apiNotInterested)
  - Option: Api Failed (value: apiFailed)
  - Option: LinkedIn Visit Done (value: linkedinVisitDone)
  - Option: LinkedIn Visit Failed (value: linkedinVisitFailed)
  - Option: LinkedIn Invite Done (value: linkedinInviteDone)
  - Option: LinkedIn Invite Failed (value: linkedinInviteFailed)
  - Option: LinkedIn Invite Accepted (value: linkedinInviteAccepted)
  - Option: LinkedIn Replied (value: linkedinReplied)
  - Option: LinkedIn Sent (value: linkedinSent)
  - Option: LinkedIn Voice Note Done (value: linkedinVoiceNoteDone)
  - Option: LinkedIn Voice Note Failed (value: linkedinVoiceNoteFailed)
  - Option: LinkedIn Interested (value: linkedinInterested)
  - Option: LinkedIn Not Interested (value: linkedinNotInterested)
  - Option: LinkedIn Send Failed (value: linkedinSendFailed)
  - Option: Manual Interested (value: manualInterested)
  - Option: Manual Not Interested (value: manualNotInterested)
  - Option: Paused (value: paused)
  - Option: Resumed (value: resumed)
  - Option: Custom Domain Errors (value: customDomainErrors)
  - Option: Connection Issue (value: connectionIssue)
  - Option: Send Limit Reached (value: sendLimitReached)
  - Option: Lemwarm Paused (value: lemwarmPaused)
- **options** (collection): Options
  - Option: campaignId (value: undefined)
  - Option: isFirst (value: undefined)
