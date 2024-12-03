/*Day Translation
Create a program that uses a switch-case to translate a day of the week from English to Armenian. The user should input the name of the day in English, and the program should return the corresponding Armenian name.
Input: “Monday”
Output: “Երկուշաբթի”
*/

var day = prompt('please input day');
day = day.toLowerCase();

var translatedday;
switch(day){
    case 'monday': translatedday = 'erkushabti';break;
    default: translatedday = 'wrong day';
    console.log(translatedday);
}
