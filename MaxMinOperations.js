/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Max Min Operation
 */
//input
let a=parseInt(prompt("Enter a: "))
let b=parseInt(prompt("Enter b: "))
let c=parseInt(prompt("Enter c: "))
let max=a+b*c
let min=a+b*c
//check max and min in operations
if(max<a%b+c){
    max=a%b+c
}
if(max<c+a/b){
    max=c+a/b
}
if(max<a*b+c){
    max=a*b/c
}
if(min>a%b+c){
    min=a%b+c
}
if(min>c+a/b){
    min=c+a/b
}
if(min>a*b+c){
    min=a*b/c
}
//output
alert("Max: "+max +" Min: "+min)