// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "Naagraj"]


const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);


// Array methods

// myArr.push(9)
// myArr.push(7)
// myArr.pop()    // array ke last value ko remove karta hai


// myArr.unshift(10)   // is se starting mai value add hota hai  
// myArr.shift()  // starting ke value ko remove karta hai 


//  console.log(myArr.includes(4));
//  console.log(myArr.indexOf(19));
 
const newArry = myArr.join();


// console.log(myArr);
// console.log(typeof newArry);


// slice, splice 

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c" , myArr);
console.log(myn2);


