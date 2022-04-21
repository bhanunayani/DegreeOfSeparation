const findAllDegree = (u, v, adj) => {
    const degrees = [];
  
    function findAllPath(u, v, adj) {
      let visited = new Array(adj.length).fill(false);
      let path = [];
      path.push(u);
      searchDFS(u, v, adj, visited, path);
    }
  
    function searchDFS(u, v, adj, visited, path) {
      visited[u] = true;
      if (u === v) {
        degrees.push([...path]);
      } else {
        for (let i = 0; i < adj.get(u).length; i++) {
          const y = adj.get(u)[i];
          if (!visited[y]) {
            visited[y] = true;
            path.push(y);
            searchDFS(y, v, adj, visited, path);
            path.pop();
          }
        }
      }
      visited[u] = false;
    }
  
    findAllPath(u, v, adj);
  
    return degrees;
 };
  
export default findAllDegree;