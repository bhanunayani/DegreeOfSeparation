import findAllDegree from "../utils/dfs";

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


//adding new user
export const addNewUser = (user) => {
    let AllUsers = lowercaseUsers(users);
    if(AllUsers.includes(user)) {
        return 'username already exists, please use new username';
    }
    users.push(user);
    console.log(users)
    adjList.set(user,[]);
    return 'success';
};

const lowercaseUsers = (arr) => { 
 return arr.map(element => {
    return element.toLowerCase();
  });
}

export const newRelationship = (user1, user2) => {
    if(adjList.get(user1).includes(user2)) {
        return 'users relationship already exists';
    }
    else {
        addEdge(user1,user2);
        return "success"
    }
};

export const findMatch=(u1,u2)=>{
    return findAllDegree(u1,u2,adjList);
}