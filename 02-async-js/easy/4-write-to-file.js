// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require('fs');

const data = `
bs aise hi likh diya kuch bhi :)
`
// fs.appendFile - for appending data into a file, to keep previous data
fs.writeFile('./temp.txt', data, (err) => {
  if(err) console.error('error occured while writing - ', err)
  else 
    console.log('write successful!');
})

for(let i = 0; i < 290; i++) console.log(i)

fs.readFile('./temp.txt', 'utf-8', (err, data) => {
  console.log(data);
})

for(let i = 0; i < 29; i++) console.log(i)