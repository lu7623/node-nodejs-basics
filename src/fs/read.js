import * as fs from "node:fs/promises";
import { createPath, FS_ERROR_MESSAGE } from "./utils.js";

const filePath = createPath("files/fileToRead.txt");

const read = async () => {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await read();
