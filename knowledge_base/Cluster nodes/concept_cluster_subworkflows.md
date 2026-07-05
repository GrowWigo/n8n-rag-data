# Concept: Cluster Nodes & Sub-workflows

As workflows get complex, they need to be broken down into modular, reusable parts. n8n handles this using **Sub-workflows**.

## The Execute Workflow Node
- **Purpose**: This node allows one workflow (the Parent) to trigger and run another workflow (the Child/Sub-workflow).
- **Usecase**: If multiple workflows need to do the same task (e.g., "Send Slack Error Notification"), the AI Agent should design a dedicated sub-workflow and use the `Execute Workflow` node in the parent workflows.
- **Data Flow**: 
  - The parent passes its current JSON data to the child.
  - The child processes it and returns data back to the parent.
  - The parent continues execution using the returned data.

## Triggering Sub-workflows
- The child workflow MUST start with an **Execute Workflow Trigger** node (`n8n-nodes-base.executeWorkflowTrigger`). 
- **DO NOT** use a standard Webhook or Schedule trigger if the workflow is meant to be run exclusively as a sub-workflow.

## High Availability & Clustering
- When deploying n8n at scale, n8n runs in a multi-main or main-worker cluster.
- **Worker Nodes**: Workloads are pushed to a Redis queue, and Worker nodes execute the heavy lifting.
- **Implication for Workflow Design**: When building workflows for a clustered environment, ensure that file paths (like writing to `/tmp/file.txt`) are handled carefully, because the node creating the file might not be the same worker node reading it. Always pass binary data directly through the workflow execution data (`binary` properties) rather than writing to the local disk.

## Design Rule for AI
If the user's prompt asks for a very complex system (e.g., "build an onboarding system, billing system, and error reporting system"), the AI should break this down into multiple workflows connected by `Execute Workflow` nodes instead of building one massive, unreadable workflow.
