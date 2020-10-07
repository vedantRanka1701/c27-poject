const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(400,250,30);
	ball2 = new Ball(451,250,30);
	ball3 = new Ball(502,250,30);
	ball4 = new Ball(349,250,30);
	ball5 = new Ball(298,250,30)
    
	roof = new ROOF(400,200,400,20)

	rope1 = new Rope(ball1.body,{x:400,y:200});
	rope2 = new Rope(ball2.body,{x:451,y:200});
	rope3 = new Rope(ball3.body,{x:502,y:200});
	rope4 = new Rope(ball4.body,{x:349,y:200});
	rope5 = new Rope(ball5.body,{x:298,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY});
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.position,{x:-85,y:85});
	}
}