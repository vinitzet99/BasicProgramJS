/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Leap Year
 */
//input
let year=prompt("Enter a year")
//check if leap year and output
if ((year%4) == 0 )
    if ((year%100) != 0 )
        alert( year +" is leap year.")
    else if ((year%400) == 0 )
        alert( year +" is leap year.")
    else
        alert( year +" is not leap year.")
else
        alert( year +" is not leap year.")
