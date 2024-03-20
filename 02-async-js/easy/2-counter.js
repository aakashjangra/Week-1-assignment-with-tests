// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 1;

function printCount() {
  console.log(counter++);

  setTimeout(printCount, 1000); //after 1 sec
}

 setTimeout(printCount, 1000); //after 1 sec




































































// (Hint: setTimeout)