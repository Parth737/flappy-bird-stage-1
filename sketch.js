var bird,birdImage;
var topPipe,bottomPipe,topPipeGroup,bottomPipeGroup;
var food,foodGroup;
var gameOver,restart;
var bg,back;

var PLAY = 1;
var START = 0;
var END = 2;
var gameState = START;
var pipeSpeed = -4;
var score = 0;

function preload(){
    bg = loadImage("images/back.gif");
    birdImage = loadImage("images/bird.png");
    pipeUp = loadImage("images/pipeNorth.png");
    pipeDown = loadImage("images/pipeSouth.png");
    restartImage = loadImage("images/restart.png");
    gameOverImage = loadImage("images/gameOver.png");
    startBg = loadImage("images/back2.png");
    foodImage = loadImage("images/food.png");

    wingSound = loadSound("images/wing.mp3");
    endSound = loadSound("images/hit.mp3");
    //foodSound = loadSound("iamges/checkPoint.mp3");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    back = createSprite(0,0,width*5,height);
    back.addImage(bg);
    back.scale = 7;

    bird = createSprite(width/2-100,height/2);
    bird.addImage(birdImage);

    textSize(30);
    textFont("Algerian");
    fill("red");
    stroke("black");
}

function draw(){

    if(gameState===START){
        background(startBg);
        back.visible=false;
        bird.visible=false;
        var heading=createElement("h1");
        heading.html("Flappy Bird");
        heading.position(width/2-100,100);
        var msg=createElement("h2");
        msg.html("Welcome to FLAPPY BIRD game ! Tap the 'Play' button given below to start . Press space key to make the bird fly. The faster you press the space key , the higher you go . Each time you press space key , it represents a wing flap and higher flight . Once you stop , you drop towards the ground . Your task is to fly from in between the pipes and score more.Each time you cross from between the pipes , you get 1 score . (BONUS score if you eat the food also.) If you fall on ground or touch any of the pipes , you lose.....You can restart the game by pressing the restart button. ENJOOYYY!!!!");
        msg.position(width/2-635,height/2-200);
        var tell=createElement("h2");
        tell.html("Click on play nowww!!!");
        tell.position(width/2-100,height/2+20);

        var button = createButton("Play");
        button.position(width/2,height/2);
        button.mousePressed(()=>{
            removeElements();
            gameState = PLAY;
        })
    }
}