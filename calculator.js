import { division } from "./operations/division.js";
import { multiplication } from "./operations/multiplication.js";
import { subtraction } from "./operations/subtraction.js";
import { sum } from "./operations/sum.js";
 

 const d = new Date(); 
  let date = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: "numeric",hour:"numeric",minute:"numeric","second":"numeric"});

 
console.log("Today is: ",  date,
 "The sum of 3 & 7 is: ",sum(3,7),
"The subtraction of 3 & 7 is: ",subtraction(3,7),
"The division of 3 & 7 is: ", division(3,7),
"The multiplication of 3 & 7 is: ",multiplication(3,7),)