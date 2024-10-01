import * as fs from "node:fs/promises";
import { createPath, FS_ERROR_MESSAGE } from "../utils.js";

const copy = async () => {
  const src = createPath("fs/files");
  const dest = createPath("fs/files_copy");

  try {
    await fs.cp(src, dest, {recursive:true, force: false, errorOnExist: true});
  } catch (err) {
    console.log(err)
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await copy();
