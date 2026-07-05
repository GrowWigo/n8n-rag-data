# Concept: Custom API Actions

When an AI Agent is designing a workflow, it might encounter a situation where the built-in n8n App Node (e.g., Slack, GitHub) does NOT have the specific operation the user asked for.

## The Problem
For example, the user wants to "Pin a message in Slack". The n8n Slack node has "Send Message", "Upload File", but it might NOT have a built-in operation for "Pin Message".

## The Solution: Custom API Call
n8n has two ways to solve this natively without writing code:

### 1. The HTTP Request Node
- You can add a standard `HTTP Request` node.
- Configure it to point to the Slack API endpoint (`POST https://slack.com/api/pins.add`).
- **Authentication**: You can attach the existing n8n Slack credential to the HTTP Request node using "Predefined Credential Type". This means the user doesn't have to manually pass the API token in the headers; n8n injects it securely.

### 2. Custom API Operation (Within the App Node)
- Many modern n8n app nodes feature an operation called **"Custom API"** or **"Custom Request"**.
- Instead of using a separate HTTP Request node, the Agent can set the App Node's resource to `Custom API`.
- **Advantage**: The node automatically handles the base URL and authentication. The Agent only needs to provide the path (e.g., `/pins.add`), the method (POST), and the JSON body.

## Design Rule for AI
If the user requests an action that is not present in the `.md` file for that specific App node, do NOT fail or give up. Instead, structure a `Custom API` call using the App Node, or insert an `HTTP Request` node equipped with the correct Predefined Credential.
