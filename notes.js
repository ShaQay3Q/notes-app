const fs = require("fs");
const getNotes = () => {
	return "Your notes...";
};

const loadNotes = () => {
	const dataBuffer = fs.readFileSync("note.json"); // if the file isn;t exist => error => try{}catch{}
	const jsonData = dataBuffer.toString();
	return JSON.parse(jsonData);
};

const addNote = (tile, body) => {
	const notes = loadNotes();
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
};
