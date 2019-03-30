export const BinarySearchTree = (function() {
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  function insertNode(parentNode, newNode) {
    if (newNode.key < parentNode.key) {
      if (parentNode.left === null) {
        parentNode.left = newNode;
      } else {
        insertNode(parentNode.left, newNode);
      }
    } else {
      if (parentNode.right === null) {
        parentNode.right = newNode;
      } else {
        insertNode(parentNode.right, newNode);
      }
    }
  }
  function inOrderTraverse(node, callback) {
    if (node !== null) {
      // 子 父 子
      inOrderTraverse(node.left, callback);
      callback(node.key);
      inOrderTraverse(node.right, callback);
    }
  }
  function preOrderTraverse(node, callback) {
    if (node !== null) {
      // 父 子 子
      callback(node.key);
      preOrderTraverse(node.left, callback);
      preOrderTraverse(node.right, callback);
    }
  }
  function postOrderTraverse(node, callback) {
    if (node !== null) {
      // 子 子 父
      postOrderTraverse(node.left, callback);
      postOrderTraverse(node.right, callback);
      callback(node.key);
    }
  }
  function searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }
  function removeNode() {
    if (node === null) {
      //{2}
      return null;
    }
    if (key < node.key) {
      //{3}
      node.left = removeNode(node.left, key); //{4}
      return node; //{5}
    } else if (key > node.key) {
      //{6}
      node.right = removeNode(node.right, key); //{7}
      return node; //{8}
    } else {
      //键等于node.key
      //第一种情况——一个叶节点
      if (node.left === null && node.right === null) {
        //{9}
        node = null; //{10}
        return node; //{11}
      }
      //第二种情况——一个只有一个子节点的节点
      if (node.left === null) {
        //{12}
        node = node.right; //{13}
        return node; //{14}
      } else if (node.right === null) {
        //{15} 7
        node = node.left; //{16}
        return node; //{17}
      }
      //第三种情况——一个有两个子节点的节点 7
      var aux = findMinNode(node.right); //{18}
      node.key = aux.key; //{19}
      node.right = removeNode(node.right, aux.key); //{20}
      return node; //{21}
    }
  }
  let root = null;
  class BinarySearchTree {
    insert(key) {
      let node = new Node(key);
      if (root === null) {
        root = node;
      } else {
        insertNode(root, node);
      }
    }
    search(key) {
      return searchNode(root, key);
    }
    // 通过中序遍历方式遍历所有节点
    inOrderTraverse(callback) {
      inOrderTraverse(root, callback);
    }
    // 先序遍历
    preOrderTraverse(callback) {
      preOrderTraverse(root, callback);
    }
    // 后序遍历
    postOrderTraverse(callback) {
      postOrderTraverse(root, callback);
    }
    min() {
      let node = root;
      if (node) {
        while (node && node.left) {
          node = node.left;
        }
        return node.key;
      }
      return null;
    }
    max() {
      let node = root;
      if (node) {
        while (node && node.right) {
          node = node.right;
        }
        return node.key;
      }
      return null;
    }
    remove() {}
  }
  return BinarySearchTree;
})();
