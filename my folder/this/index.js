// window.firstName = 'Dav';
// window.lastName = 'Sargsyan';
// const user = {
//     firstName : 'John',
//     lastName :  'Smith',
//     allowMessage: function(){
//         const_this = this;
//         setTimeout(function(){
//             alert(welcome` ${_this.firstName} ${_this.laName}`)
//         },3000);
//     }

// }



// user.allowMessage();

// const user = {
    //     firstName : 'John',
    //    lastName :  'Smith',
    //    allowMessage: function(){
    //     setTimeout(() => {        alert(welcome` ${this.firstName} ${this.laName}`)
    //       },1000);
    //     }
    
    //  }
    
    //  user.allowMessage();

     // 2 step -------------
// function getUserLocation() {
//     return this.location;
// }
// const x = {
//     location: '47387748373'
// }
// const y = {
//     location: '17832547548'
// }
// x.getLocation = getUserLocation;
// y.getLocation = getUserLocation;
// console.log(x.getLocation(), 'x location');
// console.log(y.getLocation(), 'y location'); // .- ի
// -----------------
// 3 step -------------
// const obj = {
//     x: 10,
//     y: 20,
//     foo() {
//         console.log(this.x);
//     }
// }
// const boo = obj.foo;
// obj.foo(); //this
// boo(); //
// -----------------
// 4 step -------------
// window.firstName = 'Dav';
// window.lastName = 'Sargsyan';
// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     allowMessage: function() {
//         const _this = this;
//         setTimeout(function() {
//             console.log(this);
//             alert(`Welcome ${_this.firstName} ${_this.lastName}`)
//         }, 1000);
//     }
// }
// user.allowMessage();
// -----------------
// 5 step -------------
// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     allowMessage: function() {
//         setTimeout(() => {
//             alert(`Welcome ${this.firstName} ${this.lastName}`)
//         }, 1000);
//     }
// }
// user.allowMessage();
// -----------------
// 6 step -------------
// const obj1 = {
//     x: 10,
// }
// const obj2 = {
//     y: 20,
//     __proto__: obj1
// }
// const obj3 = {
//     z: 30,
//     __proto__: obj2
// }
// obj3.x = 1000;
// console.log(obj3.x);
// -----------------
//  7 step -------------
// const arr = new Array();
// const arr1 = []; //__proto__ = Array.prototype;
// const arr2 = []; //__proto__ = Array.prototype;
// const arr3 = []; //__proto__ = Array.prototype;
// -----------------
//  8 step -------------
// function Animal(weight, color, type) {
//     this.weight = weight;
//     this.color = color;
//     this.type = type;
// }
// Animal.prototype.run = function(speed) {
//     return `The ${this.type} runs at ${speed} speed`
// }
// function customNew(Constructor,weight,color,type){
//   const emptyObject =  Object.create(Constructor.prototype);
//   Constructor.call(emptyObject,weight,color,type);
//   return emptyObject;

// }

// const dog = customNew(Animal,'50kg','black','dog');

// const cat = customNew(Animal,'10kg','gray','cat')


// function foo(x){
//   this.x = x;
// }


// const obj1 = {

// }

// const obj2 = {

// }


// foo.call (obj1,10);
// foo.call (obj2,20);

// const warehouse = {
//   getObjectValues: function(){
//     const result = [];
//     for(let i in this){
//       if (i === 'getObjectValues') continue
//           result.push(this[i]);

//     }

//     return result;
//   }
// }


// const myCustomObject1 = {
//   x:10,
//   y:20
// }

// const myCustomObject2 = {
//   x:30,
//   y:50,
// }
// myCustomObject1.__proto__ = warehouse;
// myCustomObject2.__proto__ = warehouse;

// console.log(myCustomObject1.getObjectValues(),'myCustomObject1')
// console.log(myCustomObject2.getObjectValues(),'myCustomObject2')

// const arr = new Array();

// arr.push();

// arr.__proto__=Array.prototype;[]
// const obj = Object.create();
// console.log(obj);


// const dog = new Animal('50kg', 'black', 'dog'); //{weight: '50kg', color: 'black', type: 'dog'}
// const cat = new Animal('10kg', 'gray', 'cat'); //{weight: '10kg', color: 'gray', type: 'cat'}
// console.log(dog.run(20));
// console.log(cat.run(10));
// -----------------
// implement new keyword
// learn bind call apply
// class vs function
// TypeScript





// const arr = [10,20,30,40];
// const arr2 = ['JS','React']

// Array.prototype.customforEach = function(callback) {
//   for (let i = 0; i<globalThis.length; i++) {
//     callback(this[i],i,this)

//   }
// }


// arr.forEach((item,index,arr) => {
//   console.log(item,index,arr)
// })

//map
//filtr
//find
//indexof
//includes
//reverse
//implement anenq 



function Card(type,number,cvv,date){
     this.type = type;
     this.number = number;
     this.cvv = cvv;
     this.date = date;
     this.isActive = false;
    
}

Card.prototype.active = function(){
  this.isActive = true;

  alert(`Change Your card type is active`);
  return this;
}

Card.prototype.block = function(){
  this.isActive = false;

  alert(`Your card blocked`);
    return this;
}

//kpcrec prototypein(warehouse)
const platinum = new Card(
  'platinum',
  '4242 4242 4242 4242',
  '614',
  '07/26'
);

console.log(platinum,'platinum');




// type: 'platinum';
// cardNumber:'4242 4242 4242 4242',
// cvv : '614',

