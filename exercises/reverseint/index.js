// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString().split('').reverse().join('');
  return parseInt(str) * Math.sign(n);
}
// function reverseInt(n) {
//   let str = n.toString().split('').reverse().join('');
//   return parseInt(str) * Math.sign(n);
// }

// function reverseInt(n) {
//   let rStr = n.toString().split('').reverse().join('');
//   return parseInt(rStr) * Math.sign(n);
// }

module.exports = reverseInt;

// function reverseInt(n) {
//   let number = n;
//   let negative = false;
//   if (n < 0) {
//     number = number * -1;
//     negative = true;
//   }

//   let str = number.toString();
//   let rStr = str.split('').reverse().join('');
//   if (negative) {
//     number = parseInt(rStr, 10) * -1;
//   }
//   else {
//     number = parseInt(rStr, 10);
//   }

//   return number;
// }
