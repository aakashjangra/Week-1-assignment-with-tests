// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs')

function printContents(err, data) {
  console.log(data);
}

fs.readFile('./4-write-to-file.md', 'utf-8', printContents);

const n = 999;

for(let i = 1; i <= n; i++) console.log(i);

fs.readFile('./4-write-to-file.md', 'utf-8', printContents);

for(let i = n; i >= 1; i--) console.log(i);