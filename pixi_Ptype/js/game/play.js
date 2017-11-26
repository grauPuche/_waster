// * * * * * * * * * * * * GAMELOOP * * * * * * * * * * * * * \\

function play() {
	inLobby = false;
	playing = true; 

	dollarsLeft.text = "$" + dollars;
	dollarsLeft2.text = "$" + dollars2;

	if (papers.length > 0) {
		for (var i = 0; i < papers.length; i++) {
			papers[i].x += 5;
		}
	}
	if (papers2.length > 0) {
		for (var i = 0; i < papers2.length; i++) {
			papers2[i].x += 5;
		}
	}

	if (winner === true){
		state = end;
	}
}