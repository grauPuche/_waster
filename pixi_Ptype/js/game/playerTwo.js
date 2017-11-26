// - - - - - - - - - - - * keyboard * - - - - - - - - - - -\\

var dollars2 = 100;
var keyNumber2 = 0;

papers2 = []

var finished2 = false;
var ready2 = false;
var winner2 = false;


// function keyTyped() {
// 	if (key === ' ') {

// Fghj.style = { fontFamily: "Serif", fontSize: 64, fill: "white" }

// 		dollarWasted();
// 	}
// };

function dollarWasted2() {
	dollars2-=2;

	var xxx = new PIXI.extras.AnimatedSprite(paperFrames);

	if (dollars2 === 0) {
		console.log("P1: YAY! NO MORE MONEY");
		// rightPile.y -= 4;
		// xxx.visible = false;
		// dollars++;
		finished2 = true;
		winner2 = true;
	};
	console.log("P1: $" + dollars2 + " left");

	animHand2.gotoAndPlay(0);
	rightPile.y += 19.2;

	animHand2.onComplete = function () {
		animHand2.gotoAndStop(0);
		Fghj2.style = { fontFamily: "Serif", fontSize: 200, fill: "gray" };
		fGhj2.style = { fontFamily: "Serif", fontSize: 200, fill: "gray" };
		fgHj2.style = { fontFamily: "Serif", fontSize: 200, fill: "gray" };
		fghJ2.style = { fontFamily: "Serif", fontSize: 200, fill: "gray" };
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