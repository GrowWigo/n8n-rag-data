const fs = require('fs');
const path = require('path');

const packagesToExtract = [
    'n8n-nodes-base',
    '@n8n/n8n-nodes-langchain'
];

const outputDir = path.join(__dirname, 'knowledge_base');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

function parseProperties(properties, indent = 0) {
    let result = '';
    const prefix = '  '.repeat(indent);
    
    if (!properties || !Array.isArray(properties)) return result;

    for (const prop of properties) {
        result += `${prefix}- **${prop.name}** (${prop.type}): ${prop.description || prop.displayName || ''}\n`;
        if (prop.options && Array.isArray(prop.options)) {
            for (const opt of prop.options) {
                result += `${prefix}  - Option: ${opt.name} (value: ${opt.value})\n`;
            }
        }
    }
    return result;
}

function generateUsecase(desc) {
    let usecase = '';
    if (desc.group && desc.group.includes('trigger')) {
        usecase = 'This node is used to START a workflow. It acts as a trigger when an event occurs.';
    } else if (desc.name.toLowerCase().includes('agent')) {
        usecase = 'This is an AI Agent node. It uses LLMs to make decisions and use tools dynamically to achieve a goal.';
    } else if (desc.name.toLowerCase().includes('memory')) {
        usecase = 'This is a Memory node. It stores conversation history so the AI can remember past interactions.';
    } else if (desc.name.toLowerCase().includes('tool')) {
        usecase = 'This is a Tool node. It gives the AI Agent the ability to perform specific actions like searching the web or reading files.';
    } else {
        usecase = 'This node is an action node. It is used to perform tasks, integrate with APIs, or manipulate data within the workflow.';
    }
    return usecase;
}

async function extract() {
    let count = 0;

    for (const pkg of packagesToExtract) {
        const nodesDir = path.join(__dirname, 'node_modules', pkg, 'dist', 'nodes');
        
        if (!fs.existsSync(nodesDir)) {
            console.log(`Directory not found: ${nodesDir}`);
            continue;
        }

        const nodeFolders = fs.readdirSync(nodesDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        for (const folder of nodeFolders) {
            const folderPath = path.join(nodesDir, folder);
            const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.node.js'));

            for (const file of files) {
                try {
                    const nodeModule = require(path.join(folderPath, file));
                    const exportKeys = Object.keys(nodeModule);
                    
                    for (const key of exportKeys) {
                        const NodeClass = nodeModule[key];
                        if (typeof NodeClass === 'function') {
                            try {
                                const nodeInstance = new NodeClass();
                                if (nodeInstance.description) {
                                    const desc = nodeInstance.description;
                                    
                                    let md = `# Node: ${desc.displayName || desc.name}\n\n`;
                                    md += `**Name**: ${desc.name}\n`;
                                    md += `**Category**: ${desc.group ? desc.group.join(', ') : 'Unknown'}\n`;
                                    md += `**Description**: ${desc.description || ''}\n`;
                                    md += `**Version**: ${Array.isArray(desc.version) ? desc.version.join(', ') : desc.version || 1}\n\n`;
                                    
                                    md += `## Common Usecase\n`;
                                    md += `${generateUsecase(desc)}\n\n`;
                                    
                                    md += `## Inputs\n`;
                                    md += `${JSON.stringify(desc.inputs || [])}\n\n`;
                                    
                                    md += `## Outputs\n`;
                                    md += `${JSON.stringify(desc.outputs || [])}\n\n`;
                                    
                                    md += `## Properties & Settings\n`;
                                    md += `These are the settings you can configure for this node:\n\n`;
                                    md += parseProperties(desc.properties);
                                    
                                    const safeName = desc.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                                    fs.writeFileSync(path.join(outputDir, `${safeName}.md`), md);
                                    count++;
                                }
                            } catch (e) {
                                // Ignore instantiation errors
                            }
                        }
                    }
                } catch (err) {
                    // Ignore require errors
                }
            }
        }
    }
    console.log(`\nSuccessfully generated ${count} Markdown files in /knowledge_base`);
}

extract();
