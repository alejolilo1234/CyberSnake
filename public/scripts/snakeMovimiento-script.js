//Vamos a usar http://processingjs.org/
// o https://p5js.org/reference/

// Importamos las librerias
let { append, cons, first, isEmpty, isList, length, rest, map, forEach }  = functionalLight;

// Actualiza los atributos del objeto y retorna una copia profunda
function update(data, attribute) {
  return Object.assign({}, data, attribute);
}

//////////////////////// Mundo inicial
let Mundo = {}
////////////////////////
/**
 * Actualiza la serpiente. Creando una nuevo cabeza y removiendo la cola
 */
function moveSnake(snake, dir) {
  const head = first(snake);
  return cons({x: head.x + dir.x, y: head.y + dir.y}, snake.slice(0, length(snake) - 1));
  
}

//Para invertir direccion
function dir_inv(dir){
  return {x:-dir.x,y:-dir.y}
}

//Para obtener un numero entero aleatorio
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const dx = 15;
const dy = dx;


const Mundo_inicial={snake: [{ x: 4, y: 1 },{ x: 3, y: 1 },{ x: 2, y: 1 },{ x: 1, y:1 }], dir: {x: 0, y: 0}, food: {x:getRandomInt(2*dx,w_c-2*dx),y:getRandomInt(2*dy,h_c-2*dy)}, moved: 1,score:0, time:0, play:0};

//Variables para obtener los sonidos, por p5.sound solo se pueden usar variables
let gameOver_sound;
let food_sound;
//////////////////

/**
 * Esto se llama antes de iniciar el juego
 */
function setup() {
  frameRate(13);
  const canvas = createCanvas(w_c, h_c); 
  canvas.parent('canvas-div');
  background(0, 0, 0);
  Mundo = Mundo_inicial;

  //Esto carga los sonidos
  gameOver_sound=loadSound("./sounds/game_over_sound.mp3");
  food_sound=loadSound("./sounds/food_sound.mp3");

  //Esto baja el volumen de la musica
  gameOver_sound.setVolume(0.1);
  food_sound.setVolume(0.1);
}

//para darle un formato al numero
function numberFormat(num){
if(num<10) return "0"+num.toString();
else return num.toString();
}
//Funcion para control el formtato del tiempo

function timeFormat(raw_time){
    const horas   = Math.floor(raw_time / 3600);
    const minutos = Math.floor((raw_time - (horas * 3600)) / 60);
    const segundos = raw_time - (horas * 3600) - (minutos * 60);
    return numberFormat(minutos)+':'+numberFormat(segundos);
    // return numberFormat(horas)+':'+numberFormat(minutos)+':'+numberFormat(segundos);
}

// Pintar serpiente
function draw_Snake(snake){
  const head=first(snake);
  noStroke();
  fill(20, 253, 206);
  forEach(snake, s => {
    rect(s.x * dx, s.y * dy, dx, dy);
  });


  fill(10, 10, 20);
  circle((head.x+1/2)*dx,(head.y+1/2)*dy, dx/4);
}

//Pintar comida
function draw_Food(food){
  fill(255,0,0);
  circle(food.x, food.y,dx*0.7);
}

//Dibujar score
function draw_Score(score) {
  fill(20, 253, 206);
  textFont('VT323', 20);
  text("SCORE: " + score, 20, 370);
}

//Dibujar tiempo
function draw_Time(time) {
  fill(20, 253, 206);
  textFont('VT323', 20);
  text(timeFormat(time), 230, 370);
}

// Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar

function drawGame(Mundo){
  // background(10, 20, 50);
  background(12, 81, 40);
  draw_Food(Mundo.food);
  draw_Snake(Mundo.snake);
  draw_Score(Mundo.score);
  draw_Time(Math.floor(Mundo.time));
}


//choque con pared
function wall_crash(snake, dir){
 const head=first(snake);
 return (head.x == Math.floor((w_c/dx)-1)&& dir.x==1)||(head.x == 0 && dir.x== -1)||(head.y == Math.floor((h_c/dx)-1) && dir.y==1)||(head.y == 0 && dir.y== -1);
}

//Comio comida
function food_eaten(snake,food){
  const head=first(snake);
  return dx>=Math.floor(Math.sqrt(Math.pow((food.x-(head.x+1)*dx),2)+Math.pow((food.y-(head.y+1/2)*dy),2)));
}

//agrandar cola
function grow_up(snake){
 const tail=first(snake.slice(-1));
 return append(snake,{x:tail.x-1,y:tail.y});
}


//Sabe cuando se choca con el cuerpo
function body_crash(head,body,dir){
 const preview=first(body);

  if(isEmpty(body)){
   return false;
  }else if((((preview.x-head.x)==dir.x)&&((preview.y-head.y)==0))||(((preview.y-head.y)==dir.y)&&((preview.x-head.x)==0))){
   return true;
  }else{
   return body_crash(head,rest(body),dir);
 }
}



//Funcion para enviar info a la data base

function send_score(name,score,time,timeOnPage){
fetch('/api',{
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({
     name:name, 
     score:score,
     time:time,
     timeOnPage:timeOnPage})}
   );
 }




// Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
function onTic(Mundo){
  if(Mundo.play!=0){
    // console.log("y me moví");
   if(wall_crash(Mundo.snake,Mundo.dir)||body_crash(first(Mundo.snake),rest(Mundo.snake),Mundo.dir)){
      gameOver_sound.play(); //play game over sound
      dateNowLeave = Date.now();
      timeOnPage = ((dateNowLeave - dateNow)*(1/1000));

      Mundo.play = 1;
      const audio2 = document.getElementById("audio");
      audio2.pause();
      const restart2 = document.getElementById("restart");
      restart2.classList.add("hide");
      const gameOverModal = document.getElementById("gameOver");
      const scoreDisplay = document.getElementById("scoreDisplay");
      const submitButton = document.getElementById("submitButton");
      const nameOfUser = document.getElementById("nameOfUser");

      scoreDisplay.innerHTML = Mundo.score;
      gameOverModal.classList.remove("hide");
      gameOverModal.classList.add("show");
      submitButton.addEventListener('click', () => {
        send_score(nameOfUser.value,Mundo.score,Mundo.time,timeOnPage);
        location.reload();
      });
      // send_score(prompt('perdiste, tu puntaje fue de '+Mundo.score+ ' puntos. Ingresa tu nombre para guardar'),Mundo.score,Mundo.time,timeOnPage);

      // location.reload();
      
      // return update(Mundo,{snake: [{ x: 4, y: 1 },{ x: 3, y: 1 },{ x: 2, y: 1 },{ x: 1, y:1 }],dir: {x: 0, y: 0}, food:  {x:getRandomInt(2*dx,w_c-2*dx),y:getRandomInt(2*dy,h_c-2*dy)},moved: 1,score:0,time: 0});
      }
   else if(food_eaten(Mundo.snake,Mundo.food)){
     food_sound.play();// play eating sound
     return update(Mundo, {snake: grow_up(Mundo.snake),score:Mundo.score+100 ,food:{x:random(2*dx,w_c-2*dx),y:random(2*dy,h_c-2*dy)},time:Mundo.time+(deltaTime/1000)});}
   else if(Mundo.dir.x==0 && Mundo.dir.y==0 ){
     return update(Mundo,{moved:1,time:0});}
   else{
     return update(Mundo, {snake: moveSnake(Mundo.snake, Mundo.dir),moved:1,time:Mundo.time+(deltaTime/1000)});
   }
  }else return update(Mundo,Mundo);
}



//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
   return update(Mundo,{});
}

////Control de direccion a partir de teclas

function keyDirection(dir,keyCode){
 switch (keyCode) {
    case UP_ARROW:
      if(dir.y==1) return dir;
      else return {y: -1, x: 0};
      break;
    case DOWN_ARROW:
      if(dir.y==-1) return dir;
      else return {y: 1, x: 0};
      break;
    case LEFT_ARROW:
      if(dir.x==1) return  dir;
      else return {y: 0, x: -1};
      break;
    case RIGHT_ARROW:
      if(dir.x==-1) return  dir;
      else return {y: 0, x: 1};
      break;
    default:
      console.log(keyCode);
      return dir;
  }
}


/**
* Actualiza el mundo cada vez que se oprime una tecla. Retorna el nuevo stado del mundo
*/
function onKeyEvent (Mundo, keyCode) {
  // Cambiamos la dirección de la serpiente. Noten que no movemos la serpiente. Solo la dirección
  //console.log(keyCode);
  if(Mundo.moved==1){
  return update(Mundo,{dir:keyDirection(Mundo.dir, keyCode),moved:0});
  }else return update(Mundo,Mundo);
}

//Para escuchar el touch
function onTouchEvent (Mundo, keyCode) {
  // Cambiamos la dirección de la serpiente. Noten que no movemos la serpiente. Solo la dirección
 // console.log(keyCode);
  if(Mundo.moved==1){
  return update(Mundo,{dir:keyDirection(Mundo.dir, keyCode),moved:0});
  }else return update(Mundo,Mundo);
}