
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	
}

function setup() {
		var canvas = createCanvas(1000,600);
		engine = Engine.create();
		world = engine.world;
	
		ground = new Ground(500,590,1000,20);
		paperObject=new Ball(100,400,20)
		box1=new Blocks(750,520,20,100);
		box3=new Blocks(900,520,20,100);
		box4=new Blocks(825,580,150,20);


	Engine.run(engine);
  
}
	

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
 paperObject.display();
 box1.display();
 box3.display();
 box4.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-50});

  }
}



	
		
