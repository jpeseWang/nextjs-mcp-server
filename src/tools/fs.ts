import { Tool } from "@modelcontextprotocol/sdk/types";
import fs from "fs/promises";

export const readFileTool: Tool = {
  name: "read_file",
  description: "Read a file's content from the Next.js project",
  inputSchema: {
    type: "object",
    properties: {
      path: { type: "string" }
    },
    required: ["path"]
  },
  async execute({ path }) {
    const content = await fs.readFile(path, "utf8");
    return { content };
  }
};
