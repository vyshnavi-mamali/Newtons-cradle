const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(480,200,200,20);
	bobObject1=new bob(400,400,40);
	bobObject2=new bob(440,400,40);
	bobObject3=new bob(480,400,40);
	bobObject4=new bob(520,400,40);
	bobObject5=new bob(560,400,40);
	
	

	rope1=new rope(bobObject1.body,roofObject.body,-80,10)
	rope2=new rope(bobObject2.body,roofObject.body,-40, 10)
	rope3=new rope(bobObject3.body,roofObject.body,0, 10)
	rope4=new rope(bobObject4.body,roofObject.body,40, 10)
	rope5=new rope(bobObject5.body,roofObject.body,80, 10)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}



