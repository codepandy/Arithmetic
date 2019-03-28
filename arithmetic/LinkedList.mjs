/**
 * 链表
 */
export const LinkedList = (function() {
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  let length = 0;
  let head = null;

  class LinkedList {
    append(element) {
      let node = new Node(element),
        current;
      if (head === null) {
        head = node;
      } else {
        current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      length++;
    }
    insert(element, position) {
      let node = new Node(element),
        current,
        previous;
      let index = 0;
      current = head;
      if (position >= 0 && position <= length) {
        if (position === 0) {
          head = node;
          head.next = current;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = node;
          node.next = current;
        }
        length++;
        return true;
      } else {
        return false;
      }
    }
    removeAt(position) {
      let index = 0;
      let current = head;
      let previous = null;
      if (position >= 0 && position <= length) {
        if (position === 0) {
          head = current.next;
        } else {
          while (index++ !== position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }

        length--;
        return true;
      } else {
        return false;
      }
    }
    remove() {}
    indexOf(element) {
      if (length === 0) {
        return -1;
      }
      let current = head;
      let index = -1;
      while (current) {
        index++;
        if (current.element === element) {
          return index;
        }
        current = current.next;
      }
      return -1;
    }
    isEmpty() {
      return length === 0 && !head;
    }
    size() {
      return length;
    }
    getHead() {
      return head;
    }
    toString() {
      let current = head;
      if (this.isEmpty()) {
        return "";
      }
      let eleArr = [];
      while (current) {
        eleArr.push(current.element);
        current = current.next;
      }
      return eleArr.join(",");
    }
    print() {
      let current = head;
      while (current) {
        console.log(current.element);
        current = current.next;
      }
    }
  }
  return LinkedList;
})();

/*
 * 双向链表
 */
export const DoubleLinkedList = (function() {
  function Node(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
  let length = 0;
  let head = null;

  class LinkedList {
    append(element) {
      let node = new Node(element),
        current;
      if (head === null) {
        head = node;
      } else {
        current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
        node.prev = current;
      }
      length++;
    }
    insert(element, position) {
      let node = new Node(element),
        current,
        previous;
      let index = 0;
      current = head;
      if (position >= 0 && position <= length) {
        if (position === 0) {
          head = node;
          head.next = current;
          if (current) {
            current.prev == head;
          }
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.prev = previous;
          previous.next = node;
          node.next = current;
          current.prev = node;
        }
        length++;
        return true;
      } else {
        return false;
      }
    }
    removeAt(position) {
      let index = 0;
      let current = head;
      let previous = null;
      if (position >= 0 && position <= length) {
        if (position === 0) {
          head = current.next;
          head.prev = null;
        } else {
          while (index++ !== position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
          current.next.prev = previous;
        }

        length--;
        return true;
      } else {
        return false;
      }
    }
    remove() {}
    indexOf(element) {
      if (length === 0) {
        return -1;
      }
      let current = head;
      let index = -1;
      while (current) {
        index++;
        if (current.element === element) {
          return index;
        }
        current = current.next;
      }
      return -1;
    }
    isEmpty() {
      return length === 0 && !head;
    }
    size() {
      return length;
    }
    getHead() {
      return head;
    }
    getNode(position) {
      let current = head;
      let index = 0;
      if (position >= 0 && position <= length) {
        while (current) {
          if (index++ === position) {
            return current;
          }
          current = current.next;
        }
      }
      return null;
    }
    toString() {
      let current = head;
      if (this.isEmpty()) {
        return "";
      }
      let eleArr = [];
      while (current) {
        eleArr.push(current.element);
        current = current.next;
      }
      return eleArr.join(",");
    }
    print() {
      let current = head;
      while (current) {
        console.log(current.element);
        current = current.next;
      }
    }
  }
  return LinkedList;
})();
