// - - - - - - - - - - - * keyboard * - - - - - - - - - - -\\

var dollars = 100;
var keyNumber = 0;

papers = []

var finished = true;
var ready = false;
var winner = false;

function keyTyped() {
	
	if ( playing === true &&
		key === 'f' && keyNumber === 0) {
		 Fghj.style = { fontFamily: "Tahoma", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f 				" + keyNumber);

	} else if ( playing === true &&
		key === 'g'
		&& keyNumber === 1) {
		fGhj.style = { fontFamily: "Tahoma", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f, g			" + keyNumber);

	} else if ( playing === true &&
		key === 'h'
		&& keyNumber === 2) {
		fgHj.style = { fontFamily: "Tahoma", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f, g, h 		" + keyNumber);

	} else if ( playing === true &&
		key === 'j'
		&& keyNumber === 3) {
		fghJ.style = { fontFamily: "Tahoma", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f, g, h, j " 	+ keyNumber);
		keyNumber = 0;
		dollarWasted();

	} else if ( playing === true && dollars === 0) {
		console.log("YAY! NO MORE MONEY");
		finished = true;
		winner = true;

	} else if ( playing === true && key === ' ') {
		dollars -= 99;
		dollarWasted();

	} else if ( playing === true && key === 'r' || key === 'R') {
		state = end;
	}};

// function keyTyped() {
// 	if (key === ' ') {

// Fghj.style = { fontFamily: "Tahoma", fontSize: 64, fill: "white" }

// 		dollarWasted();
// 	}
// };

function dollarWasted() {
	dollars--;

	var xxx = new PIXI.extras.AnimatedSprite(paperFrames);

	if (dollars === 0) {
		console.log("P1: YAY! NO MORE MONEY");
		// leftPile.y -= 4;
		// xxx.visible = false;
		// dollars++;
		finished = true;
		winner = true;
	};
	console.log("P1: $" + dollars + " left");

	animHand.gotoAndPlay(0);
	leftPile.y += 4;

	animHand.onComplete = function () {
		animHand.gotoAndStop(0);
		Fghj.style = { fontFamily: "Tahoma", fontSize: 64, fill: "gray" };
		fGhj.style = { fontFamily: "Tahoma", fontSize: 64, fill: "gray" };
		fgHj.style = { fontFamily: "Tahoma", fontSize: 64, fill: "gray" };
		fghJ.style = { fontFamily: "Tahoma", fontSize: 64, fill: "gray" };
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