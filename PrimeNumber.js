/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Prime Number
 */
//loop
 let n=parseInt(prompt("Enter a number: "))
flag=0;
//loop form 2 to n/2+1
for(let i=2;i<(n/2)+1;i++){
    //check divisible
    if(n%i==0){
        flag=1
        break
    }
}
//check flag
if(flag==1){
    alert("Not Prime")
}
else{
    alert("Prime")
}