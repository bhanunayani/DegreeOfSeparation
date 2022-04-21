import {users, routes, adjList} from '../store/data';

export const addNewUser = (user) => {
    try {
        localStorage.clear();
        let hasUsers = JSON.parse(localStorage.getItem('usersInLocalStorage'));
        if(hasUsers !== null && hasUsers.length > users.length) {
            let AllUsers = lowercaseUsers(hasUsers);
            // alert('all',AllUsers)
            if(AllUsers.includes(user)) {
                return 'error1';
            }
            console.log(hasUsers)
            hasUsers.push(user);
            let getAdjList = localStorage.getItem('adjListInLocalStorage');
            getAdjList.set(user,[]);
            localStorage.setItem('usersInLocalStorage',hasUsers);
            return 'success1';
        } 
        else {
            let AllUsers = lowercaseUsers(users);
            // alert(AllUsers);
            if(AllUsers.includes(user)) {
                return 'error2';
            }
            users.push(user);
            localStorage.setItem('usersInLocalStorage',JSON.stringify(users));

            adjList.set(user,[]);

            // console.log(adjList);
            let str = '';
            for(const i of adjList) {
                str += i;
                str += ';';
                // for(const j of i) {
                //     console.log(j);
                // }
            }
            // for(let i=0;i<adjList.length;i++) {
            //     // for(let j=0;j<adjList[i].length;i++) {
            //         str = str+adjList[i];
            //     // }
            //     str = str+';';
            // }

            // console.log(str);

            localStorage.setItem('adjListInLocalStorage',JSON.stringify(str));

            let ar = JSON.parse(localStorage.getItem('adjListInLocalStorage'));
            console.log(ar);

            return 'success2';
        }
    }
    catch (e) {
        console.log(e);
    }
};

// const covertToAdj=(str,userList)=>{
//     let adj = new Map();
//     userList.forEach(AddNode);
// }

// function AddNode(users) {
//     adjList.set(users,[]);
// }

const lowercaseUsers = (arr) => { 
 return arr.map(element => {
    return element.toLowerCase();
  });
}

export const sample=()=> {
    console.log(users, routes, adjList);
}

export const newRelationship = (user1, user2) => {
    let rel = JSON.parse(localStorage.getItem('adjListInLocalStorage'));
    if(rel !== null) {

    }
    else {

    }
    //   const user1Index = users.findIndex((user) => user.name === user1);
    //   const user2Index = users.findIndex((user) => user.name === user2);
    //   const findRelation = graph[user1Index].find(
    //     (uindex) => uindex === user2Index
    //   );
    //   if (findRelation) {
    //     setAlert({
    //       hasAlert: true,
    //       variant: 'danger',
    //       description: `'${user1}' is already a Friend of '${user2}' !! 😅`,
    //     });
    //     return;
    //   }
    //   setGraph((prev) => {
    //     const prevGraph = [...prev];
    //     prevGraph[user1Index].push(user2Index);
    //     return prevGraph;
    //   });
    //   setAlert({
    //     hasAlert: true,
    //     variant: 'success',
    //     description: `'${user1}' is now a Friend of '${user2}' !! 🤗`,
    //   });
};
  