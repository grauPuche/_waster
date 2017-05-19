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


var renderer = autoDetectRenderer(1440, 2560,{transparent: true});
document.body.appendChild(renderer.view);

var stage = new Container();
renderer.render(stage);

var playStage = new Container();
var endStage = new Container();
var leftPile = new Container();
var rightPile = new Container();

// renderer.backgroundColor = 0x1f1f1f;


// - - - - - - - - - - - * loader * - - - - - - - - - - - \\

loader
	.add('assets/spriteSheet.json')
	.on("progress", loadProgressHandler)
	.load(setup);

function loadProgressHandler(loader, resource) {
	console.log("loading: " + resource.name);
	console.log("progress: " + loader.progress + "%");
}


//var paper;
//var hand;
var animHand;
var animHand2;
//var animPaper;
var message;

var endPaper1;
var endPaper2;
var endText = "waster!";
var endText2 = "cheapskate!";

var paperFrames = [];
var handFrames = [];
var handFrames2 = [];

var playing = false;

// * * * * * * * * * * * * *  SETUP  * * * * * * * * * * * * * \\


function setup() {

	console.log("All files loaded");

	createCanvas(0,0);

	// - - - - - - - - - - - * textures * - - - - - - - - - - -\\

	//HAND textures
	for (var i = 0; i < 8; i++) {
		var val = i < 10 ? '0' + i : i;
		handFrames.push(PIXI.Texture.fromFrame('blue/blue' + val + '.png'));
		//console.log("setup: hand texture loop done");
	}

	//HAND textures
	for (var i = 0; i < 8; i++) {
		var val = i < 10 ? '0' + i : i;
		handFrames2.push(PIXI.Texture.fromFrame('red/red' + val + '.png'));
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

	// paper = new Sprite(PIXI.Texture.fromFrame('bill00.png'));
	paperPile = new Sprite(PIXI.Texture.fromFrame('paperPile.png'))
	// paper2 = new Sprite(PIXI.Texture.fromFrame('bill00.png'));
	paperPile2 = new Sprite(PIXI.Texture.fromFrame('paperPile.png'))


	animHand = new PIXI.extras.AnimatedSprite(handFrames);
	animHand2 = new PIXI.extras.AnimatedSprite(handFrames2);
	//animPaper = new PIXI.extras.AnimatedSprite(paperFrames);

	endPaper1 = new PIXI.extras.AnimatedSprite(paperFrames)
	endPaper2 = new PIXI.extras.AnimatedSprite(paperFrames)
	endPaper1.animationSpeed = 0.25;
	endPaper2.animationSpeed = 0.25;

	animHand.animationSpeed = .35;
	animHand2.animationSpeed = .35;
	//animPaper.animationSpeed = 0.25;
	//animPaper.loop = false;
	animHand.loop = false;
	animHand2.loop = false;

	console.log("setup: sprites set");

	Fghj = new Text(
		"·",
		{ fontFamily: "Serif", fontSize: 200, fill: "gray" }
	);
	fGhj = new Text(
		"·",
		{ fontFamily: "Serif", fontSize: 200, fill: "gray" }
	);
	fgHj = new Text(
		"·",
		{ fontFamily: "Serif", fontSize: 200, fill: "gray" }
	);
	fghJ = new Text(
		"·",
		{ fontFamily: "Serif", fontSize: 200, fill: "gray" }
	);


	Fghj2 = new Text(
		"·",
		{ fontFamily: "Serif", fontSize: 200, fill: "gray" }
	);
	fGhj2 = new Text(
		"·",
		{ fontFamily: "Serif", fontSize: 200, fill: "gray" }
	);
	fgHj2 = new Text(
		"·",
		{ fontFamily: "Serif", fontSize: 200, fill: "gray" }
	);
	fghJ2 = new Text(
		"·",
		{ fontFamily: "Serif", fontSize: 200, fill: "gray" }
	);


	dollarsLeft = new Text(
		"$" + dollars,
		{ fontFamily: "Tahoma", fontSize: 80, fill: "white" }
	);

	dollarsLeft2 = new Text(
		"$" + dollars,
		{ fontFamily: "Tahoma", fontSize: 80, fill: "white" }
	);

	endMessage = new Text(
		endText,
		{ fontFamily: "Tahoma", fontSize: 80, fill: "white" }
	)

	endMessage2 = new Text(
		endText2,
		{ fontFamily: "Tahoma", fontSize: 80, fill: "white" }
	)


	// - - - - - - - - - - - * position * - - - - - - - - - - -\\

	animHand.x = 375 - 250 ;
	animHand.y = 306 + 1050;

	animHand.width = 240;
	animHand.height = 240;

	animHand2.x = 750 + 320;
	animHand2.y = 306 + 1050;

	animHand2.width = 240;
	animHand2.height = 240;

	//animPaper.x = 375;
	//animPaper.y = 313;

	// paper.x = 375;
	// paper.y = 310;

	// paper.width = 240;
	// paper.height = 240;

	// paper2.x = 750;
	// paper2.y = 310;

	// paper2.width = 240;
	// paper2.height = 240;

	paperPile.x = 375 - 250;
	paperPile.y = 540 + 1050;

	paperPile.width = 240;
	paperPile.height = 960;

	paperPile2.x = 750 + 320;
	paperPile2.y = 540 + 1050;

	paperPile2.width = 240;
	paperPile2.height = 960;

	endPaper1.x = 125;
	endPaper1.y = 1400;

	endPaper1.height = 240;
	endPaper1.width = 240;

	endPaper2.x = 750 + 320;
	endPaper2.y = 1400;

	endPaper2.height = 240;
	endPaper2.width = 240;
	
	Fghj.position.set(150, 1000);
	fGhj.position.set(200, 1000);
	fgHj.position.set(250, 1000);
	fghJ.position.set(300, 1000);

	Fghj2.position.set(1100, 1000);
	fGhj2.position.set(1150, 1000);
	fgHj2.position.set(1200, 1000);
	fghJ2.position.set(1250, 1000);

	dollarsLeft.position.set(180,980);

	dollarsLeft2.position.set(1125,980);

	endMessage.position.set(125,1400)
	endMessage.rotation = -0.5;

	endMessage2.position.set(970,1300)
	endMessage2.rotation = 0.5

	console.log("setup: position done");

	// - - - - - - - - * adding to the stage * - - - - - - - -\\

	stage.addChild(playStage);

	playStage.addChild(leftPile);
	
	// leftPile.addChild(paper);
	leftPile.addChild(animHand);
	leftPile.addChild(paperPile);

	playStage.addChild(rightPile);

	// rightPile.addChild(paper2);
	rightPile.addChild(animHand2);
	rightPile.addChild(paperPile2);
	
	playStage.addChild(Fghj);
	playStage.addChild(fGhj);
	playStage.addChild(fgHj);
	playStage.addChild(fghJ);

	playStage.addChild(Fghj2);
	playStage.addChild(fGhj2);
	playStage.addChild(fgHj2);
	playStage.addChild(fghJ2);

	playStage.addChild(dollarsLeft);
	playStage.addChild(dollarsLeft2);

	stage.addChild(endStage);
	endStage.addChild(endMessage);
	endStage.addChild(endMessage2);
	endStage.addChild(endPaper1);
	endStage.addChild(endPaper2);

	console.log("setup: children done");

	endStage.visible = false;

	state = play; 

	gameLoop();

	console.log("setup: complete");
}