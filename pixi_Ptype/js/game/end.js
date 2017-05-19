function end() {
  playStage.visible = false;
  endStage.visible = true;
  if (winner === true){
		endText = "waster!";
		endText2 = "cheapskate!";
		state = end;
		playing = false;
	}
	if (winner2 === true){
		endText = "cheapskate!";
		endText2 = "waster!";
		state = end;
		playing = false;
	}
	  console.log(endText)
	endMessage.text = endText;
	endMessage2.text = endText2;
	endPaper1.play();
	endPaper2.play();
}