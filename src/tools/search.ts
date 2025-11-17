import { Tool } from "@modelcontextprotocol/sdk/types";
import fg from "fast-glob";
import fs from "fs/promises";

export const searchCodeTool: Tool = {
  name: "search_code",
  description: "Search for text or functions in the project",
  inputSchema: {
    type: "object",
    properties: {
      query: { type: "string" }
    },
    required: ["query"]
  },
  async execute({ query }) {
    const files = await fg(["**/*.{ts,tsx}", "!node_modules"]);
    const results: any[] = [];

    for (const file of files) {
      const content = await fs.readFile(file, "utf8");
      if (content.includes(query)) {
        results.push({
          file,
          snippet: content.substring(0, 300) + "..."
        });
      }
    }

    return { results };
  }
};
