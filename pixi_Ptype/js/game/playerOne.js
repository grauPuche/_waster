var paperOrigin;
var isAnimationStart = false;
var paperMovementX = 0;

// - - - - - - - - - - - * keyboard * - - - - - - - - - - -\\

var dollars = 100;
var keyNumber = 0;

papers = []

var finished = true;

function keyTyped() {
	if (
		key === 'f'
		&& keyNumber === 0) {
		 Fghj.style = { fontFamily: "Oswald", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f 				" + keyNumber);
	} else if (
		key === 'g'
		&& keyNumber === 1) {
		fGhj.style = { fontFamily: "Oswald", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f, g			" + keyNumber);
	} else if (
		key === 'h'
		&& keyNumber === 2) {
		fgHj.style = { fontFamily: "Oswald", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f, g, h 		" + keyNumber);
	}
	else if (
		key === 'j'
		&& keyNumber === 3) {
		fghJ.style = { fontFamily: "Oswald", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f, g, h, j " + keyNumber);
		keyNumber = 0;

		dollarWasted();

	}
	else if (dollars === 0) {
		console.log("YAY! NO MORE MONEY");
		finished = true;
	}
};

// function keyTyped() {
// 	if (key === ' ') {

// Fghj.style = { fontFamily: "Oswald", fontSize: 64, fill: "white" }

// 		dollarWasted();
// 	}
// };

function dollarWasted() {
	dollars--;
	console.log(dollars + " left");

	var xxx = new PIXI.extras.AnimatedSprite(paperFrames);
	animHand.gotoAndPlay(0);
	leftPile.y += 4;

	animHand.onComplete = function () {
		animHand.gotoAndStop(0);
		Fghj.style = { fontFamily: "Oswald", fontSize: 64, fill: "gray" };
		fGhj.style = { fontFamily: "Oswald", fontSize: 64, fill: "gray" };
		fgHj.style = { fontFamily: "Oswald", fontSize: 64, fill: "gray" };
		fghJ.style = { fontFamily: "Oswald", fontSize: 64, fill: "gray" };
	};

	xxx.gotoAndPlay(0);
	xxx.x = 0;
	xxx.y = -96;
	xxx.animationSpeed = 0.25;
	xxx.loop = false;
	paperPile.addChild(xxx);
	xxx.x += 10;
	papers.push(xxx);
};