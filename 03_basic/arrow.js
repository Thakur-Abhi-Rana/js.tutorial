

const user = {
    username: "abhishek",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "abhi"
// user.welcomeMessage()

//console.log(this);

//  function(){
//     let username = "abhishek"
//     console.log(this.username);
    
// }


const chai = () => {
    let username = "abhishek"
    console.log(this);
    
}
//chai ()


// const addTwo = (num1,num2) =>{
//     return num1 + num2                           //**********explicit return */
// }


//const addTwo = (num1,num2) => num1 + num2              //**************implicit return */

const addTwo = (num1,num2) => ({username: "abhishek"})

console.log(addTwo(3,4));


const myArray = [2,3,54,6]

//myArray.forEach()