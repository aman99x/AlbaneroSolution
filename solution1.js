/*Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
formed by reversing the digits of 'x' without using any built-in methods for reversal. After
reversing the digits, determine whether the resulting number has any prime factors. If it does
have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
*/

// solution

function reverseAndCheckPrimeFactors(x) {
    function reverseInteger(num) {
      let reversed = 0;
      while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
      }
      return reversed;
    }
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    }
    const reversedX = reverseInteger(x);
  
    const primeFactors = [];
    let num = reversedX;
    for (let i = 2; i <= num; i++) {
      while (num % i === 0 && isPrime(i)) {
        primeFactors.push(i);
        num /= i;
      }
    }
    if (primeFactors.length > 0) {
      return 'Yes-' + primeFactors;
    } else {
      return 'No';
    }
  }
  
  // example
  console.log(reverseAndCheckPrimeFactors(123));  
  console.log(reverseAndCheckPrimeFactors(1500)); 
  console.log(reverseAndCheckPrimeFactors(1000)); 
