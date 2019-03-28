import { Stack } from "./Stack.mjs";
import { Queue } from "./Queue.mjs";

/*
 * stack's demo
 * convert decimal to binary
 */
export function divideBy2(decNumber) {
  const remStack = new Stack();
  let rem;
  let binaryString = [];

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  //join the binary
  while (!remStack.isEmpty()) {
    binaryString.push(remStack.pop());
  }
  return binaryString.join("");
}

/*
 * stack's demo
 * convert decimal to other bases 
 */
export function baseConvert(decNumber, base) {
  const remStack = new Stack();
  let rem;
  let binaryString = [];
  // 进制的基数
  const digits = "0123456789ABCDEF";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  //join the binary
  while (!remStack.isEmpty()) {
    binaryString.push(digits[remStack.pop()]);
  }
  return binaryString.join("");
}

/*
 * 击鼓传花
 */
export function hotPotato(names, num) {
  const queue = new Queue();
  for (let i = 0, l = names.length; i < l; i++) {
    queue.enqueue(names[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      count++;
      // 队列是先进先出，所以把要排除的人之前的人都循环放到队列的最后。
      queue.enqueue(queue.dequeue());
    }
    const del = queue.dequeue();
    console.log(`${del}:在击鼓传花游戏中被淘汰。`);
  }

  return queue.dequeue();
  //let names = ['John','Jack','Camila','Ingrid','Carl'];let winner = hotPotato(names, 7);console.log('The winner is: ' + winner);
}
