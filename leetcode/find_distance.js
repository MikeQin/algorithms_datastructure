/*
Given a string. Find distance of all characters from a target 
character. For example, “Google”, target character= ‘g’, 
then result will be [0,1,1,0,1,2]
*/

class Char {

  constructor(char, index, target) {
    this.isTarget = char.toLowerCase() === target.toLowerCase() ? true : false;
    this.index = index;
    this.char = char;
  }

  distance(targetIndex) {
    if (this.isTarget) {
      return 0;
    }
    else {
      return targetIndex - this.index;
    }
  }
}

function findDistance(str, target) {
  const map = {};
  let index = 0;
  for (let letter of str) {
    const char = new Char(letter, index, target);
    map[char.char] = char;
    index++;
  }
  console.log(map);
}

const str = 'Google';
const target = 'g';

findDistance(str, target);