import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filename = path.join(__dirname, "files","fileToCalculateHashFor.txt");

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

  readStream.on("error", (err) => {
    console.log(err);
  })
};

await calculateHash();
