import { countryCurrencies } from "./constants.js";
import { find } from "./helpers.js";

const result = find(countryCurrencies,(item)=>{
    return item.currency.symbol === '$' && item.currency.code === 'CAD';

});

function myCustomFetch(resolve,reject){ //call to  backend
console.log('Loading...');
setTimeout(()=>{
    const randomNumber = Math.floor(Math.random()*10);
    if(randomNumber > 5){
        resolve(countryCurrencies)
    }else{
        reject('Oops:(')
    }
},3000)
}
function resolveFunction(data){//resolve case
console.table(data);
}

function rejectFunction(error){//reject case
    console.error(error);
}

myCustomFetch(resolveFunction,rejectFunction);
console.log ('Open drop down');

/*console.log('script start');
setTimeout(function(){
    console.log('3000');
},3000);

console.log('script 2');
setTimeout(function(){
    console.log('code 2000');
},2000);

console.log('script end');*/