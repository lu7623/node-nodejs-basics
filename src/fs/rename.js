import * as fs from "node:fs/promises";
import { createPath, FS_ERROR_MESSAGE } from "../utils.js";

const rename = async () => {
  const oldPath = createPath("fs/files/wrongFilename.txt");
  const newPath = createPath("fs/files/properFilename.md");

  try {
    await fs.rename(oldPath, newPath);
  } catch (err) {
    console.log(err)
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await rename();
