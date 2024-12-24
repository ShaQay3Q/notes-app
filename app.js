const add = require("./utils");
const getNotes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");

console.log(add(3, 4));
console.log(getNotes());
const log = console.log;

// console.log(validator.isEmail("shaghay3gh@gmail.com"));
// console.log(validator.isURL("http://google.com"));

log(chalk.green.bold("Success!"));
log(chalk.blue("Hello") + " World" + chalk.red.bold("!"));
log(chalk.blue.bgRed.bold("Hello world!"));
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

log(chalk.rgb(200, 45, 67).underline("Underlined reddish color"));
log(`
    CPU: ${chalk.red("90%")}
    RAM: ${chalk.green("40%")}
    DISK: ${chalk.yellow("70%")}
    `);

log(chalk.hex("#DEADED").bold("Bold gray!"));
