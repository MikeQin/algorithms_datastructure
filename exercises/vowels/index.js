// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matchArr = str.match(/[aeiou]/gi);
  return matchArr ? matchArr.length : 0;
}
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

// function vowels(str) {
//   let count = 0;
//   const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

//   for(let char of str.toLowerCase()) {
//     if (vowelsArr.includes(char)) {
//       count ++;
//     }
//   }

//   return count;
// }

module.exports = vowels;
