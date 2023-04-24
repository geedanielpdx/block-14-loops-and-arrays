// 1. Create an empty array called "numbers"
// 2. Loop from 1 to 100 and for each number:
//    a. Add the number to the end of the "numbers" array using the "push" method
// 3. Loop through each number in the "numbers" array:
//    a. If the number is divisible by 3 and 5, print "FizzBuzz"
//    b. If the number is only divisible by 3, print "Fizz"
//    c. If the number is only divisible by 5, print "Buzz"
//    d. Otherwise, print the number itself

const numbers = [];

// Fill the numbers array with values from 1 to 100
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

// Iterate over the numbers array and apply the FizzBuzz rules
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numbers[i] % 3 === 0) {
    console.log("Fizz");
  } else if (numbers[i] % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numbers[i]);
  }
}
