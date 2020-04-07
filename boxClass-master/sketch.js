const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;
var pig1;
var log1;
var box3;
var box4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,390,1200,10)
    box1 = new Box(900,300,70,70);
    box2 = new Box(700,300,70,70);
    pig1 = new pig(800,300)
    log1 = new log(800,260,300,PI/2)
    box3 = new Box(900,240,70,70)
    box4 = new Box(700,240,70,70)
    pig2 = new pig(800,240)
    log2 = new log(800,200,300,PI/2)
    box5 = new Box(800,190,70,70)
    log3 = new log(870,120,150,-PI/7)
    log4 = new log(760,120,150,PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground1.display();
   pig1.display();
   log1.display();
   box4.display();
   box3.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
}