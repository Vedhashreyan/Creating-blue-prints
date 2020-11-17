const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var box1;

function setup(){
    var canvas=createCanvas(400,400);
    engine=Engine.create();
    world = engine.world;

    box1=new Box(200,300,10,50);
    box2 = new Box(200,150,60,60);
     ground=new Ground(100,height,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();

}