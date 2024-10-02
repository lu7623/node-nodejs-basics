import { Worker } from "node:worker_threads";
import { cpus } from "os";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const cores = cpus();
  let increment = 10;

  const workers = cores.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.join(__dirname, "/worker.js"), {
        workerData: increment,
      });
      increment++;
      worker.on("message", (msg) => resolve(msg));
      worker.on("error", (err) => reject(err));
    });
  });
  const workersRes = await Promise.allSettled(workers);
  const results = workersRes.map((res) => {
    return {
      status: res.status === "fulfilled" ? "resolved" : "error",
      data: res.status === "fulfilled" ? res.value : null,
    };
  });
  
  console.log(results);
  return results;
};

await performCalculations();
