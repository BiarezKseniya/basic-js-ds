const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    let temp = new ListNode(value);
    if (this.rear == null) {
      this.front = this.rear = temp;
      return;
    }
    this.rear.next = temp;
    this.rear = temp;
  }

  dequeue() {
    if (this.front == null)
      return null;
    let temp = this.front;
    this.front = this.front.next;
    if (this.front == null)
      this.rear = null;
    return temp.value;
  }
}

const q = new Queue
q.enqueue(7)

module.exports = {
  Queue
};
