const express = require('express');
const Datastore = require('nedb');
const database = new Datastore('./database.db');
database.loadDatabase();

const app = express();
app.listen(3000, () => console.log("ALIVE!!!"));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));


app.post('/api', (request,response) => {
  const user = request.body;
  
  if(user.name!=null){
    // console.log(user);
    if(user.name=='') insertDB("N/N",user.score,user.time,user.timeOnPage);
    else insertDB(user.name,user.score,user.time,user.timeOnPage);
  return;
  }else{
    response.end();
    return;
  }
});



app.get('/api', (request,response) => {
  database.find({}).sort({ score:-1 }).exec((err, data)=>{
    if(err){
      response.end();
      return;
    }else{
      // console.log('passing data');
      response.json(data);
    } 
  });

});

function insertDB(nombre,puntaje,time,timeOnPage){
  database.insert({
      name:nombre,
      score:puntaje,
      time:time,
      timeOnPage:timeOnPage
    }
  );
}




// async function getDatabase(){
//   const response = await fetch('/api');
//   const data = await response.json();
//    const divElement = document.getElementById("namesAndScores");

//   for(item of data){
//   const createUser = document.createElement('p');
//   const createScore = document.createElement('span');
//   createUser.innerText = item.name + " ";
//   createScore.innerText = "(" + item.score + ")";
//   createUser.append(createScore);
//   divElement.append(createUser);
//   }
//   
//   
// }

// getDatabase().catch(error => {
//   console.error(error);
// });