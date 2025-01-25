/*function foo() {

    console.log (10 + 10);
}
 
foo();*/


/*var boo = function() {
    console.log(20+20)
}

boo();*/

/*Given strings
const str1 = "react";
const str2 = "redux";
let commonCount = 0; 
let checkedChars = '';*/

/*function checkChars (str1, str2){
    let count = 0;
for(let i =0; i<str1.length;i++){
    let char = str1[i];
    console.log(char,'>>>>');
    if(str2.includes(char)){
        count++
    }
}
console.log(count);
}

checkChars ( 'react','redux');

checkChars('javacript','react');*/


const employees = [
    { firstName: "Karen",lastName:'Sargsyan', department: "HR", salary:2000000 },
    { firstName: "John",lastName:'Gasparyan', department: "IT", salary:1500000 },
    { firstName: "Margarita",lastName:'Hovsepyan', department: "HR",salary:1500000 },
    { firstName: "Aram",lastName:'Manukyan', department: "Finance",salary:1500000 },
    { firstName: "Nina",lastName: 'Grigoryan', department: "IT",salary:500000 }
];

function transformUserData(data = []){
if (data === undefined){
    //data = []//default
}
    for (let i = 0;i<data.length ; i++){
        let item = data[i]
        result.push({
        fullname: `${item.firstName} ${item.lastName}`
    })
}
return findValue;
}

