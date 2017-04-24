// - - - - - - - - - - - * greeting * - - - - - - - - - - -\\

var type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
	type = "canvas"
}
PIXI.utils.sayHello(type)

// - - - - - - - - - - - * stage * - - - - - - - - - - -\\

var Container = PIXI.Container,
	autoDetectRenderer = PIXI.autoDetectRenderer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;
	Rectangle = PIXI.Rectangle;

// - - - - - - - - - - - * stage * - - - - - - - - - - -\\


//Create the renderer
var renderer = autoDetectRenderer(1250, 800);
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
//Create a container object called the `stage`
var stage = new Container();
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

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
var animPaper;

// * * * * * * * * * * *  SETUP  * * * * * * * * * * * * * \\

function setup() {

	console.log("All files loaded");

	// - - - - - - - - - - - * textures * - - - - - - - - - - -\\

	//HAND textures
	// var blueHandTexture = resources.blueHandTexture.texture;
	// var redHandTexture = resources.redHandTexture.texture;
	// var pinkHandTexture = resources.pinkHandTexture.texture;
	// var yellowHandTexture = resources.yellowHandTexture.texture;

	//PAPER texture
	// var paperTexture = resources.paperTexture.texture;

	var handFrames = [];

    for (var i = 1; i < 7; i++) {
        var val = i < 10 ? '0' + i : i;

        // magically works since the spritesheet was loaded with the pixi loader
        handFrames.push(PIXI.Texture.fromFrame('hand/blue/blue' + val + '.png'));

		console.log("hand texture loop done");
    }

	var paperFrames = [];

    for (var i = 0; i < 16; i++) {
        var val = i < 10 ? '0' + i : i;

        // magically works since the spritesheet was loaded with the pixi loader
        paperFrames.push(PIXI.Texture.fromFrame('paper/bill' + val + '.png'));

		console.log("paper texture loop done");
    }

	// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\
	
	// var frame1  = new Rectangle(0,0,96,96);
	// var frame2  = new Rectangle(96,0,96,96);
	// var frame3  = new Rectangle(192,0,96,96);
	// var frame4  = new Rectangle(288,0,96,96);
	// var frame5  = new Rectangle(384,0,96,96);
	// var frame6  = new Rectangle(480,0,96,96);
	// var frame7  = new Rectangle(576,0,96,96);
	// var frame8  = new Rectangle(672,0,96,96);
	// var frame9  = new Rectangle(786,0,96,96);
	// var frame10 = new Rectangle(864,0,96,96);
	// var frame11 = new Rectangle(960,0,96,96);
	// var frame12 = new Rectangle(1056,0,96,96);
	// var frame13 = new Rectangle(1152,0,96,96);
	// var frame14 = new Rectangle(1248,0,96,96);
	// var frame15 = new Rectangle(1344,0,96,96);
	// var frame16 = new Rectangle(1440,0,96,96);

	//blueHandTexture.frame = frame6; 

	//paperTexture.frame = frame7

	//hand = new Sprite(blueHandTexture);
	paper = new Sprite(PIXI.Texture.fromFrame('paper/bill00.png'));

	animHand = new PIXI.extras.AnimatedSprite(handFrames);
	animPaper = new PIXI.extras.AnimatedSprite(paperFrames);
	animHand.animationSpeed = 0.25;
	animPaper.animationSpeed = 0.25;
	animPaper.loop = false;
	animHand.loop = false;

	console.log("sprites set");

	// - - - - - - - - - - - * position * - - - - - - - - - - -\\

	animHand.x = 375;
	animHand.y = 304;
	animPaper.x = 375;
	animPaper.y = 304;
	
	paper.x = 375;
	paper.y = 304

	console.log("position done");
	// - - - - - - - - * adding to the stage * - - - - - - - -\\
	
	stage.addChild(paper);
	//stage.addChild(hand);
	stage.addChild(animHand);
	stage.addChild(animPaper);

	console.log("Children done");

	gameLoop(); 

	console.log("set up done");

}

// * * * * * * * * * * * * GAMELOOP * * * * * * * * * * * * * \\

function gameLoop (){

	requestAnimationFrame(gameLoop);
	animHand.play();
	animPaper.visible = false;

animHand.onComplete = function(){
	paper.visible = false;
	animPaper.visible = true;
	animPaper.x += 30;
	animPaper.play();
}

	

	renderer.render(stage);
}

// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\