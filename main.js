function pageLoaded() {
  //var sound = new Audio();
  //sound.src = "music/Eterna_City.mp3";
  //sound.play();

	var canvas = document.getElementById('message');
	var context = canvas.getContext('2d');

	context.font = '8pt PS2P';
	context.fillStyle = '#fff';
	context.fillText(messageTest.content[0], 10, 25);
  context.fillText(messageTest.content[1], 10, 45);
  context.fillText(messageTest.content[2], 10, 65);
}