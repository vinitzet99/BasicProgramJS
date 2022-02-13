/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Harmonic Series 1/1+1/2+1/3.......
 */
//input
let n=parseInt(prompt("Enter a number: "))
let sum=0
//loop
for(let i=1;i<=n;i++){
    sum=sum+1/i
}
//output
alert(n+" Harmonic number is: "+sum)