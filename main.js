function pageLoaded() {
  //var sound = new Audio();
  //sound.src = "music/Eterna_City.mp3";
  //sound.play();

  var canvas = document.getElementById("message");
  var context = canvas.getContext("2d");
  //--------------------------------------------------
  context.font = "10 pt Arial";
  context.fillText("This is in 10 pt Arial. . .", 0, 0,300,150);
  //--------------------------------------------------
  context.fillStyle = "red";
  context.fillRect(0, 0, 300, 150);//300x150 est taille par défaut d'un canvas (sur chrome en tout cas), donc ça représente un 100%, 100% du message :/
}