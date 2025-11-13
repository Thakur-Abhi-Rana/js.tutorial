function sayMyname(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
    
}

//sayMyname()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
    


function addTwoNumber(number1, number2){
    // let result = number1 + number2
    //   console.log("hitesh");
    // return result

   return number1 + number2
  
    
}
const result = addTwoNumber(3,5)
//console.log("result:",result);


function loginUserMessage(username = "sam"){
    if(!username){                              //!username same as username===undefined
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("abhishk"));
//console.log(loginUserMessage("abhiahek"));


function calculateCartPrice(val1, val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,400,700));

const user = {
    username: "abhushek",
    price:299
}

function handelObject(anyObject){


//console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handelObject(user)
handelObject({
    username: "sam",
    price: 384
})

const myNewArray = [100,200,500,700]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));
