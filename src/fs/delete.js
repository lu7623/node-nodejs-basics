import * as fs from "node:fs/promises";
import { createPath, FS_ERROR_MESSAGE } from "../utils.js";

const filePath = createPath("fs/files/fileToRemove.txt");

const remove = async () => {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await remove();
