//json spread operator
let arr = [1,2,3];
let x = ["pat","bat","cat"];
let all=[...arr,...x];

let jason = [
  {
    name: "Dude",
    age:45,
    dob:8/27/1973,
  },
  {
    name: "dudette",
    age:25,
    dob:8/27/1993,
  },
];

console.log(all);
console.log(...jason);
console.log(jason);
console.log(jason.slice());