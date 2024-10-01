import * as fs from "node:fs/promises";
import { createPath, FS_ERROR_MESSAGE } from "../utils.js";

const path = createPath("fs/files");

const list = async () => {
  try {
    const files = await fs.readdir(path);
    for (const file of files) console.log(file);
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await list();
