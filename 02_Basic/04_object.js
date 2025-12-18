// const tinderUser = new Object()      // singleton object 
const tinderUser = {}           // non-singleton object 

tinderUser.id = "1234abc"
tinderUser.name = "Riya"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "Riya@google.com",
    fullname: {
        userfullname: {
            firstname: "Navneet", 
            lastname: "Anand"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d" }


// const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1, 
        email: "R@gmail.com"
    } ,
    {
        id: 1, 
        email: "R@gmail.com"
    },
     {
        id: 1, 
        email: "R@gmail.com"
    } ,
    {
        id: 1, 
        email: "R@gmail.com"
    }
]


users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js in hindi", 
    price: "999",
    courseIsInsTructor: "Hitesh"
}

// course.courseIsInsTructor

const {courseIsInsTructor: instructor}  = course
console.log(instructor);


// const navbar = ({company}) => { 
// }         // object destructuring 
// navbar(company = "Navneet")


// {
// "name": "Hitesh",
//     "coursename": "Js is hindi", 
//     "price": "free"
// }

[
    {}, 
    {},
    {}
    
]