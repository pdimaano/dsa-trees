"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    // if (this === null) return;
    if (this.val === val) return this;

    if (this.left && this.val > val) {
      return this.left.findRecursively(val);
    } else if (this.right && this.val < val) {
      return this.right.findRecursively(val);
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if (this.left && this.val > val) {
      return this.left.insertRecursively(val);
    } else if (this.right && this.val < val) {
      return this.right.insertRecursively(val);
    }

    // TODO: clean up
    if (this.val > val && !this.left) {
      return (this.left = new Node(val));
    }
    if (this.val < val && !this.right) {
      return (this.right = new Node(val));
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (this === null) return [];
    return [
      this.val,
      ...(this.left ? this.left.dfsPreOrder() : []),
      ...(this.right ? this.right.dfsPreOrder() : []),
    ];
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (this === null) return [];
    return [
      ...(this.left ? this.left.dfsInOrder() : []),
      this.val,
      ...(this.right ? this.right.dfsInOrder() : []),
    ];
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (this === null) return []; // TODD: delete
    return [
      ...(this.left ? this.left.dfsPostOrder() : []),
      ...(this.right ? this.right.dfsPostOrder() : []),
      this.val,
    ];
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    let current = this.root;

    if (!current) {
      this.root = newNode;
      return this;
    }

    while (true) {
      if (!current.right && current.val < val) {
        current.right = newNode;
        break;
      } else if (!current.left && current.val > val) {
        current.left = newNode;
        break;
      }

      if (current.val > val) {
        current = current.left;
      } else if (current.val < val) {
        current = current.right;
      }
    }

    return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) return (this.root = new Node(val));
    return this.root.insertRecursively(val);
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      if (current.val < val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return [];
    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];
    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];
    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    if (!this.root) return [];
    const queue = [this.root]; // TODO: use LL
    const result = [];

    while (queue.length) {
      const node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor.
   *
   *      node = value
   *
   *
   *
   *            10
   *
   *        7       12
   *
   *      3   8         15
   *
   *
   *    node = 13
   *
   * */

  findSuccessorNode(node) {
    if (!this.root) return;
    let current = this.root;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}
}

module.exports = {
  BinarySearchTree,
  Node,
};
