//Given an array of strings ["React", "JavaScript", "Redux", "PHP", "C#"]:
//Write a program to find the longest word in the array.
//Solution in JavaScript using only for loop and arrays:

const arr = ["React", "JavaScript", "Redux", "PHP", "C#"];
let longitem = arr[0];
for (let i=0; i<arr.length;i++){
    if(arr[i].length>longitem.length){
        longitem = arr[i]
    }
}

console.log(longitem,'>>>>>');