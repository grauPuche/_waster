// - - - - - - - - - - - * greeting * - - - - - - - - - - -\\

var type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
	type = "canvas"
}
PIXI.utils.sayHello(type)

// - - - - - - - - - - - * nickNames * - - - - - - - - - - -\\

var Container = PIXI.Container,
	autoDetectRenderer = PIXI.autoDetectRenderer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite,
	Rectangle = PIXI.Rectangle,
	Text = PIXI.Text;

// - - - - - - - - - - - * stages & renderer * - - - - - - - - - - -\\


var renderer = autoDetectRenderer(1250, 800);
document.body.appendChild(renderer.view);

var stage = new Container();
renderer.render(stage);

var leftPile = new Container();

renderer.backgroundColor = 0x282828;


// - - - - - - - - - - - * loader * - - - - - - - - - - - \\

loader
	.add('assets/spriteSheet.json')
	.on("progress", loadProgressHandler)
	.load(setup);

function loadProgressHandler(loader, resource) {
	console.log("loading: " + resource.name);
	console.log("progress: " + loader.progress + "%");
}


var paper;
var hand;
var animHand;
//var animPaper;
var message;

var paperFrames = [];
var handFrames = [];


// * * * * * * * * * * * * *  SETUP  * * * * * * * * * * * * * \\


function setup() {

	console.log("All files loaded");

	// - - - - - - - - - - - * textures * - - - - - - - - - - -\\

	//HAND textures
	for (var i = 0; i < 8; i++) {
		var val = i < 10 ? '0' + i : i;
		handFrames.push(PIXI.Texture.fromFrame('blue/blue' + val + '.png'));
		//console.log("setup: hand texture loop done");
	}
	//PAPER textures
	for (var i = 1; i < 17; i++) {
		var val = i < 10 ? '0' + i : i;
		paperFrames.push(PIXI.Texture.fromFrame('bill' + val + '.png'));
		//console.log("setup: paper texture loop done");
	}

	console.log("setup: textures ready")

	// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\

	paper = new Sprite(PIXI.Texture.fromFrame('bill00.png'));
	paperPile = new Sprite(PIXI.Texture.fromFrame('paperPile.png'))

	animHand = new PIXI.extras.AnimatedSprite(handFrames);
	//animPaper = new PIXI.extras.AnimatedSprite(paperFrames);
	animHand.animationSpeed = .35;
	//animPaper.animationSpeed = 0.25;
	//animPaper.loop = false;
	animHand.loop = false;

	console.log("setup: sprites set");

	Fghj = new Text(
		"F",
		{ fontFamily: "tungsten", fontSize: 64, fill: "gray" }
	);
	fGhj = new Text(
		"G",
		{ fontFamily: "tungsten", fontSize: 64, fill: "gray" }
	);
	fgHj = new Text(
		"H",
		{ fontFamily: "tungsten", fontSize: 64, fill: "gray" }
	);
	fghJ = new Text(
		"J",
		{ fontFamily: "tungsten", fontSize: 64, fill: "gray" }
	);

	dollarsLeft = new Text(
		dollars,
		{ fontFamily: "tungsten", fontSize: 64, fill: "white" }
	);

	// - - - - - - - - - - - * position * - - - - - - - - - - -\\

	animHand.x = 375;
	animHand.y = 300;

	//animPaper.x = 375;
	//animPaper.y = 313;

	paper.x = 375;
	paper.y = 304;

	paperPile.x = 375;
	paperPile.y = 400;

	Fghj.position.set(50, 50);
	fGhj.position.set(100, 50);
	fgHj.position.set(150, 50);
	fghJ.position.set(200, 50);
	dollarsLeft.position.set(260,700);
	console.log("setup: position done");

	// - - - - - - - - * adding to the stage * - - - - - - - -\\

	leftPile.addChild(paper);
	//leftPile.addChild(hand);
	//leftPile.addChild(animPaper);
	leftPile.addChild(animHand);
	leftPile.addChild(paperPile);
	stage.addChild(leftPile);
	stage.addChild(Fghj);
	stage.addChild(fGhj);
	stage.addChild(fgHj);
	stage.addChild(fghJ);
	stage.addChild(dollarsLeft);

	console.log("setup: children done");

	gameLoop();

	console.log("setup: complete");
}

// * * * * * * * * * * * * GAMELOOP * * * * * * * * * * * * * \\

function gameLoop() {

	requestAnimationFrame(gameLoop);

	dollarsLeft.text = dollars;

	if (papers.length > 0) {
		for (var i = 0; i < papers.length; i++) {
			papers[i].x += 5;
		}
	}

	renderer.render(stage);
}

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
		 Fghj.style = { fontFamily: "tungsten", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f 				" + keyNumber);
	} else if (
		key === 'g'
		&& keyNumber === 1) {
		fGhj.style = { fontFamily: "tungsten", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f, g			" + keyNumber);
	} else if (
		key === 'h'
		&& keyNumber === 2) {
		fgHj.style = { fontFamily: "tungsten", fontSize: 64, fill: "white" };
		keyNumber++;
		console.log("f, g, h 		" + keyNumber);
	}
	else if (
		key === 'j'
		&& keyNumber === 3) {
		fghJ.style = { fontFamily: "tungsten", fontSize: 64, fill: "white" };
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

// Fghj.style = { fontFamily: "tungsten", fontSize: 64, fill: "white" }

// 		dollarWasted();
// 	}
// };

function dollarWasted() {
	dollars--;
	console.log("$" + dollars + " left");

	var xxx = new PIXI.extras.AnimatedSprite(paperFrames);
	animHand.gotoAndPlay(0);
	leftPile.y += 4;

	animHand.onComplete = function () {
		animHand.gotoAndStop(0);
		Fghj.style = { fontFamily: "tungsten", fontSize: 64, fill: "gray" };
		fGhj.style = { fontFamily: "tungsten", fontSize: 64, fill: "gray" };
		fgHj.style = { fontFamily: "tungsten", fontSize: 64, fill: "gray" };
		fghJ.style = { fontFamily: "tungsten", fontSize: 64, fill: "gray" };
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