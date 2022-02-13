/**
 * Author: Vinit Kumar
 * Created on: 10-Feb-2022
 * Prime Factors
 */
// take input
let n = prompt('Enter a positive number: ')


// Print the number of 2s that divide n
while (n % 2 == 0)
{
    console.log(2);
    n = Math.floor(n/2);
}

for (let i = 3; i <= Math.sqrt(n); i = i + 2)
{
   // While i divides n, print i and divide n
    while (n % i == 0)
    {
        console.log(i);
        n = Math.floor(n/i);
    }
}
if (n > 2)
    console.log(n );
