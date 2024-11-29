//     WHILe
//let i=10;//
//while (i<10) {
 //   i++;
  //  console.log(i);
//}
//     Obj veraibel
 //const dataModel = { //user
   // firstName : 'Jon',
    //lastName : 'Smith',
    //position : 'QA',
    //isActive : false
//}
//const userDetilInfo = dataModel;
//console.log(dataModel);
/////    object lenght
//const user = {
//firstName : 'Jone',
//lastName : 'Smith',
//isActive : true,
//price : 60000,
//length : 0
//}
//let count;
//for (let i in user) {
//console.log(`${i} : ${user[i]}`)
//if (i !== 'length') {
//user.length = user.length + 1;
//}
//}
//console.log(user.length);
///    array
//const skills = [ 'HTML', 'CSS'];
//skills.push('JS','react'); //avelacnum e verjic
//skills.pop(); //verjic hanum e
//skills.shift();//skzbic hanum e 1 hat element
//console.log(skills);
//// xndir(tesakavorel by type)
// const arr = ['hello', 3, '2', NaN, {}, false, true, 99, 'JS', []];
// const str = [];
// const numb = [];
// const boo = [];
// const obj = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         str.push(arr[i]);
//     } else if (typeof arr[i] === "number" && !isNaN(arr[i])) {
//         numb.push(arr[i]);
//     } else if (typeof arr[i] === "boolean") {
//         boo.push(arr[i]);
//     } else if (typeof arr[i] === "object") {
//         obj.push(arr[i]);
//     }
// }
// console.log(str, 'string');   // ['hello', '2', 'JS']
// console.log(numb, 'number');  // [3, 99]
// console.log(boo, 'boolean');  // [false, true]
// console.log(obj, 'object');   // [{}, []]
////// xndir   min max
// const arr = [3, 99, 1, 4];
// let min = arr[0];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
// if (arr[i] > max) {
//     max = arr[i];
// } else if (arr[i] < min) {
//     min = arr[i];
// }
// }
// console.log(min, 'min value');
// console.log(max, 'max value');
//// xndir mutgagrac texty stugi palidrom a te voch
//  console.log(arr.reverse()); /// revers a anum arrayy
//join zangvacy sarqum a sring
//split stringy sarqum a zangvac
const palindromName = 'Anna';
const splitData = palindromName.split('');
const reversData = splitData.reverse();
const joinData = reversData.join('');
console.log(joinData.toLocaleLowerCase() === palindromName.toLocaleLowerCase());
