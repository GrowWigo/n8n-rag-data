# Node: Github Trigger

**Name**: githubTrigger
**Category**: trigger
**Description**: Starts the workflow when Github events occur
**Version**: 1

## Common Usecase
This node is used to START a workflow. It acts as a trigger when an event occurs.

## Inputs
[]

## Outputs
["main"]

## Properties & Settings
These are the settings you can configure for this node:

- **notice** (notice): Only members with owner privileges for an organization or admin privileges for a repository can set up the webhooks this node requires.
- **authentication** (options): Authentication
  - Option: Access Token (value: accessToken)
  - Option: OAuth2 (value: oAuth2)
- **owner** (resourceLocator): Repository Owner
- **repository** (resourceLocator): Repository Name
- **events** (multiOptions): The events to listen to
  - Option: * (value: *)
  - Option: Check Run (value: check_run)
  - Option: Check Suite (value: check_suite)
  - Option: Commit Comment (value: commit_comment)
  - Option: Create (value: create)
  - Option: Delete (value: delete)
  - Option: Deploy Key (value: deploy_key)
  - Option: Deployment (value: deployment)
  - Option: Deployment Status (value: deployment_status)
  - Option: Fork (value: fork)
  - Option: Github App Authorization (value: github_app_authorization)
  - Option: Gollum (value: gollum)
  - Option: Installation (value: installation)
  - Option: Installation Repositories (value: installation_repositories)
  - Option: Issue Comment (value: issue_comment)
  - Option: Issues (value: issues)
  - Option: Label (value: label)
  - Option: Marketplace Purchase (value: marketplace_purchase)
  - Option: Member (value: member)
  - Option: Membership (value: membership)
  - Option: Meta (value: meta)
  - Option: Milestone (value: milestone)
  - Option: Org Block (value: org_block)
  - Option: Organization (value: organization)
  - Option: Page Build (value: page_build)
  - Option: Project (value: project)
  - Option: Project Card (value: project_card)
  - Option: Project Column (value: project_column)
  - Option: Public (value: public)
  - Option: Pull Request (value: pull_request)
  - Option: Pull Request Review (value: pull_request_review)
  - Option: Pull Request Review Comment (value: pull_request_review_comment)
  - Option: Push (value: push)
  - Option: Release (value: release)
  - Option: Repository (value: repository)
  - Option: Repository Import (value: repository_import)
  - Option: Repository Vulnerability Alert (value: repository_vulnerability_alert)
  - Option: Security Advisory (value: security_advisory)
  - Option: Star (value: star)
  - Option: Status (value: status)
  - Option: Team (value: team)
  - Option: Team Add (value: team_add)
  - Option: Watch (value: watch)
- **options** (collection): Options
  - Option: insecureSSL (value: undefined)
