//var c = 300
let a = 300

if (true) {
let a = 10
const b = 30
//console.log("INNER:",a);
}
//console.log(a);

//console.log(b);


function one(){
    const userName = "abhishek"

    function two(){
        const website = "youtube"
        console.log(userName);
        
    }
    //console.log(website);
    two()
}
//one()


if(true){
    const userName = "abhishek"
    if(userName==="abhishek"){
        const website = " youtube"
        //console.log(userName + website);
        
    }
    //console.log(website);
    
}
//console.log(userName);


//********************** intresting*********************


function addOne(num){
    return num + 1
}
console.log(addOne(7))

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(8))