var messageLag = (message, context, row, rowHeight, speed) =>
{
	var output = [];


	while (message[0].length !== output.length) {
		for (let i = 0; i < message[0].length ; i++) {
			output.push(message[0].charAt(i));
		}
	}

	return setTimeout( () => {
		for (let i = 0; i < output.length; i++) {
     		setTimeout( () => {
     			if (output[i] !== '') {
    				var dozzoText = new Audio();
 					dozzoText.src = "sound/DOZZO_Text.mp3";
					dozzoText.play();
     			}
				context.fillText(output[i], i*16, rowHeight);
    		}, i*speed);
    	}
	}, row*speed*29);
}

function pageLoaded() {
 	

	var canvas = document.getElementById('message');
	var context = canvas.getContext('2d');
	context.font = '12pt PS2P';
	context.fillStyle = '#fff';

	messageLag(messageTest.content[0], context, 0, 20, 75);
	messageLag(messageTest.content[1], context, 1, 44, 100);
  	//messageLag(messageTest.content[2], context, 0, 44, 30);
}