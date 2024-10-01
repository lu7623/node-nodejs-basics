import * as fs from "node:fs/promises";
import { createPath, FS_ERROR_MESSAGE } from "./utils.js";

const filePath = createPath("files/fresh.txt");

const create = async () => {
  const content = "I am fresh and young";
  try {
    await fs.writeFile(filePath, content, { flag: "wx" });
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await create();
