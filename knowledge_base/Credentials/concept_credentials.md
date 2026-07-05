# Concept: Credentials in n8n

Authentication with external APIs is handled securely in n8n through **Credentials**. An AI Agent must know how to configure nodes to use credentials.

## How Credentials Work
- n8n stores credentials securely in its encrypted database.
- Workflows do NOT contain raw API keys or passwords in their JSON structure.
- Instead, the workflow JSON references the **Credential ID** or **Credential Name**.

## Types of Credentials
1. **OAuth2**: Requires the user to log in via a browser popup. The agent cannot automate OAuth2 token generation, but it MUST configure the node to specify that OAuth2 is the chosen authentication method.
2. **API Key / Header Auth**: The user pastes a static key.
3. **Basic Auth**: Username and password.

## Configuring Node JSON for Credentials
When the AI Agent generates a workflow JSON, and a node requires authentication, it must set the `credentials` property on the node.

Example for a Telegram Node:
```json
{
  "name": "Telegram",
  "type": "n8n-nodes-base.telegram",
  "credentials": {
    "telegramApi": {
      "id": "1",
      "name": "My Telegram Bot"
    }
  },
  "parameters": {
    "chatId": "123456789",
    "text": "Hello World",
    "operation": "sendMessage"
  }
}
```

## Prompting the User
If the AI Agent generates a blueprint that requires integrating with HubSpot and Stripe, the AI MUST explicitly tell the user: "You will need to create a HubSpot OAuth2 credential and a Stripe API Key credential in your n8n dashboard and link them to these nodes."

## Design Rule for AI
Never ask the user for their raw API keys to inject into the workflow JSON. Always structure the JSON to expect n8n-managed credentials, and use the node's defined credential types (e.g., `googleApi`, `slackApi`, `httpHeaderAuth`).
