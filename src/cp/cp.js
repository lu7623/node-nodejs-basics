import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { fork } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const childProcess = fork(
    path.join(__dirname, "files/script.js"),
    args.split(" ")
  );
  process.stdin.on("message", (msg) => {
    childProcess.stdin.write(msg);
  });
  process.stdout.on("message", (msg) => {
    console.log(msg.toString());
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess("--a --b --c");
