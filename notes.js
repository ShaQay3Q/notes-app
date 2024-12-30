const fs = require("fs");
const { title } = require("process");
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
		console.log("New note added!");
	} else {
		console.log("Note title taken!");
	}
};

// API for removing notes
const removeNotes = (title) => {
	const notes = loadNotes();
	const theNote = notes.filter((note) => note.title === title);
	if (theNote.length === 0) {
		console.log(`No "${title}" note title was found!`);
	} else {
		const remainedNotes = notes.filter((note) => note.title !== title);
		saveNotes(remainedNotes);
		console.log(`${title} was successfully removed!`);
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNotes: removeNotes,
};
