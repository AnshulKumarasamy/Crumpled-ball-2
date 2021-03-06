const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1500, 750);

	engine = Engine.create();
	world = engine.world;

	box1 = new Bin(1050,800,175,170);
	//box2 = new Bin(900,700,20,100);
	//box3 = new Bin(1200,700,20,100);

	ground = new Ground(750,750,1500,40);

	paper1 = new Paper(200,500);

	Engine.run(engine);
}

function draw() {
  background(255);

  paper1.display();

  box1.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:83.5,y:-100});
	}
}

