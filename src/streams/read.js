import fs from "fs";
import { createPath } from "../utils.js";

const fileName = createPath("streams/files/fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(fileName, { encoding: "utf-8" });

  readStream.on("data", (data) => {
    process.stdout.write(`${data}\n`);
  });
};

await read();
