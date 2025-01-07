const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	return "Your notes...";
};

// Load ALL THE NOTES from the file
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json"); // if the file isn't exist => error => try{}catch{}
		const jsonData = dataBuffer.toString();
		return JSON.parse(jsonData);
	} catch (e) {
		return [];
	}
};

// Save a note => basically RE-WRITE the whole notes!
const saveNotes = (notes) => {
	const notesJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", notesJSON);
};

// API for adding notes
const addNote = (title, body) => {
	const notes = loadNotes();

	// const douplicateNotes = notes.filter((note) => note.title === title); // keep iterating over the whole array even after finding the match
	const douplicateNote = notes.find((note) => note.title === title); // stop itering over the array after it found the match
	// in a case douplicateNote doesn't return any result, the return value is "undefined"
	// ==> if (douplicateNote === undefined) works

	if (!douplicateNote) {
		notes.push({
			// property : value
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log(chalk.bold("New note added!"));
	} else {
		console.log(
			chalk.yellow.bold("Title", chalk.inverse(`${title}`), "aleady exist!")
		);
	}
};

// API for removing notes
const removeNotes = (title) => {
	const notes = loadNotes();
	const remainedNotes = notes.filter((note) => note.title !== title);
	//! use "remainedNotes.length < notes.length" as alternative condiction
	if (remainedNotes.length === notes.length) {
		console.log(chalk.red.inverse.bold(`No "${title}" found!`));
	} else {
		saveNotes(remainedNotes);
		console.log(chalk.green.bold(`${title} successfully removed!`));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	if (notes.length > 0) {
		console.log(chalk.white.inverse("Your Notes:"));

		notes.forEach((note) => console.log("title: " + chalk.green(note.title)));
	} else console.log(chalk.red.bold("There is no notes!"));
};

const readNotes = () => {};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNotes: removeNotes,
	listNotes: listNotes,
	readNotes: readNotes,
};
