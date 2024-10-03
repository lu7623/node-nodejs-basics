import fs from "fs";
import path from 'node:path';

export const filePath =  path.join(import.meta.dirname, "files/fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });

  readStream.on("data", (data) => {
    process.stdout.write(`${data}\n`);
  });
};

await read();
