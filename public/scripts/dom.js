document.addEventListener('DOMContentLoaded',() => {
  const audio = document.getElementById("audio");
  const restart = document.getElementById("restart");
  const playButton = document.getElementById("buttonPlay");
  const playModal = document.getElementById("firstGame");
  playButton.addEventListener('click',() => {
    audio.play();
    audio.volume = 0.1;
    playModal.classList.add("hide");
    restart.classList.remove("hide");
    restart.classList.add("show");
    Mundo=update(Mundo,{play:1, dir:{x:0,y:0}});
  });
  const instructionsButton = document.getElementById('buttonInstructions');
  const instructionsModal = document.getElementById("instructions");
  instructionsButton.addEventListener('click',() => {
    playModal.classList.remove("show");
    playModal.classList.add("hide");
    instructionsModal.classList.remove("hide");
    instructionsModal.classList.add("show");
  });
  const backButton = document.getElementById("back");
  backButton.addEventListener('click',() => {
    playModal.classList.remove("hide");
    playModal.classList.add("show");
    instructionsModal.classList.remove("show");
    instructionsModal.classList.add("hide");
  });
  const contributorsButton = document.getElementById("contributorsButton");
  const contributorsModal = document.getElementById("contributors")
  contributorsButton.addEventListener('click',() => {
    playModal.classList.remove("show");
    playModal.classList.add("hide");
    contributorsModal.classList.remove("hide");
    contributorsModal.classList.add("show");
  });
  const backButtonCon = document.getElementById("backCon");
  backButtonCon.addEventListener('click',() => {
    playModal.classList.remove("hide");
    playModal.classList.add("show");
    contributorsModal.classList.remove("show");
    contributorsModal.classList.add("hide");
  });
  const scoresButton = document.getElementById("scoresButton");
  const scoresModal = document.getElementById("scoresModal")
  scoresButton.addEventListener('click',() => {
    playModal.classList.remove("show");
    playModal.classList.add("hide");
    scoresModal.classList.remove("hide");
    scoresModal.classList.add("show");
  });
  const backButtonScore = document.getElementById("backScore");
  backButtonScore.addEventListener('click',() => {
    playModal.classList.remove("hide");
    playModal.classList.add("show");
    scoresModal.classList.remove("show");
    scoresModal.classList.add("hide");
  });
  const graphics = document.getElementById("graphics");
  const graphicsButton = document.getElementById("graphicsButton");
  graphicsButton.addEventListener("click",()=> {
    scoresModal.classList.remove("show");
    scoresModal.classList.add("hide");
    graphics.classList.remove("hide");
    graphics.classList.add("show");
  });
  const backGraficsButton = document.getElementById("backGraficsButton");
  backGraficsButton.addEventListener("click", () => {
    scoresModal.classList.remove("hide");
    scoresModal.classList.add("show");
    graphics.classList.remove("show");
    graphics.classList.add("hide");
  });
});

// Eventos del mouse y teclado

addEventListener("contextmenu", event => event.preventDefault());

addEventListener("keydown", event => {
  if(event.ctrlKey && event.key == "u") event.preventDefault();
  if(event.ctrlKey && event.key == "s") event.preventDefault();
  if(event.ctrlKey && event.key == "p") event.preventDefault();
  if(event.ctrlKey && event.key == "c") event.preventDefault();
  if(event.ctrlKey && event.path.shiftKey && event.key == "i") event.preventDefault();
  if(event.ctrlKey && event.shiftKey && (event.key == "i" || event.key == "I")) event.preventDefault();
  if(event.ctrlKey && event.shiftKey && (event.key == "j" || event.key == "J")) event.preventDefault();
});