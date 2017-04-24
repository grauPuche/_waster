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

function loadProgressHandler() {
	console.log("loading"); 
}

// * * * * * * * * * * *  SETUP  * * * * * * * * * * * * * \\

function setup() {

	// - - - - - - - - - - - * textures * - - - - - - - - - - -\\

	//HAND textures
	var blueHandTexture = resources.blueHandTexture.texture;
	var redHandTexture = resources.redHandTexture.texture;
	var pinkHandTexture = resources.pinkHandTexture.texture;
	var yellowHandTexture = resources.yellowHandTexture.texture;

	//PAPER texture
	var paperTexture = resources.paperTexture.texture;

	// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\

	var hand = new Sprite(blueHandTexture);

	// - - - - - - - - * adding to the stage * - - - - - - - -\\

	stage.addChild(hand);


	// - - - - - - - - - - - * rendering stage * - - - - - - - - - - -\\

	renderer.render(stage);
}

// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\