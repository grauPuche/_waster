function end() {
  playStage.visible = false;
  endStage.visible = true;
  if (winner === true){
		endText = "You Won!";
		endText2 = "You Lost!";
		state = end;
	}
	  console.log(endText)
	endMessage.text = endText;
	endPaper1.play();
	endPaper2.play();
}