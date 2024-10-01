import { promisify } from "node:util";
import { createGzip } from "node:zlib";
import { createPath } from "../utils.js";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const pipe = promisify(pipeline);

const compress = async () => {
  try {
    const srcFile = createPath("zip/files/fileToCompress.txt");
    const destFile = createPath("zip/files/archive.gz");
    const gzip = createGzip();
    const source = createReadStream(srcFile);
    const destination = createWriteStream(destFile);
    await pipe(source, gzip, destination);
  } catch (err) {
    console.log(err);
    process.exitCode = 1;
  }
};

await compress();
