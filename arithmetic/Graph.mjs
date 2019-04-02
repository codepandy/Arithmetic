import { Dictionary } from "./Dictionary.mjs";
export const Graph = (function() {
  let vertices = [];
  let adjList = new Dictionary();
  class Graph {
    // 添加顶点
    addVertex(v) {
      vertices.push(v);
      adjList.set(v, []);
    }
    // 添加边
    addEdge(v, w) {
      adjList.get(v).push(w);
      adjList.get(w).push(v);
    }
    toString() {
      var s = "";
      for (var i = 0; i < vertices.length; i++) {
        s += vertices[i] + " -> ";
        var neighbors = adjList.get(vertices[i]);
        for (var j = 0; j < neighbors.length; j++) {
          s += neighbors[j] + " ";
        }
        s += "\n";
      }
      return s;
    }
  }
  return Graph;
})();
