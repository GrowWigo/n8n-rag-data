# Concept: Deprecated Nodes and Versioning

APIs change over time. Slack might release API v2, meaning the old n8n Slack node operations are no longer valid. To handle this without breaking user workflows, n8n uses **Node Versioning**.

## How Versioning Works
Every node in n8n has a `version` property.
- Example: The `Telegram` node might have versions `[1, 1.1]`.
- When an AI Agent generates a workflow JSON, it MUST specify the highest stable version of the node.

```json
{
  "name": "Telegram",
  "type": "n8n-nodes-base.telegram",
  "typeVersion": 1.1,
  "parameters": {}
}
```

## Deprecated Nodes
When a node is completely overhauled (e.g., switching from OAuth1 to OAuth2, or a complete API rewrite), n8n might deprecate the old node.
- In the n8n UI, deprecated nodes show up with a warning icon.
- Deprecated nodes still function (to prevent breaking old workflows), but users are encouraged to upgrade.

## How to Handle Upgrades
If an AI Agent is tasked with "optimizing or upgrading an existing workflow", it should:
1. Check the `typeVersion` of the nodes in the user's provided JSON.
2. Compare it against the `.md` knowledge base for that node to find the highest available version.
3. Replace the old node with the new version and map the parameters correctly, since parameter names often change between major node versions.

## Design Rule for AI
Never default to `typeVersion: 1` if a higher version is specified in the RAG documentation. Always generate JSON using the latest available node version to ensure the user gets the newest features and bug fixes.
