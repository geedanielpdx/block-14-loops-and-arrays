// 1. Create a function called 'countVowelsAndConsonants' that takes a single input, which is the word you want to analyze
// 2. Initialize two variables, vowels and consonants, to 0
// 3. Use a loop to go through each character in the string. For each character:
// a. Check if it is a vowel (i.e., the letter "a", "e", "i", "o", or "u") by using the includes method on the string "aeiou"
// b. If the character is a vowel, increment the vowels variable by 1
// c. If the character is not a vowel, it is a consonant, so increment the consonants variable by 1
// 4. After the loop has finished iterating through all the characters in the string, 
//    output a message to the console that includes the original word, and the count of vowels and consonants in the word

function countVowelsAndConsonants(word) {
    let vowels = 0;
    let consonants = 0;
  
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if ("aeiou".includes(letter)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  
    console.log(`"${word}" has ${consonants} consonants and ${vowels} vowels`);
  }
  
  countVowelsAndConsonants("some word"); // Output: "some word" has X consonants and Y vowels
  