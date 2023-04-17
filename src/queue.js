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
class Queue {

  constructor(key) {
    this.key = key;
    this.next = null;
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(key) {
    let front = null;
    let rear = null;
    let temp = new Queue(key);
    if (rear == null) {
      front = rear = temp;
      return;
    }
    rear.next = temp;
    rear = temp;
  }

  dequeue() {
    let front = null;
    let rear = null;
    if (front == null)
      return;

    let temp = front;
    front = front.next;

    if (front == null)
      rear = null;
  }
}

module.exports = {
  Queue
};
