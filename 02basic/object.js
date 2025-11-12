//singleton

//object literals
//Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "abhishek",
    "full name":"abhishek kumar",
    [mySym]: "myKey1",
    age: 28,
    location: "mzn",
    email: "abhis@gmail.com",
    isLoggedIn: false,
 }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abhishek@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "abhishekmicro@gamil.com"
//console.log(JsUser);


JsUser.greeting= function(){
    console.log("hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
