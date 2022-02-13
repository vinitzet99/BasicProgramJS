/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Check a number is Palindrome and Prime
 */
/**
 * check is no is palindrome
 * reverse number with loop
 * compare original and reverse
 * return true/false
 * @param {*} number 
 */
function checkPalindrome(number){
    let number1=number;
    let sum=0;
    while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			sum = sum*10+rem;
		}

    if(sum==number1){
        return true;
    }
    else{
        return false;
    }
}
/**
 * check is number is prime
 * loop from-n/2+1
 * check divisibilty
 * return
 * @param {*} number 
 */
function checkPrime(number){
    let flag=0;
    for(let i=2;i<number/2+1;i++){
        if(number%i==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        return true;
    }
    else{
        return false;
    }
}
var number=parseInt(prompt("Enter a number: "));
let is_Prime=checkPrime(number);
let is_Palindrome=checkPalindrome(number);
if(is_Prime && is_Palindrome){
    alert(number+" is Prime Palindrome");
}
else if(is_Palindrome){
    alert(number+" is Palindrome");
}
else if(is_Prime){
    alert(number+" is Prime");
}
else{
    alert(number + " is not Prime and Palindrome");
}