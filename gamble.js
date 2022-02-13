/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Gamble roblem
 */
//variables
let amount=100
let won=0
let lost=0
let total=0
//loop tillwin or loose
while ( amount != 0 && amount != 200 )
{
	//random generate
	let toss = Math.floor(Math.random() * 10) % 2;
	//won
	if (toss){
		won=won+1;
        amount=amount+1;
	}
	//loose
	else{
		lost=lost+1;
		amount=amount-1;
    }
	total=total+1;
}
//print output
if (amount == 200 )
	console.log("Your amount is "+amount+" after "+won +" wins in "+total);
else
	console.log("Your amount is "+amount+" after "+lost +" looses in "+total);
