const fs = require("fs");
const path = require("path");

// Get message from CLI arguments
const inputArguments = process.argv.slice(2);
const text = inputArguments.join(" ");

if (!text) {
  console.log("❌ Please provide a message to log");
  console.log("Example : node js Hello Word!!!");
  process.exit(1);
}

// log with timeStamp
const timeStamp = new Date().toISOString();
const logMessage = `[${timeStamp}] ${text}\n`;

const filePath = path.join(__dirname, "log.txt");

// Append log to log.txt file
fs.appendFile(filePath, logMessage, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.error("❌ Failed to wrong log:", err);
    return;
  }
  console.log("✅ Log saved successfully!");
});
