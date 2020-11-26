const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engineVar,worldVar;
var object;
var ground;
var box1, box2;

function setup() 
{
  createCanvas(400,400);
  engineVar= Engine.create();
  worldVar= engineVar.world;
  ground=new Ground(200,390,400,20);
 
   box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);

}

function draw() {
  background(0); 
  Engine.update(engineVar); 
  

  box1.display();
box2.display();
ground.display(); 

}