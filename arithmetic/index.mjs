import { divideBy2, baseConvert, hotPotato } from "./utils.mjs";
import { PriorityQueue } from "./Queue";
import { LinkedList, DoubleLinkedList } from "./LinkedList.mjs";
import { Set } from "./Set.mjs";
import { BinarySearchTree } from "./BinarySearchTree.mjs";

console.log("*************************** start ***************************");
// const num = 33;
// console.log(divideBy2(num));
// console.log(baseConvert(num, 2));
// console.log(baseConvert(num, 8));
// console.log(baseConvert(num, 10));
// console.log(baseConvert(num, 16));
// console.log(baseConvert(num, 32));

// const queue = new PriorityQueue();
// queue.enqueue("张三", 3);
// queue.enqueue("李四", 3);
// queue.enqueue("赵二", 2);
// queue.enqueue("王一", 1);
// queue.print();

// let names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
// let winner = hotPotato(names, 7);
// console.log("The winner is: " + winner);

// const linkedList = new LinkedList();
// linkedList.append("first");
// linkedList.append("second");
// linkedList.append("third");
// linkedList.append("forth");
// linkedList.removeAt(0);
// linkedList.print();
// console.log(linkedList.indexOf("second"));
// console.log(linkedList.indexOf("abc"));
// console.log(linkedList.toString());

// //双向链表测试
// const linkedList = new DoubleLinkedList();
// linkedList.append("first");
// linkedList.append("second");
// linkedList.append("third");
// linkedList.append("forth");
// const current = linkedList.getNode(1);
// console.log(`previous:${current.prev.element}`);
// console.log(`current:${current.element}`);
// console.log(`next:${current.next.element}`);

// const list = new Set();
// list.add("张三");
// list.add("李四");
// list.add("王一");
// list.add("赵二");
// console.log(`赵二${list.has("赵二") ? "在" : "不在"}里面`);
// console.log(`赵六${list.has("赵六") ? "在" : "不在"}里面`);

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
// tree.inOrderTraverse(function(key) {
//   console.log(key);
// });
// tree.preOrderTraverse(function(key) {
//   console.log(`pre ${key}`);
// });
// tree.postOrderTraverse(function(key) {
//   console.log(`post ${key}`);
// });
console.log(`5${tree.search(5) ? "在" : "不在"}树中。`);
console.log(`16${tree.search(16) ? "在" : "不在"}树中。`);
