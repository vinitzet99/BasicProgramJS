/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Prime Number for Range
 */
//input
let start=parseInt(prompt("Enter start number"))
let end=parseInt(prompt("Enter end number"))
//loop for range
for(let j=start;j<=end;j++){
    flag=0;
    //loop from 2 to j/2+1
    for(let i=2;i<(j/2)+1;i++){
        //check divisiblity
        if(j%i==0){
            flag=1
            break
        }
    }
    //check flag
    if(flag==0){
        console.log(j)
    }
}