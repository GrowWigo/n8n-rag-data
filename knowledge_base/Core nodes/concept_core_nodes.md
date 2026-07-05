# Concept: Core Nodes

Core nodes are built-in n8n nodes that perform essential logic, data transformation, and flow control. The AI Agent must use these frequently to design robust workflows.

## 1. IF Node
- **Usecase**: Conditional branching. Evaluates a condition (e.g., if a field `status` is equal to 'active').
- **Outputs**: Has two outputs: `true` (if condition matches) and `false` (if condition fails).
- **Usage**: Used to stop execution or divert it based on data values.

## 2. Switch Node
- **Usecase**: Multi-branch conditional logic.
- **Outputs**: Can have 4 or more outputs based on the value of a specific field (e.g., routing based on `priority`: 'high', 'medium', 'low', 'default').

## 3. Set Node (or Edit Fields)
- **Usecase**: Creating new fields, deleting fields, or modifying existing JSON fields.
- **Usage**: Use this to clean up the data structure or assign hardcoded/computed values before passing it to an Action node.

## 4. Merge Node
- **Usecase**: Combining data from two different branches or streams into one.
- **Modes**: Append, Keep Key Matches, Merge By Key, etc.
- **Usage**: When a workflow splits into two branches (e.g., fetching User Data and Company Data separately) and needs to merge them back together before sending an email.

## 5. Code Node
- **Usecase**: Writing custom JavaScript or Python code.
- **Usage**: Use this when n8n's built-in nodes cannot easily perform the required data transformation or math calculation. The agent can inject custom scripts here.
- **Constraint**: Must return an array of objects `[{ json: { ... } }]`.

## 6. HTTP Request Node
- **Usecase**: Making custom REST API calls (GET, POST, PUT, DELETE).
- **Usage**: Use this when n8n does NOT have a dedicated App node for a service, or when the existing App node is missing a specific endpoint.

## Design Rule for AI
Always prefer standard App nodes over `HTTP Request` for external services. However, if an endpoint is undocumented or custom logic is required, insert an `HTTP Request` or `Code` node.
