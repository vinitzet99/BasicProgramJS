/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Convert Temperature
 */
function celciusToFahrenheit(temp){
    return ((temp*9/5)+32);
}

function fahrenheitToCelcius(temp){
    return ((temp-32)*5/9);
}

var option=prompt("Choose \n1. Celcius to Fahrenheit \n2. Fahrenheit to Celcius");
var temp=parseInt(prompt("Enter the Temperature"));
switch(option){
    case '1':
        temp=celciusToFahrenheit(temp);
        alert("Temperature in Fahrenheit: " + temp);
        break;
    case '2':
        temp=fahrenheitToCelcius(temp);
        alert("Temperature in Celcius: " + temp);
        break;
    default:
        window.prompt("Invalid Input");
}
