/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
  constructor(val, node = null) {
    this.val = val;
    if (node !== null) {
      this.next = node;
    }
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const sum = getNumber(l1) + getNumber(l2);
  console.log('sum', sum);
  const node = createListNode(sum.toString(), true);
  return node;
}

function createListNode(number = '', reverse = false) {
  let strArr = number.split('');
  if (reverse) {
    strArr = strArr.reverse();
  }

  let node;
  let headNode;
  for (let s of strArr) {
    if (node) { // node not null
      node.next = new ListNode(Number(s));
      node = node.next;
    }
    else { // node is null
      node = new ListNode(Number(s));
      headNode = node;
    }
  }

  return headNode;
}

function getNumber(listNode) {
  let node = listNode;
  const strArr = [];

  while (node) {
    strArr.unshift(node.val.toString());
    node = node.next;
  }

  console.log('getNumber', (strArr.join('')));
  console.log('getNumber', Number(strArr.join('')));

  return Number(strArr.join(''));
}

const l1 = createListNode('1000000090123456789012345678901', true);
//const l1 = createListNode(342, true);
const l2 = createListNode('465', true);
console.log(l1);
console.log(l2);
console.log(addTwoNumbers(l1, l2));

//var n = parseFloat('1000000000000000000000000000001').toLocaleString("en-US", { useGrouping: false });
//console.log('n:', n);
