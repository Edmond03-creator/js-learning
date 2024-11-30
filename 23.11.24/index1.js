/*Given an array [1, 2, 2, 3, 4, 4, 5]:
Write a program to create a new array where duplicate elements are removed.
The result should be [1, 2, 3, 4, 5].
*/

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [];

 //Loop through the original array
for (let i = 0; i < numbers.length; i++) {
     //If the element is not already in uniqueNumbers, add it
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}
console.log("Array with unique elements:", uniqueNumbers);