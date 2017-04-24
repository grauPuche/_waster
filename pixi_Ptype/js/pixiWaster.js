// - - - - - - - - - - - * greeting * - - - - - - - - - - -\\

var type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
	type = "canvas"
}
PIXI.utils.sayHello(type)


// - - - - - - - - - - - * stage * - - - - - - - - - - -\\


//Create the renderer
var renderer = PIXI.autoDetectRenderer(1250, 800);
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
//Create a container object called the `stage`
var stage = new PIXI.Container();
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

// - - - - - - - - - - - * loader * - - - - - - - - - - - \\

PIXI.loader
	.add([
		"assets/hand/blue.png",
		"assets/hand/red.png",
		"assets/hand/pink.png",
		"assets/hand/yellow.png",
		"assets/paper/bills.png"
	])
	.load(setup);

// * * * * * * * * * * *  SETUP  * * * * * * * * * * * * * \\

function setup() {

// - - - - - - - - - - - * textures * - - - - - - - - - - -\\

//HAND textures
var blueHandTexture		= PIXI.loader.resources["assets/hand/blue.png"].texture;
var redHandTexture		= PIXI.loader.resources["assets/hand/red.png"].texture;
var pinkHandTexture		= PIXI.loader.resources["assets/hand/pink.png"].texture;
var yellowHandTexture	= PIXI.loader.resources["assets/hand/yellow.png"].texture;

//PAPER texture
var paperTexture		= PIXI.loader.resources["assets/paper/bill.png"].texture;

// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\

var hand = new PIXI.Sprite(blueHandTexture);

// - - - - - - - - * adding to the stage * - - - - - - - -\\

stage.addChild(hand);


// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\