//Canvas size
const w_c=500;
const h_c=400;
///////////

//Cuadros to touch
const UP_S={x: w_c/4,y:0,dx: w_c/2,dy:h_c/3};
const DOWN_S={x: (w_c/4),y:(2*h_c)/3,dx:w_c/2,dy:h_c/3};
const LEFT_S={x: 0,y:0,dx: w_c/4,dy: h_c};
const RIGHT_S={x: (3*w_c/4),y: 0,dx: w_c/4,dy: h_c};
const LEFT_S2={x: w_c/4,y: h_c/3,dx: w_c/4,dy: h_c/3};
const RIGHT_S2={x: w_c/2,y: h_c/3,dx: w_c/4, dy: h_c/3};
///////////////////


// Esta es la función que pinta todo. Se ejecuta 60 veces por segundo.
// No cambie esta función. Su código debe ir en drawGame
function draw() {
    drawGame(Mundo);
    Mundo = onTic(Mundo);
};

// Esta función se ejecuta cada vez que presionamos una tecla.
// No cambie esta función. Su código debe ir en onKeyEvent
function keyPressed() {
    Mundo = onKeyEvent(Mundo, keyCode);
}

//Funciones auxiliares para el toque de la pantalla

///Para saber si el toque estuvo dentro del cuadrado

function inside_square(point,square){
 return(point.x>square.x&&point.x<square.x+square.dx)&&(point.y>square.y&&point.y<square.y+square.dy);
}

//Para convertir de touch a keyCode
function touch_To_keyCode(touch){
 if(inside_square(touch,UP_S)) return UP_ARROW;
 else if(inside_square(touch,DOWN_S)) return DOWN_ARROW;
 else if(inside_square(touch,RIGHT_S)||inside_square(touch,RIGHT_S2)) return RIGHT_ARROW;
 else if(inside_square(touch,LEFT_S)||inside_square(touch,LEFT_S2)) return LEFT_ARROW;
 else return 0;
}
//////////////////////

// Esta función se ejecuta cada vez que tocamos la pantalla.
// No cambie esta función. Su código debe ir en onTouchEvent
function touchStarted() {
  Mundo = onTouchEvent(Mundo,touch_To_keyCode(first(touches)));
}

// Esta función se ejecuta cada vez movemos el mouse.
// No cambie esta función. Su código debe ir en onMouseEvent
function mouseMoved() {
    Mundo = onMouseEvent(Mundo,
        { action: "move", mouseX: mouseX, mouseY: mouseY });
}

// Estas funciones controlan los eventos del mouse.
// No cambie estas funciones. Su código debe ir en OnMouseEvent
function mouseClicked() {
    Mundo = onMouseEvent(Mundo,
        { action: "click", mouseX: mouseX, mouseY: mouseY, mouseButton: mouseButton });
}
// Estas funciones controlan los eventos del mouse.
// No cambie estas funciones. Su código debe ir en OnMouseEvent
function mouseDragged() {
    Mundo = onMouseEvent(Mundo,
        { action: "drag", mouseX: mouseX, mouseY: mouseY, mouseButton: mouseButton });
}

// Estas funciones controlan los eventos del mouse.
// No cambie estas funciones. Su código debe ir en OnMouseEvent
function mousePressed() {
    Mundo = onMouseEvent(Mundo,
        { action: "press", mouseX: mouseX, mouseY: mouseY, mouseButton: mouseButton });
}
// Estas funciones controlan los eventos del mouse.
// No cambie estas funciones. Su código debe ir en OnMouseEvent
function mouseReleased() {
    Mundo = onMouseEvent(Mundo,
        { action: "release", mouseX: mouseX, mouseY: mouseY, mouseButton: mouseButton });
}
