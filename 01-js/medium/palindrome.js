/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s = 0, e = str.length - 1;

  str = str.toLowerCase();

  while(s < e){

    const ecc = str.charCodeAt(e);
    const scc = str.charCodeAt(s);

    if(str.charAt(s) === ' ' || !((scc > 47 && scc < 58) || ( scc > 96 && scc < 123))){
      s++;
      continue;
    } 
    if(str.charAt(e) === ' ' || !((ecc > 47 && ecc < 58) || (ecc > 96 && ecc < 123))){
      e--;
      continue;
    }
    if(str.charAt(s) !== str.charAt(e)) return false;
    s++;
    e--;
  }

  return true;
}

console.log(isPalindrome('akashsAka'))

module.exports = isPalindrome;
