// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const reducer = (accum, curr) => curr + accum;
  return str.split('').reduce(reducer, '');
}
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
// }