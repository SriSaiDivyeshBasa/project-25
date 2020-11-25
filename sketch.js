
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var grooud;
var dustBinBorder1,dustBinBoreder2,dustBinBorder3;
var paper;


function preload(){
		dustbinImg=loadImg("projectsassets.s3.us-east-2.amazonaws.com");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	dustBinBorder1=createSprite(600,650,200,20);
	dustBinBorder1.shapeColor="white";
	dustBinBorder2=createSprite(500,610,20,100);
	dustBinBorder2.shapeColor="white";
	dustBinBorder3=createSprite(700,610,20,100);
	dustBinBorder3.shapeColor="white";
	this.image=loadImage("projectsassets.s3.us-east-2.amazonaws.com");

	paper=createSprite(200,650,20,20);
	paper.shapeColor="purple"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  
  drawSprites();
}



