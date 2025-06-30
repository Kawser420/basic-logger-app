const path = require("path");

const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ");

if (!text) {
  console.log("Please provide a message to log");
  console.log("Example : node js Hello Word!!!");
  process.exit(1);
}

const filePath = path.join(__dirname, "log.txt");
console.log(filePath);
