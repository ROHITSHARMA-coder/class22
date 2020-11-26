
const Engine=Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;


var engine, world;

function setup() {
  canvas = createCanvas(400,400);

engine = Engine.create();
world = engine.world;

var prop={
  isStatic: true
}
ground = Bodies.rectangle(200,300,400,20,prop);
World.add(world,ground);

var p={
  restitution: 1.0
}
ball = Bodies.circle(100,100,20,p);
World.add(world,ball);
var state=
{
  restitution:1.0
}

box=Bodies.rectangle(200,200,30,40,state);
World.add(world,box);
  
}

function draw() {
  background("pink");  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
circle(ball.position.x,ball.position.y,20);

rectMode(CENTER);
rect(box.position.x,box.position.y,30,40);
  
}
