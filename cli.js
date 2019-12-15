#!/usr/bin/env node

const yargs = require("yargs");
const shell = require("shelljs");

const argv = yargs
  .option("file", {
    description: "JSON file containing the view hierarchy to query"
  })
  .demandOption("file", "Please specify the view file to query").argv;

console.log(
  `File ${argv.file} ${
    shell.test("-e", argv.file) ? "exists" : "does not exist"
  }`
);
