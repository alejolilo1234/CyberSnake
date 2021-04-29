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