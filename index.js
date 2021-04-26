const express = require('express');
const app = express();

app.listen(3000, () => console.log("ALIVE!!!"));
app.use(express.static('public'));

// let name = prompt("Tu nombre: ");
// let score = prompt("El puntaje: ");

// async function getDatabase(){
//   const response = await fetch("./database.db");
//   const data = await response.json();
//   const divElement = document.getElementById("namesAndScores");
//   const createUser = document.createElement('p');
//   const createScore = document.createElement('span');
//   createUser.innerText = data.user.name + " ";
//   createScore.innerText = "(" + data.user.score + ")";
//   createUser.append(createScore);
//   // for(let i = 0; i < 5; i++){
//     divElement.append(createUser);
//   // }
// }

// getDatabase().catch(error => {
//   console.error(error);
// });