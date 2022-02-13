/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Max Min in 5 Random 3 digit number
 */
start=0
max=0
min=100000
//generate 5 random 3 Digit Number
while ( start < 5 )
{
	let randomNum=Math.floor(Math.random() * 899) +100 ;
    console.log( "Random no is: "+randomNum)
    //compare max min
    if ( randomNum > max )
        max=randomNum
    if ( randomNum < min )
        min=randomNum
    start=((start + 1))
}
//output
console.log( "Greatest of number is: "+max )
console.log( "Smallest of number is: "+min)