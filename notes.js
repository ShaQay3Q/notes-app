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

	const douplicateNotes = notes.filter((note) => note.title === title);

	if (douplicateNotes.length === 0) {
		notes.push({
			// property : value
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log(chalk.bold("New note added!"));
	} else {
		console.log(
			chalk.yellow.bold("Title", chalk.blue(`${title}`), "aleady exist!")
		);
	}
};

// API for removing notes
const removeNotes = (title) => {
	const notes = loadNotes();
	const remainedNotes = notes.filter((note) => note.title !== title);
	if (remainedNotes.length === notes.length) {
		console.log(chalk.red.bold(`No "${title}" found!`));
	} else {
		saveNotes(remainedNotes);
		console.log(chalk.green.bold(`${title} successfully removed!`));
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNotes: removeNotes,
};
