import { AddReminders } from "./common/Processing.js";
import path from "path/posix";
import { dirname } from "path/posix";
import { fileURLToPath } from "url";
import logSymbols from "log-symbols";
import ICAL from "ical.js";
import { readFileSync, writeFileSync } from "fs";
import { Command } from "commander";

const __dirname = dirname(fileURLToPath(import.meta.url));
const program = new Command();

program
  .requiredOption("-f, --file <file>", "specify input file")
  .option("-o, --output <file>", "specify output location", "out.ics");

program.parse(process.argv);

let data: any;

const options = program.opts();
//read file from given path
try {
  data = readFileSync(path.resolve(__dirname, options.file), "utf8");
} catch (err) {
  console.log(logSymbols.error, err.message);
  process.exit(1);
}

//parse file data
const jCalData = ICAL.parse(data);
//process data
const result = AddReminders(jCalData);

//write file
try {
  writeFileSync(
    path.resolve(__dirname, options.output),
    ICAL.stringify(result)
  );
  console.log(
    logSymbols.success,
    `Output file written to ${path.resolve(__dirname, options.output)}`
  );
} catch (err) {
  console.log(logSymbols.error, err.message);
  process.exit(1);
}
