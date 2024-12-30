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

const addNote = (title, body) => {
	const notes = loadNotes();
	// for (const note of notes){
	// 	if (note.title === title){

	// 	} else {

	// 	}
	// }

	const douplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	if (!douplicateNotes) {
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

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
};
