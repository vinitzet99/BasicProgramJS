/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Week Digit to Days
 */
//input
let day=prompt("Enter a digit: ")
//switch for digit
switch (day) {
    // For day 1
    case "1":
      alert("Sunday ");
      break;

    // For day 2
    case "2":
      alert("Monday ");
      break;

    // For day 3
    case "3":
      alert("Tuesday ");
      break;

    // For day 4
    case "4":
      alert("Wednesday ");
      break;

    // For day 5
    case "5":
      alert("Thrusday ");
      break;

    // For day 6
    case "6":
      alert("Friday ");
      break;

    // For day 7
    case "7":
      alert("Saturday ");
      break;

    //invalid
    default:
        alert("Invalid")
}