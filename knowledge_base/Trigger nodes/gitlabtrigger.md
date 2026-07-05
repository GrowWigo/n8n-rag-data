# Node: GitLab Trigger

**Name**: gitlabTrigger
**Category**: trigger
**Description**: Starts the workflow when GitLab events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **owner** (string): Owner of the repository
- **repository** (string): The name of the repository
- **events** (multiOptions): The events to listen to
  - Option: Comment (value: note)
  - Option: Confidential Issues (value: confidential_issues)
  - Option: Confidential Comments (value: confidential_note)
  - Option: Deployments (value: deployment)
  - Option: Issue (value: issues)
  - Option: Job (value: job)
  - Option: Merge Request (value: merge_requests)
  - Option: Pipeline (value: pipeline)
  - Option: Push (value: push)
  - Option: Release (value: releases)
  - Option: Tag (value: tag_push)
  - Option: Wiki Page (value: wiki_page)
  - Option: * (value: *)
