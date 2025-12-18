// Singleton 
// object literals

// Object.create
 
const mySym = Symbol("key1")

const JsUser = {
    name: "Navneet", 
    "full name": "Navneet Anand",
    [mySym]: "mykey1",
    age: 18, 
    location: "Jaipur",
    email: "Navneetanand093@gmail.com",
    isLoggedIN: false, 
    LastLoginDays: ["Monday", "Saturday"]

}

//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(JsUser["full name"]);
//  console.log(typeof JsUser[mySym]);
 

 JsUser.email = "Navneet@chatgpt.com"
//  Object.freeze(JsUser)
JsUser.email = "Navneet@google.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello js user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello js user ${this.name}`);
}


console.log((JsUser.greeting()));
console.log((JsUser.greetingTwo()));
