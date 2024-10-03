import { promisify } from "node:util";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from 'node:path';

const pipe = promisify(pipeline);

const decompress = async () => {
  try {
    const srcFile = path.join(import.meta.dirname, "files/archive.gz");
    const destFile = path.join(import.meta.dirname, "files/fileToCompress777.txt");
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
