function colorChange(){
  var discoBox = document.getElementById("box");
  var colors =["blue","yellow","green","purple"];
  var counter = 0;
  discoBox.style.backgroundColor= colors[counter];
  counter++;
  if (counter >= colors.length){
    counter = 0;
  }
  else{
    return false;
  }
}
setInterval(colorChange, 3000);
