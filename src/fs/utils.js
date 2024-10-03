import path from 'node:path';

export const createPath = (fileName) => path.join(import.meta.dirname, fileName);

export const FS_ERROR_MESSAGE = "FS operation failed";