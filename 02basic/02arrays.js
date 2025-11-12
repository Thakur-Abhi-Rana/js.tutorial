const superHeros = ["marvel","thor","captain"]
const powerHeros = ["spiderman","shaktiman","superman"]

//superHeros.push(powerHeros)
//console.log(superHeros);
//console.log(superHeros[3][1]);

//console.log(superHeros.concat(powerHeros));

const allHeros = [...superHeros,...powerHeros]
//console.log(allHeros);

const anotherArray = [1,2,3,[1,5,7,[4,6]],3,4]
const realAnotherArray = anotherArray.flat(Infinity)
//console.log(realAnotherArray);

console.log(Array.isArray("abhishek"));
console.log(Array.from("abhishek"));

console.log(Array.from({name:"abhishek"}));//intresting


let score1 = 100
let score2 = 647
let score3 = 700
console.log(Array.of(score1,score2,score3));
