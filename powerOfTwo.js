/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Power of Two till n or 256
 */
//input
var n=parseInt(prompt("Enter a number: "));
let i=0;
//loop
while(Math.pow(2,i)<=256 && i<=n){
    console.log("2 pow "+i+" is "+Math.pow(2,i))
    i++;
}