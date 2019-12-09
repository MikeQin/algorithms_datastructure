// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// Done
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Done
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Done
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

  // Done
  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    let last = null;
    while (node) {
      last = node;
      node = node.next;
    }
    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    this.length--;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      return this.head = null;
    }

    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
    this.length--;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }

    this.length++;
  }

  getAt(index) {
    if (index >= this.size() || index < 0) {
      console.log('index', index);
      console.log('Invalid index, max index', this.length - 1);
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {

    if (!this.head) {
      return;
    }

    if (index >= this.length || index < 0) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    const prev = this.getAt(index - 1);
    prev.next = prev.next.next;

    /*
    let prev = null;
    if ((index - 1) >= 0) {
      prev = this.getAt(index - 1);
    }

    let next = null;
    if ((index + 1) < this.length) {
      next = this.getAt(index + 1);
    }

    if (next) {
      if (prev) { // remove middle node
        prev.next = next;
      }
      else { // remove first node
        this.head = next;
      }
    }
    else if (prev) { // remove last node
      prev.next = null;
    }
    else { // only node
      this.head = null;
    }
    */

    this.length--;
  }

  insertAt(data, index) {

    if (index < 0) {
      return;
    }

    if (!this.head && index > 0) {
      return;
    }

    const node = new Node(data);

    if (!this.head && index === 0) {
      this.head = node;
      this.length++;
      return;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.length++;
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast(); // if index is too big
    node.next = prev.next;
    prev.next = node;

    this.length++;
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {

    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  /**
   * Custom Implementation Below
   */
  reverse() {

    if (!this.head) {
      return;
    }

    const stack = [];
    let node = this.head;
    while (node) {
      stack.push(node);
      node = node.next;
    }

    if (stack.length > 0) {
      node = stack.pop();
      this.head = node;
    }

    let counter = stack.length;
    while (counter > 0) {
      node.next = stack.pop();
      node = node.next;
      if (counter === 1) {
        node.next = null;
      }
      counter--;
    }

  }

  midpoint() {
    if (!this.head) {
      return;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  isCircular() {

  }

  print() {
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }

    console.log(arr);
  }
}

// var list = new LinkedList();
// list.insertLast(1);
// list.insertLast(2);
// list.insertLast(3);
// list.insertLast(0);
// list.insertLast(4);
// list.print();
// list.reverse();
// list.print();
// console.log(list);

module.exports = { Node, LinkedList };
