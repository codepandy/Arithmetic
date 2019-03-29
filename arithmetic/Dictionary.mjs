export const Dictionary = (function() {
  const items = {};
  class Dictionary {
    set(key, value) {
      if (!this.has(key)) {
        items[key] = value;
        return true;
      }
      return false;
    }
    get(key) {
      return this.has(key) ? items[key] : undefined;
    }
    delete(key) {
      if (this.has(key)) {
        delete items[key];
        return true;
      }
      return false;
    }
    has(key) {
      return items.hasOwnProperty(key);
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
  return Dictionary;
})();
