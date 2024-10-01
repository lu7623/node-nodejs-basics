import { createReadStream } from "node:fs";
import { createPath } from "../utils.js";
const { createHash } = await import("node:crypto");

const filename = createPath("hash/files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const readStream = createReadStream(filename);

  readStream.on("data", (data) => {
    hash.update(data);
  });

  readStream.on("end", () => {
    const hashValue = hash.digest("hex");
    console.log(hashValue);
  });

  readStream.on("error", (err) => console.error(err.message));
};

await calculateHash();
