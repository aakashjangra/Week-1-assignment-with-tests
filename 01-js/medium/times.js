/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let sum = 0;
    let startTime = Date.now();
    
    for(let i = 0; i < n; i++) sum += i;

    let endTime = Date.now();

    return (endTime - startTime)/1000 + ' seconds'; //time in ms (seconds)
}

let n = 886969999; //change input to see different results
console.log(`time of execution for sum of ${n} is - `, calculateTime(n))