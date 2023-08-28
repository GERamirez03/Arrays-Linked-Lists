/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("List is empty.");
    let currentNode = this.head;
    if (this.length === 1) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }
    while (currentNode.next) {
      if (currentNode.next === this.tail) {
        let oldTailVal = this.tail.val;
        currentNode.next = null;
        this.tail = currentNode;
        this.length -= 1;
        return oldTailVal;
      }
      currentNode = currentNode.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("List is empty.");
    if (this.length === 1) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    } else {
      let oldHead = this.head;
      let newHead = oldHead.next;
      oldHead.next = null;
      this.head = newHead;
      this.length -= 1;
      return oldHead.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error("Invalid index.");
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === idx) {
        return currentNode.val;
      } else {
        currentNode = currentNode.next;
        counter += 1;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) throw new Error("Invalid index.");
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === idx) {
        currentNode.val = val;
        return;
      } else {
        currentNode = currentNode.next;
        counter += 1;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) return this.unshift(val);
    else if (idx === this.length) return this.push(val);
    else if (idx > this.length || idx < 0) throw new Error("Invalid index.");

    let counter = 0;
    let newNode = new Node(val);
    let currentNode = this.head;

    while (currentNode.next) {
      if (counter + 1 === idx) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length += 1;
        return;
      } else {
        currentNode = currentNode.next;
        counter += 1;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) return this.pop();
    if (idx >= this.length || idx < 0) throw new Error("Invalid index.");

    let counter = 0;
    let currentNode = this.head;

    while (currentNode.next) {
      if (counter + 1 === idx) {
        let val = currentNode.next.val;
        currentNode.next = currentNode.next.next;
        return val;
      } else {
        currentNode = currentNode.next;
        counter += 1;
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0;
    let total = 0;
    let currentNode = this.head;
    while (currentNode) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    let average = total / this.length;
    return average;
  }
}

module.exports = LinkedList;
