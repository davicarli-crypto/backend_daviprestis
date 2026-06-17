const readline = require('readline-sync')
const A = number(readline.question("fale um 1 número"))
const B = number(readline.question("fale o 2 número"))
function min(A, B){
  if(A < B){console.log(A)}
  else {console.log(B)}
}
