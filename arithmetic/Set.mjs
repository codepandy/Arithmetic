export const Set = (function() {
  const items = {};
  class Set {
    add(value) {
      if (!this.has(value)) {
        items[value] = value;
        return true;
      }
      return false;
    }
    delete(value) {
      if (this.has(value)) {
        delete items[vlaue];
        return true;
      }
      return false;
    }
    has(value) {
      return items.hasOwnProperty(value);
    }
    clear() {
      items = {};
    }
    size() {
      return Object.keys(items).length;
    }
    values() {
      const result = [];
      for (let item of items) {
        result.push(item);
      }
      return result;
    }
  }
  return Set;
})();
