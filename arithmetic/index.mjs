import { divideBy2, baseConvert, hotPotato } from "./utils.mjs";
import { PriorityQueue } from "./Queue";
import { LinkedList } from "./LinkedList.mjs";

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

const linkedList = new LinkedList();
linkedList.append("first");
linkedList.append("second");
linkedList.append("third");
linkedList.append("forth");
linkedList.removeAt(0);
linkedList.print();
console.log(linkedList.indexOf("second"));
console.log(linkedList.indexOf("abc"));
console.log(linkedList.toString());
