//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","rana"]

//console.log(myArr[0]);

//aray method

//myArr.push(6)
//myArr.pop()

//myArr.unshift(9)
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));


const newArray = myArr.join()

//console.log(myArr);
//console.log(typeof newArray);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);


console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);

//slice not take range value and not change in original array
//spice take range value and manipulate array