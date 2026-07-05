const fs = require('fs');
const path = require('path');

const kbDir = path.join(__dirname, 'knowledge_base');

const folders = [
    "Node types",
    "Core nodes",
    "App nodes",
    "Trigger nodes",
    "Cluster nodes",
    "Credentials",
    "Custom API actions for existing nodes",
    "Handle rate limits",
    "Deprecated nodes"
];

// Create folders
folders.forEach(folder => {
    const dir = path.join(kbDir, folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

// Classification lists
const coreNodes = [
    'if', 'switch', 'set', 'merge', 'code', 'httprequest', 'splitinbatches', 'stopanderror',
    'function', 'functionitem', 'noop', 'renamekeys', 'datetime', 'crypto', 'editimage',
    'readbinaryfile', 'readbinaryfiles', 'writebinaryfile', 'readpdf', 'movebinarydata',
    'spreadsheetfile', 'xml', 'markdown', 'htmlextract', 'compression'
];

const clusterNodes = ['executeworkflow', 'executecommand', 'executiondata'];

const files = fs.readdirSync(kbDir).filter(f => f.endsWith('.md'));

for (const file of files) {
    const filePath = path.join(kbDir, file);
    const basename = file.replace('.md', '');
    let targetFolder = "App nodes"; // default

    if (file === 'concept_node_types.md') {
        targetFolder = "Node types";
    } else if (file === 'concept_core_nodes.md') {
        targetFolder = "Core nodes";
    } else if (file === 'concept_cluster_subworkflows.md') {
        targetFolder = "Cluster nodes";
    } else if (file === 'concept_credentials.md') {
        targetFolder = "Credentials";
    } else if (file === 'concept_custom_api_actions.md') {
        targetFolder = "Custom API actions for existing nodes";
    } else if (file === 'concept_rate_limits.md') {
        targetFolder = "Handle rate limits";
    } else if (file === 'concept_deprecated_nodes.md') {
        targetFolder = "Deprecated nodes";
    } else if (file.includes('trigger') || file === 'webhook.md' || file === 'cron.md' || file === 'schedule.md') {
        targetFolder = "Trigger nodes";
    } else if (coreNodes.includes(basename)) {
        targetFolder = "Core nodes";
    } else if (clusterNodes.includes(basename)) {
        targetFolder = "Cluster nodes";
    }

    const targetPath = path.join(kbDir, targetFolder, file);
    fs.renameSync(filePath, targetPath);
}

console.log("Successfully organized knowledge base into folders!");
