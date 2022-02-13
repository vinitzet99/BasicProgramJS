/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Check Date between 20 March to 20 June
 */
//input
let day=parseInt(prompt("Enter Day: "))
let month=parseInt(prompt("Enter Month: "))
//check date
if ( day > 19  &&  month == 3  &&  day < 32 )
	alert (" Date between 20 March to 20 Jun")
else if ( day > 0  &&  month == 4  &&  day < 31 )
	alert (" Date between 20 March to 20 Jun")
else if ( day > 0  &&  month == 5  &&  day < 32 )
	alert( " Date between 20 March to 20 Jun")
else if ( day > 0  &&  month == 3  &&  day < 21 )
	alert (" Date between 20 March to 20 Jun")
else
	alert ("Date is not valid or not between 20 March to 20 Jun")
