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
		 Fghj.style = { fontFamily: "Serif", fontSize: 200, fill: "white" };
		keyNumber++;
		console.log("f 				" + keyNumber);

	} else if ( playing === true &&
		key === 'g'
		&& keyNumber === 1) {
		fGhj.style = { fontFamily: "Serif", fontSize: 200, fill: "white" };
		keyNumber++;
		console.log("f, g			" + keyNumber);

	} else if ( playing === true &&
		key === 'h'
		&& keyNumber === 2) {
		fgHj.style = { fontFamily: "Serif", fontSize: 200, fill: "white" };
		keyNumber++;
		console.log("f, g, h 		" + keyNumber);

	} else if ( playing === true &&
		key === 'j'
		&& keyNumber === 3) {
		fghJ.style = { fontFamily: "Serif", fontSize: 200, fill: "white" };
		keyNumber++;
		console.log("f, g, h, j " 	+ keyNumber);
		keyNumber = 0;
		dollarWasted();

	} else if ( playing === true && dollars === 0) {
		console.log("YAY! NO MORE MONEY");
		finished = true;
		winner = true;

	} else if ( playing === true && key === '1') {
		dollars -= 97;
		dollarWasted();
	} 
	
	//else if ( playing === true && key === 'r' || key === 'R') {
	// 	state = end;
	// }
	if ( playing === true &&
		key === 'u' && keyNumber2 === 0) {
		 Fghj2.style = { fontFamily: "Serif", fontSize: 200, fill: "white" };
		keyNumber2++;
		console.log("u 				" + keyNumber2);

	} else if ( playing === true &&
		key === 'i'
		&& keyNumber2 === 1) {
		fGhj2.style = { fontFamily: "Serif", fontSize: 200, fill: "white" };
		keyNumber2++;
		console.log("u, i			" + keyNumber2);

	} else if ( playing === true &&
		key === 'o'
		&& keyNumber2 === 2) {
		fgHj2.style = { fontFamily: "Serif", fontSize: 200, fill: "white" };
		keyNumber2++;
		console.log("u, i, o 		" + keyNumber2);

	} else if ( playing === true &&
		key === 'p'
		&& keyNumber2 === 3) {
		fghJ2.style = { fontFamily: "Serif", fontSize: 200, fill: "white" };
		keyNumber2++;
		console.log("u, i, o, p		" + keyNumber2);
		keyNumber2 = 0;
		dollarWasted2();

	} else if ( playing === true && dollars2 === 0) {
		console.log("YAY! NO MORE MONEY");
		finished2 = true;
		winner2 = true;
		state = end;
	} else if ( playing === true && key === '2') {
		dollars2 -= 96;
		dollarWasted2();

	}
};

// function keyTyped() {
// 	if (key === ' ') {

// Fghj.style = { fontFamily: "Serif", fontSize: 64, fill: "white" }

// 		dollarWasted();
// 	}
// };

function dollarWasted() {
	dollars-=2;

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
	leftPile.y += 19.2;

	animHand.onComplete = function () {
		animHand.gotoAndStop(0);
		Fghj.style = { fontFamily: "Serif", fontSize: 200, fill: "gray" };
		fGhj.style = { fontFamily: "Serif", fontSize: 200, fill: "gray" };
		fgHj.style = { fontFamily: "Serif", fontSize: 200, fill: "gray" };
		fghJ.style = { fontFamily: "Serif", fontSize: 200, fill: "gray" };
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