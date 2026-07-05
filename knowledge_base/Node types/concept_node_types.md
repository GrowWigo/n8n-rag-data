# Concept: Node Types in n8n

n8n uses different types of nodes to build workflows. An AI Agent must understand the distinction between these nodes to properly assemble a functional workflow.

## 1. Trigger Nodes
- **Purpose**: These nodes START the workflow.
- **Rule**: Every standard workflow MUST have at least one Trigger node.
- **Examples**: `Webhook`, `Schedule Trigger`, `On Chat Message`, `Telegram Trigger`.
- **Placement**: Always placed at the very beginning of the workflow. They do not have an input connection, only an output connection.
- **Data Flow**: They generate the initial JSON item that flows into the next nodes.

## 2. Action (App) Nodes
- **Purpose**: These nodes perform specific actions inside external third-party apps.
- **Rule**: They require an input connection and usually output the result of their action.
- **Examples**: `Google Sheets` (Append Row), `Telegram` (Send Message), `GitHub` (Create Issue).
- **Credentials**: Action nodes often require credentials (OAuth2 or API Key) to authenticate with the external service.

## 3. Core (Logic & Data) Nodes
- **Purpose**: Built-in nodes used to manipulate data, control the flow, or execute custom logic.
- **Rule**: They do not connect to external third-party services (except HTTP Request).
- **Examples**: `IF`, `Switch`, `Set`, `Merge`, `Code`, `HTTP Request`.
- **Usecase**: When data from a Trigger node needs to be transformed before being sent to an Action node, use Core nodes.

## 4. AI & LangChain Nodes
- **Purpose**: Nodes designed for building AI agents, handling memory, utilizing language models, and executing tools.
- **Examples**: `AI Agent`, `OpenAI Chat Model`, `Buffer Memory`, `Calculator Tool`.
- **Connections**: These nodes often have special connection types (e.g., a sub-node connection where an LLM or Memory connects to the main Agent node) instead of the standard main flow connections.

## Key Design Rule for AI Agent Workflow Generators
When generating a workflow JSON, always ensure:
1. The workflow starts with a valid Trigger node.
2. The trigger is connected to an Action or Core node.
3. Node connections explicitly map the `main` output of the previous node to the `main` input of the next node.
