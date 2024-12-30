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

const addNote = (tile, body) => {
	const notes = loadNotes();
	notes.push({
		// property : value
		title: tile,
		body: body,
	});
	saveNotes(notes);
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
};
