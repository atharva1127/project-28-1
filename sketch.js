
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
	
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6, mango7;
var tree;
var boy,stone;
var sling;

function preload(){
	boy=loadImage("Images/boy.png");
	tree=loadImage("Images/tree.png")

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	mango1=new Mango(950,300,70);
	mango2=new Mango(1000,370,70);
	mango3=new Mango(800,290,70);
	mango4=new Mango(1100,400,70);
	mango5=new Mango(1150,300,70);
	mango6=new Mango(750,350,70);
	mango7=new Mango(950,200,70);
	stone=new Stone(220,550,50);
	sling=new SlingShot(stone.body,{x:220,y:550});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  imageMode(CENTER);
  image(boy,300,620,250,300);
  image(tree,900,410,600,600);
  Engine.update(engine);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  ground.display();
  sling.display();

  detectollision(stone,mango1);
//   detectollision(stone,mango2);
//   detectollision(stone,mango3);
//   detectollision(stone,mango4);
//   detectollision(stone,mango5);
//   detectollision(stone,mango6);
//   detectollision(stone,mango7);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectollision(lstone,lmango){
	console.log(lmango);
	console.log(lstone);
	console.log("inside function");
	 mangoBodyPosition=lmango.body.position
	 stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lstone.r+lmango.r){
		Matter.Body.setStatic(lmango.body,false);

	}

}
