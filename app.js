// const add = require("./utils");
const getNotes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const ADD = "add";
const REMOVE = "remove";
const READ = "read";
const LIST = "list";

console.log(getNotes());
const log = console.log;

// Customized version
// yargs.version("2.0.0");

//Creat ADD command
yargs.command({
	command: ADD,
	describe: "Add a new note",
	// need a fucntion value so that the command will be exucuted
	handler: () => {
		log(chalk.blue.bold("New note has been added."));
	},
});

//Creat REMOVE command
yargs.command({
	command: REMOVE,
	describe: "Remove a note",
	handler: () => {
		log(chalk.blue.bold("New note has been added."));
	},
});

//Creat READ command
yargs.command({
	command: READ,
	describe: "Read a note",
	handler: () => {
		log(chalk.blue.bold("Note content"));
	},
});

//Creat LIST command
yargs.command({
	command: LIST,
	describe: "List all notes",
	handler: () => {
		log(chalk.blue.bold("Notes List..."));
	},
});

// console.log(validator.isEmail("shaghay3gh@gmail.com"));
// console.log(validator.isURL("http://google.com"));
// const command = process.argv[2];

log(process.argv);
log(yargs.argv);
