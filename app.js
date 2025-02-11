const notes = require("./notes.js");
const yargs = require("yargs");

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
		notes.removeNote(argv.title);
	},
});

//Creat READ command
yargs.command({
	command: READ,
	describe: "Read a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

//Creat LIST command
yargs.command({
	command: LIST,
	describe: "List all notes",
	handler() {
		notes.listNotes();
	},
});

yargs.parse();
