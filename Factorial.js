/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Find Factorial of a number
 */
//input
let n=parseInt(prompt("Enter a number: "))
let sum=1
//loop for factorial
for(let i=1;i<=n;i++){
    sum=sum*i
}
alert(n+" Factorial is: "+sum)