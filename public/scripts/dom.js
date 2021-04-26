document.addEventListener('DOMContentLoaded',() => {
  const restart = document.getElementById("restart");
  const playButton = document.getElementById("buttonPlay");
  const playModal = document.getElementById("firstGame");
  playButton.addEventListener('click',() => {
    playModal.classList.add("hide");
    restart.classList.remove("hide");
    restart.classList.add("show");
    Mundo=update(Mundo,{play:1, dir:{x:0,y:0}});
  })
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
  })
  const contributorsButton = document.getElementById("contributorsButton");
  const contributorsModal = document.getElementById("contributors")
  contributorsButton.addEventListener('click',() => {
    playModal.classList.remove("show");
    playModal.classList.add("hide");
    contributorsModal.classList.remove("hide");
    contributorsModal.classList.add("show");
  })
  const backButtonCon = document.getElementById("backCon");
  backButtonCon.addEventListener('click',() => {
    playModal.classList.remove("hide");
    playModal.classList.add("show");
    contributorsModal.classList.remove("show");
    contributorsModal.classList.add("hide");
  })
  const scoresButton = document.getElementById("scoresButton");
  const scoresModal = document.getElementById("scoresModal")
  scoresButton.addEventListener('click',() => {
    playModal.classList.remove("show");
    playModal.classList.add("hide");
    scoresModal.classList.remove("hide");
    scoresModal.classList.add("show");
  })
  const backButtonScore = document.getElementById("backScore");
  backButtonScore.addEventListener('click',() => {
    playModal.classList.remove("hide");
    playModal.classList.add("show");
    scoresModal.classList.remove("show");
    scoresModal.classList.add("hide");
  })
})