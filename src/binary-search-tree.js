const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      let currentNode = this.rootNode;
      while (currentNode) {
        if (newNode.data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

remove(data) {
  this.rootNode = this._removeNode(this.rootNode, data);
}

// help function

_removeNode(node, data) {
  if (!node) return null;

  if (data < node.data) {
    node.left = this._removeNode(node.left, data);
    return node;
  } else if (data > node.data) {
    node.right = this._removeNode(node.right, data);
    return node;
  } else {
    if (!node.left && !node.right) return null;

    if (!node.left) return node.right;

    if (!node.right) return node.left;

    let rightMin = node.right;
    while (rightMin.left) rightMin = rightMin.left;

    node.data = rightMin.data;

    node.right = this._removeNode(node.right, rightMin.data);

    return node;
  }
}

min() {
  let currentNode = this.rootNode;
  while (currentNode && currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode ? currentNode.data : null;
}

max() {
  let currentNode = this.rootNode;
  while (currentNode && currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode ? currentNode.data : null;
}
}

module.exports = {
  BinarySearchTree
};