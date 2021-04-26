const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log("ALIVE!!!"));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

const database = new Datastore('./database.db');
database.loadDatabase();


function insertDB(name,score){
  database.insert({
     user:{
      name:name,
       score:score
     }
   });
 }



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