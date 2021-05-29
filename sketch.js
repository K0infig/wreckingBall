const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

var ground;
var box1;
var ball;
var rope;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,580,1200,20);
  console.log(ground);

  box1 = new Box(800,200,70,70);
  box2 = new Box(800,200,70,70);
  box3 = new Box(800,200,70,70);
  box4 = new Box(800,200,70,70);
  box5 = new Box(800,200,70,70);
  box6 = new Box(800,200,70,70);

  
 


  ball = new Ball(400,300,40);

  rope= new Rope(ball.body,{x:500,y:100});

  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  

  ball.display();
  rope.display();
 

  
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}