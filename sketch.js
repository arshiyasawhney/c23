// name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground; 
var box;
function setup() {
  createCanvas(400,400);


myEngine = Engine.create();
myWorld = myEngine.world;
var ground_options = {
  isStatic : true
}
ground = Bodies.rectangle(200,350,400,20, ground_options);
World.add(myWorld,ground);


box1 = new Box(200,300,50,50);


box2 = new Box(240,100,50,100);
}

function draw() {
  
  background(0,225,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
  
  rect(ground.position.x, ground.position.y, 400,20);
  box1.display()
  box2.display()
}

