import {createWriteStream} from "fs"
import path from 'node:path';

export const filePath =  path.join(import.meta.dirname, "files/fileToWrite.txt");

const write = async () => {
    const writeStream = createWriteStream(filePath)
    process.stdin.pipe(writeStream)
};

await write();