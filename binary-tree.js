"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {
    if (!this) return 0;
    const right = this.minDepth.call(this.right);
    const left = this.minDepth.call(this.left);
    //! There is way to do where do not need call, avoid roundabout way
    //* First check to see if left exists, then call minDepth on left node
    //* Can then use code on lines 20 & 21 (check solution later)
    // const left = this.left.minDepth();
    // const right = this.right.minDepth();
    return 1 + Math.min(left, right);
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    if (!this) return 0;
    const left = this.maxDepth.call(this.left);
    const right = this.maxDepth.call(this.right);
    return 1 + Math.max(left, right);
    //* Check solution later
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if (!this.root) return 0;
    return this.root.minDepth();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;
    return this.root.maxDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    const queue = [this.root];
    let smallest = Infinity; //? Not getting reset?
    let result = null;

    while (queue.length > 0) {
      const node = queue.shift();
      if (node.val < smallest && node.val > lowerBound) {
        result = node.val;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. )
   *
   *
   *          gp      gp
   *
   *      p     p   p     p
   *
   *    c   c   c   c     c c
   *
   *
   * same level diff parents!
   *
   * */

  areCousins(node1, node2) {
    let p1; // parent one
    let p2; // parent two
    let lvl1; // level of node one
    let lvl2; // level of node two

    const queue = [[this.root, null, 0]];

    while (queue.length > 0) {
      const [node, parent, lvl] = queue.shift();
      if (node === node1) {
        p1 = parent;
        lvl1 = lvl;
      }
      if (node === node2) {
        p2 = parent;
        lvl2 = lvl;
      }
      if (node.left) queue.push([node.left, node, lvl + 1]);
      if (node.right) queue.push([node.right, node, lvl + 1]);
    }

    return lvl1 === lvl2 && p1 !== p2;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
