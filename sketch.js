const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObject, groundObject, paperBall, inGr;
var world, engine;

function setup() {
	//create the canvas
	createCanvas(1600, 700);

	//sets the rectangle mode
	rectMode(CENTER);

	//creates engine and adds it to the world
	engine = Engine.create();
	world = engine.world;
	
	//creates the object
	groundObject = new Ground(width/2, 680, width, 20);
	dustbinObject = new Dustbin(1200,660);
	paperBall = new Paper(100, 160, 50, 50);

	//runs the engine
	Engine.run(engine);
}

function draw() {
  //sets the rect mode
  rectMode(CENTER);

  //creates the background
  background(230);

  //displays the object
  groundObject.display();
  dustbinObject.display();
  paperBall.display();

  //makes the sprite visible
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:30,y:-45});
	}
}