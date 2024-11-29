/*Description:
You are provided with an array of students, where each student is represented as an object.
 Each object contains the student’s name and their score. Your task is to determine the grade status of each 
 student using a for loop and a switch statement.
The grade categories are as follows:
i >= 90 → “Excellent”
i >= 75 → “Good”
i >= 50 → “Pass”
default → “Fail”
*/

let students = [
    { name: "Anna", grade: 85 },
    { name: "Mariam", grade: 92 },
    { name: "Olivia", grade: 76 },
    { name: "Emma", grade: 59 },
];

for (let i = 0; i < students.length; i++) {
    let grade = students[i].grade;
    let message = "";

    if (grade >= 90) {
        message = "Excellent";
    } else if (grade >= 75) {
        message = "Good";
    } else if (grade >= 50) {
        message = "Pass";
    } else {
        message = "Fail";
    }

    alert(`${students[i].name}: ${message}`);
}

 
