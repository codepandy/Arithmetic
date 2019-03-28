export const Queue = (function() {
  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(this, []);
    }
    enqueue(value) {
      let queue = items.get(this);
      queue.push(value);
    }
    dequeue() {
      let queue = items.get(this);
      return queue.shift();
    }
    front() {
      let queue = items.get(this);
      return queue[0];
    }
    isEmpty() {
      let queue = items.get(this);
      return queue.length === 0;
    }
    size() {
      let queue = items.get(this);
      return queue.length;
    }
    print() {
      let queue = items.get(this);
      console.log(queue.toString());
    }
  }
  return Queue;
})();

export const PriorityQueue = (function() {
  const items = new WeakMap();
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  class PriorityQueue {
    constructor() {
      items.set(this, []);
    }
    enqueue(value, priority) {
      let element = new QueueElement(value, priority);
      let queue = items.get(this);
      let isAdded = false;

      for (let i = 0, l = queue.length; i < l; i++) {
        if (priority < queue[i].priority) {
          isAdded = true;
          queue.splice(i, 0, element);
          break;
        }
      }
      if (!isAdded) {
        queue.push(element);
      }
    }
    dequeue() {
      let queue = items.get(this);
      return queue.shift();
    }
    front() {
      let queue = items.get(this);
      return queue[0];
    }
    isEmpty() {
      let queue = items.get(this);
      return queue.length === 0;
    }
    size() {
      let queue = items.get(this);
      return queue.length;
    }
    print() {
      let queue = items.get(this);
      queue.forEach(function(item) {
        console.log(JSON.stringify(item));
      });
    }
  }
  return PriorityQueue;
})();
