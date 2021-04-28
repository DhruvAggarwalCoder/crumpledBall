const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,ball;
var binImg,bin;

function preload(){
	binImg = loadImage("images/dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(1200,600);

	engine = Engine.create();
	world = engine.world;


	ground = new Ground();
	crumpledPaper = new Paper();
	
	bin = createSprite(964,520,20,20);
	bin.addImage(binImg);
	bin.scale = 0.45;

	binPart1 = new DustBin(902,505,10,120);
	binPart2 = new DustBin(962,565,130,10);
	binPart3 = new DustBin(1024,505,10,120);
}


function draw() {
	background(72);
	Engine.update(engine);

     ground.display();
	 crumpledPaper.display();
	 binPart1.display();
	 binPart2.display();
	 binPart3.display();

	 drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body , crumpledPaper.body.position , {
			x:80,
			y:-80
		});
	}
}



