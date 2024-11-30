//const arr = ['tesla','bmw','kia'];
//arr.splice(1,2);//popoxutyunnera anum: stexic minchev stex
//arr.splice(-2);//verjic 2 hat vercnuma
//console.log(arr);


const arr = [9,2,7,4];//3,5,6,8;
const result = [];
let min = arr[0];
let max = arr [0];
for (let i=1; i<arr.length;i++){
    let item = arr[i];
    if(item<min){
        min=item
    }
    if(item>max){
        max=item

    }
}
for(let i=min;i<max;i++){
    if(!arr.includes(i)){
        result.push(i);
    }

}
console.log(result,'result');