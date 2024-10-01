import { pipeline } from "stream/promises";
import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      let transformedStr = chunk.toString().split("").reverse().join("");
      callback(null, transformedStr);
    },
  });
  await pipeline(process.stdin, reverse, process.stdout);
};

await transform();
