const fs = require("fs");

// Write to welcome.txt
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File 'welcome.txt' created successfully.");
});

// Read from hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});