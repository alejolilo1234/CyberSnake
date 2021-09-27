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