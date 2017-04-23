/// <reference path="~/client/js/jquery-2.1.3.min.js" />
/// <reference path="~/client/js/TweenLite.min.js" />
/// <reference path="~/client/js/pixi.js" />

// game parameters
var restURI = ""; // client may be pointed to remote service. ex."https://some.otherhost.com/"
var maxVelocity = 10; // max translate distance per frame.
var refresh = 150; // how often to get game state from the service in milliseconds.

// html5 web workers
var networker = null;
var playerData = null;
var seq = 0;
var lastSeq = 0;

// who am I. GUID is private.
var playerGuid = null;
var playerID = null;

var PlayerName = "the waster"
var handColor = []

// where am I?
var keyValue = 0; 
var PageNumber = 0;

// sprite tracking
var playerList = [];
var playerDirtyList = [];

// PIXI globals
var renderer = null;
var stage = null;
var centerX = 0;
var centerY = 0;

// PIXI assets
var playerTexture = null;
var paperTexture = null;

$(function () {

    // setup web worker
    if (window.Worker) {
        console.log('Web Workers!');
        networker = new Worker('js/com/liquidint/multiplayer/networker.js');
    }

    // PIXI scene setup
    renderer = PIXI.autoDetectRenderer(1250,800);
    $(".game").append(renderer.view);
    stage = new PIXI.Container();
    renderer.render(stage);

    // use center of stage as 0,0 point for coordinates
    centerX = renderer.width / 2;
    centerY = renderer.height / 2;

    // start animation
    requestAnimFrame(animate);

    // load assets    
    playerTexture = PIXI.Texture.fromImage("assets/" + HAND_COLOR_CHOSEN_BY_THE_PLAYER + ".png"); // hand texture

    // enter the game and setup worker
    requestEnterGame();
    networker.addEventListener('message', netWorkerListener, false);

})


