const fs = require("fs");

fs.writeFileSync("note.txt", "This file was created by Node.js.");

fs.appendFileSync(
	"note.txt",
	"This second line was appended to the first line."
);

fs.appendFileSync("note.txt", "\nTest the new line!");

// import { writeFileSync, appendFileSync } from "fs";

// writeFileSync("message.txt", "Line one.\n");
// appendFileSync("message.txt", "Line two.\n");
const chalk = require("chalk");

console.log(add(3, 4));
console.log(getNotes());
const log = console.log;

// console.log(validator.isEmail("shaghay3gh@gmail.com"));
// console.log(validator.isURL("http://google.com"));

log(chalk.green.bold("Success!"));
log(chalk.blue("Hello") + " World" + chalk.red.bold("!"));
log(chalk.blue.bgRed.inverse.bold("Hello world!"));
log(chalk.bgBlue.red.inverse.bold("Hello world!"));
log(chalk.blue.bgRed.bold("Hello world!"));

log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

log(chalk.rgb(200, 45, 67).underline("Underlined reddish color"));
log(chalk`
    CPU: ${chalk.red("90%")}
    RAM: ${chalk.green("40%")}
    DISK: ${chalk.yellow("70%")}
    `);

log(chalk.hex("#DEADED").bold("Bold gray!"));

log(process.argv[2]);
