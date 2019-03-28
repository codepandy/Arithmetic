export const Stack = (function() {
  const items = new WeakMap();
  class Stack {
    constructor() {
      items.set(this, []);
    }
    push(value) {
      let stack = items.get(this);
      stack.push(value);
    }
    pop() {
      let stack = items.get(this);
      return stack.pop();
    }
    isEmpty() {
      let stack = items.get(this);
      return stack.length === 0;
    }
    size() {
      let stack = items.get(this);
      return stack.length;
    }
    print() {
      let stack = items.get(this);
      console.log(stack.toString());
    }
  }
  return Stack;
})();
//module.exports.Stack = Stack;
