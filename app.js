const fs = require("fs");

fs.writeFileSync("note.txt", "This file was created by Node.js.");

fs.appendFileSync(
	"note.txt",
	"This second line was appended to the first line."
);

// import { writeFileSync, appendFileSync } from "fs";

// writeFileSync("message.txt", "Line one.\n");
// appendFileSync("message.txt", "Line two.\n");
