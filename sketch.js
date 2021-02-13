
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, Bob_1, Bob_2, Bob_3, Bob_4,rope_1

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(750,200,1400,50)

	bob_1 = new bob(700,400,65,65)
	bob_2 = new bob(750,400,65,65)
	bob_3 = new bob(800,400,65,65)
	bob_4 = new bob(850,400,65,65)
	bob_5 = new bob(900,400,65,65)
	bob_6 = new bob(950,400,65,65)
	


	rope_1 = new ropes(bob_1.body,{x: 750,y: 200})
	rope_2 = new ropes(bob_2.body,{x: 790,y: 200})
	rope_3 = new ropes(bob_3.body,{x: 830,y: 200})
	rope_4 = new ropes(bob_4.body,{x: 870,y: 200})
	rope_5 = new ropes(bob_5.body,{x: 910,y: 200})
	rope_6 = new ropes(bob_6.body,{x: 950,y: 200})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  
roof.display()
bob_1.display()
bob_2.display()
bob_3.display()
bob_4.display()
bob_5.display()
bob_6.display()
rope_1.display()
rope_2.display()
rope_3.display()
rope_4.display()
rope_5.display()
rope_6.display()

 
}

function mouseDragged(){
	Matter.Body.setPosition(bob_1.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_2.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_3.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_4.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_5.body, {x: mouseX, y: mouseY})
}
function mouseDragged(){
	Matter.Body.setPosition(bob_6.body, {x: mouseX, y: mouseY})
}


