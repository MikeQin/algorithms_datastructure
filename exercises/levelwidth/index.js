// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const count = [0];
  const arr = [root, 's'];
  
  while (arr.length > 1) {
    let node = arr.shift();
    if (node === 's') {
      arr.push('s');
      count.push(0);
    }
    else {
      arr.push(... node.children);
      count[count.length -1] ++;
    }
  }

  return count;
}

// function levelWidth(root) {
//   const counters = [0];
//   const arr = [root, 's'];

//   while(arr.length > 1) {
//     const node = arr.shift();
//     if (node === 's') {
//       arr.push('s');
//       counters.push(0);
//     }
//     else {
//       counters[counters.length -1] ++;
//       arr.push(... node.children);
//     }
//   }

//   return counters;
// }

module.exports = levelWidth;
