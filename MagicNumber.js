/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Magic Number
 */
alert("Think a number between 1-100.")
//varaible
let mn=1;
let mx=100;
let mid=0;
let E='E';
let Q='Q';
let G='G';
let L='L';
//loop
while(true){
	//mid tearm
	let l=mx-mn
	mid=parseInt(l/2+mn);
	//input
	let inp=prompt("Is number less than (Enter L), greater than (Enter G), equal to (Enter E) to "+mid+". Enter Q to quit:");
	//check input and output
	if (inp == L){
		alert("Your number is less than " +mid);
		mx=mid;	
    }
	else if (inp == G){	
		alert("Your number is more than "+ mid);
		mn=mid;
    }	
	else if (inp == E){
		alert("We found your number. Your number is "+mid);
		break;
    }
	else if (inp == Q){
		alert("You quitted.");
        break;
    }
	else{
		alert("Invalid Input");
    }
}
