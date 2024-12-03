/*Find Common Characters Between Two Strings
Description: Write a program that checks how many characters are common between two strings, without using new Set, and  function.
Example
*/

// Given strings
//const str1 = "react";
//const str2 = "redux";
//let commonCount = 0; 
//let checkedChars = '';

// Expected Output
2 // Because the strings "react" and "redux" share the characters 'r' and 'e'



let string1 = "react";
let string2 = "redux";

let commonCount = 0;
let checkedChars = {}; // ogtagorcac nisheri hamara

for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    for (let j = 0; j < string2.length; j++) {
        if (char === string2[j] && !checkedChars[j]) {
            commonCount++;
            checkedChars[j] = true; 
            break;
        }
    }
}

console.log(commonCount); 