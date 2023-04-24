// 1. Create a function called 'filterOddNumbers' that takes an array of numbers as an argument
// 2. Create an empty array called 'oddNumbers'
// 3. Loop through each number in the input array using a for loop
// 4. For each number, check if it is odd by using the modulus operator % to see if the remainder of the number divided by 2 is not equal to 0
// 5. If the number is odd, add it to the 'oddNumbers' array using the push method
// 6. After looping through all the numbers, check if the 'oddNumbers' array has only one element by checking its length property
// 7. If the 'oddNumbers' array has only one element, return the first element of the array using the bracket notation [0]
// 8. If the 'oddNumbers' array has more than one element, return the oddNumbers array itself.

function filterOddNumbers(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
      }
    }
    return oddNumbers.length === 1 ? oddNumbers[0] : oddNumbers;
  }
  
  const numbers = [70, 3]; // Enter numbers, separated by commas between the brackets
  console.log(filterOddNumbers(numbers)); // Output: [odd numbers]
