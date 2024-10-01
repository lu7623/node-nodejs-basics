import { promisify } from "node:util";
import { createGunzip } from "node:zlib";
import { createPath } from "../utils.js";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const pipe = promisify(pipeline);

const decompress = async () => {
  try {
    const srcFile = createPath("zip/files/archive.gz");
    const destFile = createPath("zip/files/11.txt");
    const gunzip = createGunzip();
    const source = createReadStream(srcFile);
    const destination = createWriteStream(destFile);
    await pipe(source, gunzip, destination);
  } catch (err) {
    console.log(err);
    process.exitCode = 1;
  }
};

await decompress();
