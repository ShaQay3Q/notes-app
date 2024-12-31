// const add = require("./utils");
// const { getNotes, addNote } = require("./notes.js");
const notes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const { type } = require("os");
const { title } = require("process");

const ADD = "add";
const REMOVE = "remove";
const READ = "read";
const LIST = "list";

yargs.version("1.0.0");

// console.log(getNotes());
const log = console.log;

//Creat ADD command
yargs.command({
	command: ADD,
	describe: "Add a new note",
	builder: {
		//! If it is not stated, brings back a bool instead of string => need to confiure the input (type)
		title: {
			describe: "Note title",
			demandOption: true, //! indicates that the argument is required
			//! input type
			type: "string",
		},
		body: {
			describe: "Content of the note",
			demandOption: true,
			type: "string",
		},
	},
	// need a fucntion value so that the command will be exucuted
	handler(argv) {
		//! for Methods it is better NOT to use arrow functions
		notes.addNote(argv.title, argv.body);
		// log(chalk.blue.bold("New note has been added."));
		// console.log(`title: ${argv.title}`);
		// log(`body: ${argv.body}`);
	},
});

//Creat REMOVE command
yargs.command({
	command: REMOVE,
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	//! ES6 method definition syntax
	handler(argv) {
		notes.removeNotes(argv.title);
		// log(chalk.blue.bold(`${argv.title} was successfully removed!`));
	},
});

//Creat READ command
yargs.command({
	command: READ,
	describe: "Read a note",
	handler() {
		log(chalk.blue.bold("Note content"));
	},
});

//Creat LIST command
yargs.command({
	command: LIST,
	describe: "List all notes",
	handler() {
		notes.getNotes();
	},
});

yargs.parse();

// log(yargs.argv);
