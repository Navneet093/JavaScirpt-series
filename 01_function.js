function sayMyName() {
  console.log("N");
  console.log("A");
  console.log("V");
  console.log("N");
  console.log("E");
  console.log("E");
  console.log("T");
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//  console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
 
    // let result = number1 + number2
    // return result 

    return number1 + number2 
}

const result = addTwoNumber(3, 9)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} Just logged in`
}

// console.log(loginUserMessage("Navneet"))
// console.log(loginUserMessage())




function calculateCartPrice(val1, val2, ...num1) {
return num1
}

// console.log(calculateCartPrice(200, 400, 500, 600));


const user = {
    username: "Navneet", 
    price: 199
}
function handalObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handalObject(user)
handalObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600] 

function returnSecondValue(getArray){
return getArray[1]
}

console.log(returnSecondValue([200, 400, 100, 600] ));
