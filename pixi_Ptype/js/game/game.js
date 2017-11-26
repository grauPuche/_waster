// * * * * * * * * * * * * GAMELOOP * * * * * * * * * * * * * \\

function gameLoop() {
	requestAnimationFrame(gameLoop);
	state();
	renderer.render(stage);
}