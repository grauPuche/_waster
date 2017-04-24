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

// - - - - - - - - - - - * textures * - - - - - - - - - - -\\

//loading HAND textures
PIXI.utils.TextureCache["assets/hand/blue.png"];
PIXI.utils.TextureCache["assets/hand/red.png"];
PIXI.utils.TextureCache["assets/hand/pink.png"];
PIXI.utils.TextureCache["assets/hand/yellow.png"];

//loading PAPER texture
PIXI.utils.TextureCache["assets/paper/bill.png"];

