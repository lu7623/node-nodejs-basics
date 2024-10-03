import { promisify } from "node:util";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from 'node:path';

const pipe = promisify(pipeline);

const compress = async () => {
  try {
    const srcFile = path.join(import.meta.dirname, "files/fileToCompress.txt");
    const destFile = path.join(import.meta.dirname, "files/archive.gz");
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
