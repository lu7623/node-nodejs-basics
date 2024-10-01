import {createWriteStream} from "fs"
import { createPath } from "../utils.js";

const filePath = createPath('streams/files/fileToWrite.txt')
const write = async () => {
    const writeStream = createWriteStream(filePath)
    process.stdin.pipe(writeStream)
};

await write();