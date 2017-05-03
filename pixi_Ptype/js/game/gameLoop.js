// * * * * * * * * * * * * GAMELOOP * * * * * * * * * * * * * \\

function gameLoop() {

	requestAnimationFrame(gameLoop);

	dollarsLeft.text = "$" + dollars;

	if (papers.length > 0) {
		for (var i = 0; i < papers.length; i++) {
			papers[i].x += 5;
		}
	}

	renderer.render(stage);
}