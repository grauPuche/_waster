// - - - - - - - - - - - * keyboard * - - - - - - - - - - -\\

var dollars2 = 100;
var keyNumber2 = 0;

papers2 = [];

var finished2 = true;
var ready2 = false;
var winner2 = false;

// function playerTwo() {
// 	if (keyNumber2 === 0) {
// 		keyNumber2++;
// 		console.log("P2: f 				" + keyNumber);
// 	} else if (keyNumber2 === 1) {
// 		keyNumber2++;
// 		console.log("P2: f, g			" + keyNumber);
// 	} else if (keyNumber2 === 2) {
// 		keyNumber2++;
// 		console.log("P2: f, g, h 		" + keyNumber);
// 	}
// 	else if (keyNumber2 === 3) {
// 		keyNumber2++;
// 		console.log("P2: f, g, h, j " 	+ keyNumber);
// 		keyNumber2 = 0;

// 		dollarWasted();

// 	}
// 	else if (dollars2 === 0) {
// 		console.log("P2: YAY! NO MORE MONEY");
// 		finished2 = true;
// 		rightPile.y += 4;
// 	}
// };

// function keyTypedd() {
// 	if (key === ' ') {
// 		dollarWasted2();
// 	}
// };

function dollarWasted2() {
	dollars2--;

	var xxx = new PIXI.extras.AnimatedSprite(paperFrames);

	if (dollars2 < 0) {
		console.log("P2: YAY! NO MORE MONEY");
		finished2 = true;
		rightPile.y -= 4;
		xxx.visible = false;
		dollars2++;
	};
	console.log("P2: $" + dollars2 + " left");

	animHand2.gotoAndPlay(0);
	rightPile.y += 4;

	animHand2.onComplete = function () {
		animHand2.gotoAndStop(0);
	};

	xxx.gotoAndPlay(0);
	xxx.x = 0;
	xxx.y = -96;
	xxx.animationSpeed = 0.25;
	xxx.loop = false;
	paperPile2.addChild(xxx);
	xxx.x += 10;
	papers2.push(xxx);
};