// Task 1

// Given a sentence with multiple lowercase words separated by spaces,
//  write a Javascript code that finds the longest word in the sentence.
//  If there are multiple words of the same length, choose one that has
//  the highest number of vowels. Ignore any character in the sentence that is
//  not a letter or a space. Find the most efficient way to achieve this.

// function to get the length of the longest word in string,
// i am getting the length longest word in the sentence to be able to
// check through the array of which word matches the length of the longest word
const getLength = (string) => {
  const num = string
    .replace(/,/g, "")
    .split(" ")
    .reduce((prev, curr) => (curr.length > prev.length ? curr : prev)).length;

  return num;
};

//filtering words that has the same length as above
// checking for words that matches the length of the longest words to see if they are more than one

const filterLongestWords = (arr, num) => {
  const longestWords = arr.filter((word) => word.length === num);

  return longestWords;
};

//returning the word with the most vowel in an array
// looping through the longest if the array return
const mostVowels = (arr) => {
  let vowels = [..."aeiouAEIOU"];

  let bestCounter = 0;
  let bestWord;
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (vowels.includes(char)) {
        counter++;
      }
    }
    if (counter > bestCounter) {
      bestCounter = counter;
      bestWord = word;
    }
  }
  return bestWord;
};

const getLongestWords = (str) => {
  const arr = str.replace(/,/g, "").split(" ");
  const len = getLength(str);
  const newArr = filterLongestWords(arr, len);
  if (newArr.length === 1) {
    return newArr[0];
  } else if (newArr.length > 1) {
    const word = mostVowels(newArr);
    return word;
  }
};

///testing algorithim
let sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers, economomically, economicelyeee";

console.log(getLongestWords(sentence));
