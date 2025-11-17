import { Tool } from "@modelcontextprotocol/sdk/types";
import fg from "fast-glob";

export const projectMapTool: Tool = {
  name: "project_map",
  description: "List all Next.js/TS files in the project",
  inputSchema: { type: "object", properties: {} },

  async execute() {
    const files = await fg(["**/*.ts", "**/*.tsx", "!node_modules"]);
    return { files };
  }
};
