import * as fs from "fs";

export const lines = (filename: string) => {
  return fs
    .readFileSync(filename, "utf-8")
    .split(/\r?\n/)
    .filter((x) => x);
};

export const paragraphs = (filename: string) => {
  return fs
    .readFileSync(filename, "utf-8")
    .split(/\r?\n\r?\n/)
    .filter((x) => x);
};
