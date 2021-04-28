window.addEventListener("contextmenu",e => {
  e.preventDefault();
})
window.addEventListener("keydown", e => {
  if(e.ctrlKey && e.key == "u"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.key == "s"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.key == "p"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.key == "c"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.path.shiftKey && e.key == "i"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.shiftKey && (e.key == "i" || e.key == "I")){
    e.preventDefault();
  }
  if(e.ctrlKey && e.shiftKey && (e.key == "j" || e.key == "J")){
    e.preventDefault();
  }
});

// window.addEventListener("resize", e => {
//   alert(" ");
//   window.close();
// });