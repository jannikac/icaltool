import { Utils } from "./common/utils";
import path from "path/posix";
import { readFileSync } from "fs";
const ICAL = require("ical.js");
import { Command } from "commander";
let input = "Gurke Tomate Zwiebel";

//let output = Utils.kebabStyle(input);

//console.log(`output: ${output}`);

const program = new Command();

//program.requiredOption("-f, --file <file>", "specify input file");

//program.parse(process.argv);

//const options = program.opts();
//const data = readFileSync(path.resolve(__dirname, options.file), "utf8");
const data = readFileSync("/home/jannik-arch/dev/cal/dist/test.ics", "utf8");
console.log(data);

const jCalData = ICAL.parse(data);
console.log(jCalData);
//console.log(data);
