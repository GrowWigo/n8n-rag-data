# Concept: Handling Rate Limits & Delays

External APIs (like Twitter, Google, Shopify) have rate limits (e.g., "Max 50 requests per second"). If an n8n workflow tries to process 10,000 items at once, it will crash or get blocked by the API. The AI Agent must design workflows that respect these limits.

## How n8n Processes Data
By default, n8n processes data in **Batches**. If a node receives 1,000 items, it will execute the action for all 1,000 items at the same time (or in very rapid succession).

## Solution 1: Split In Batches Node (Legacy) or Loop Node (New)
- **Usecase**: When processing a large array of items.
- **How it works**: The `Loop` node (previously called `Split in Batches`) takes 1,000 items and outputs them in smaller chunks (e.g., 50 at a time). 
- The workflow processes the 50 items, and then loops back to the `Loop` node to get the next 50.

## Solution 2: The Wait Node
- **Usecase**: Pausing the workflow to avoid hitting rate limits or to wait for a manual action.
- **How it works**: After processing a batch of 50 items, the Agent should insert a `Wait` node configured to sleep for 5 seconds.
- **Workflow Pattern**: `Loop Node` -> `API Action Node` -> `Wait Node (5s)` -> Connect back to `Loop Node`.

## Solution 3: Node-Level Batching Settings
Some modern n8n nodes have built-in rate-limit settings under their **Options**.
- **Batch Size**: How many items to process per API call.
- **Batch Interval**: How many milliseconds to wait between batches.
If the node has these properties available (check the `.md` file for that node), the AI Agent should configure them directly on the node instead of building a complex Loop + Wait structure.

## Design Rule for AI
Always ask the user about the expected volume of data. If the workflow expects high volume (bulk email sending, database sync), the generated JSON MUST include a `Loop` node and a `Wait` node to prevent rate limit errors.
