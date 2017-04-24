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
	.add("blueHandTexture","assets/hand/blue.png")
	.add("redHandTexture","assets/hand/red.png")
	.add("pinkHandTexture","assets/hand/pink.png")
	.add("yellowHandTexture","assets/hand/yellow.png")
	.add("paperTexture","assets/paper/bill.png")
	
	.on("progress", loadProgressHandler)
	.load(setup);

function loadProgressHandler(loader, resource) {

	console.log("loading: " + resource.name);
	console.log("progress: " + loader.progress + "%");
}

// * * * * * * * * * * *  SETUP  * * * * * * * * * * * * * \\

function setup() {

	console.log("All files loaded");

	// - - - - - - - - - - - * textures * - - - - - - - - - - -\\

	//HAND textures
	var blueHandTexture = resources.blueHandTexture.texture;
	var redHandTexture = resources.redHandTexture.texture;
	var pinkHandTexture = resources.pinkHandTexture.texture;
	var yellowHandTexture = resources.yellowHandTexture.texture;

	//PAPER texture
	var paperTexture = resources.paperTexture.texture;

	// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\
	
	var Frame1 = new Rectangle(0,0,96,96);
	var Frame2 = new Rectangle(96,0,96,96);
	var Frame3 = new Rectangle(192,0,96,96);
	var Frame4 = new Rectangle(288,0,96,96);
	var Frame5 = new Rectangle(384,0,96,96);
	var Frame6 = new Rectangle(480,0,96,96);
	var Frame7 = new Rectangle(576,0,96,96);
	var Frame8 = new Rectangle(672,0,96,96);
	var Frame9 = new Rectangle(786,0,96,96);
	var Frame10 = new Rectangle(864,0,96,96);
	var Frame11 = new Rectangle(960,0,96,96);
	var Frame12 = new Rectangle(1056,0,96,96);
	var Frame13 = new Rectangle(1152,0,96,96);
	var Frame14 = new Rectangle(1248,0,96,96);
	var Frame15 = new Rectangle(1344,0,96,96);
	var Frame16 = new Rectangle(1440,0,96,96);
	blueHandTexture.frame = Frame6; 

	var hand = new Sprite(blueHandTexture);

	// - - - - - - - - - - - * position * - - - - - - - - - - -\\

	hand.x = 375;
	hand.y = 304;

	// - - - - - - - - * adding to the stage * - - - - - - - -\\
	stage.addChild(hand);
	// - - - - - - - - - - - * rendering stage * - - - - - - - - - - -\\
}

// - - - - - - - - - - - * GAMELOOP * - - - - - - - - - - -\\

function gameloop (){
	requestAnimationFrame(gameloop);

	paper.x= 1;

	renderer.render(stage);
}

// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\