export let users = ['Sameer','Aayushi','Bhaskar','Kamalnath Sharma','Shanti Kumar Saha'];

export let routes = [
    ['Sameer','Aayushi'],
    ['Aayushi','Bhaskar'],
    ['Sameer','Kamalnath Sharma'],
    ['Kamalnath Sharma','Shanti Kumar Saha'],
    ['Shanti Kumar Saha','Bhaskar']
];

//The graph
export let adjList = new Map();

//Add Node
function AddNode(users) {
    adjList.set(users,[]);
}

//Add edge, undirected
function addEdge(origin,destination) {
    adjList.get(origin).push(destination);
    adjList.get(destination).push(origin);
}

//create graph
users.forEach(AddNode);
routes.forEach(route=> addEdge(...route));