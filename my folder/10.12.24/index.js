/*const boo = (x) => {
    return x + x
}*/
// const boo = x => x+x;

/*const boo = (x,y) => {
    return x + y
}
console.log(boo(20));*/
/*function buyTicket(){
    console.log(`Buy ticket: price = ${price}`);
}


function bookHotel(hotelName,foo){
    console.log('book hotel', hotelName);//ete es funkciain poxancum em arjeq da darnuma call back
    if(hotelName === 'x'){
        foo('1000$');

    }else if (hotelName === 'y'){
        foo ('1500$');
    }

    
   
}

bookHotel ('y',buyTicket)


const number = [1,2,4,5];
let max = number[0];
function forEach (arr,callback){
    for(let i = 0; i <arr.length;i++){
        if(arr[i] === undefined){
            continue
        }
        callback(arr[i],i);
    }

}

forEach(number,function(item, index) {
    if (item > max) {
        max = item;
    }

})

console.log(max);*/


/*const numbers = [1,2,4,99,5];

function myMap(arr,callback){
    const resultArray = [];
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === undefined){
            continue;
        }
        resultArray.push(callback(arr[i],i));
    }
    return resultArray;
}

const result = myMap(numbers,function(item){
       return item + 5;
});

console.log(result);*/



const numbers = [1,2,4,99,5];
function myFilter(numbers,callback){
    let arrResult = [];
    
    for (let i=0; i< numbers.length;i++){
        if (arr [i] === undefined){
            continue
        }
        if (callback(arr[i],i)){
            arrResult.push(arr[i])
        }
    }
    return arrResult;
}

const result = myFilter(numbers,function(item,index){//[4,99,5];
    return item > 3;
})
console.log(result,'>>>');
    
