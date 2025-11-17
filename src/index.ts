import { MCPServer } from "@modelcontextprotocol/sdk/server";
import { readFileTool } from "./tools/fs.js";
import { projectMapTool } from "./tools/project.js";
import { searchCodeTool } from "./tools/search.js";

const server = new MCPServer({
  name: "nextjs-mcp",
  version: "1.0.0"
});

server.addTool(readFileTool);
server.addTool(projectMapTool);
server.addTool(searchCodeTool);

server.start();
