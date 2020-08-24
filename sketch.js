const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,box3,box4,box5;
var pig1,pig2
var log1,log2,log3,log4
var bird

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,385,1200,20);

    bird = new Bird(100,100);

    box1 = new Box(800,350,70,70);
    pig1 = new Pig(870,365);
    box2 = new Box(940,350,70,70);
    log1 = new Log(870,300,270,PI);

    box3 = new Box(800,250,70,70);
    pig2 = new Pig(870,265)
    box4 = new Box(940,250,70,70);
    log2 = new Log(870,200,270,PI);

    box5 = new Box(870,150,70,70);
    log3 = new Log(820,100,120,-PI/7);
    log4 = new Log(890,100,120,PI/7)


}

function draw(){
    background(200);
    Engine.update(engine);
    noStroke();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
   
}