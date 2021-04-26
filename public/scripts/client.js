// const data = {
//   developers: {
//     name: "Juan Murillo"
//   },
//   {
//     name: "Jhon Abril"
//   }
// };

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//     },
//   body : JSON.stringify(data);
// }

// fetch("/api", options);




async function getDatabase(){
  const response = await fetch('/api');
  const data = await response.json();
  const divElement = document.getElementById("namesAndScores");

  for(item of data){
    const createUser = document.createElement('span');
    createUser.classList.add("userPlusScore");
    const createScore = document.createElement('span');
    createUser.innerText = item.name + " ";
    createScore.innerText = "(" + item.score + ")";
    createUser.append(createScore);
    divElement.append(createUser);
    // const createUser = document.createElement('p');
    // const createScore = document.createElement('span');
    // createUser.innerText = item.user.name + " ";
    // createScore.innerText = "(" + item.user.score + ")";
    // createUser.append(createScore);
    // divElement.append(createUser);
   } 
}

getDatabase()
// .catch(error => {
//   console.error(error);
// });  
 
//   OK