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

// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\

PIXI.loader
	.add([
		"assets/hand/blue.png",
		"assets/hand/red.png",
		"assets/hand/pink.png",
		"assets/hand/yellow.png",
		"assets/paper/bills.png"
	])
	.load(setup);

// - - - - - - - - - - - * textures * - - - - - - - - - - -\\

//HAND textures
var blueHandTexture = PIXI.utils.TextureCache["assets/hand/blue.png"];
var redHandTexture = PIXI.utils.TextureCache["assets/hand/red.png"];
var pinkHandTexture = PIXI.utils.TextureCache["assets/hand/pink.png"];
var yellowHandTexture = PIXI.utils.TextureCache["assets/hand/yellow.png"];

//PAPER texture
var paperTexture = PIXI.utils.TextureCache["assets/paper/bill.png"];

// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\

var hand = new PIXI.Sprite(blueHandTexture);

// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\



// - - - - - - - - - - - * sprites * - - - - - - - - - - -\\