
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var ground;


function preload() {
    
}
var particle = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(480,790,1200,20);
    ground.color = ("brown")

    for(var k = 0;k <=width; k = k + 80) {
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight)); 
      }
  
     
      
      for (var j = 40; j <= width; j=j+50)
      {
        plinko.push(new Plinko(j,75));
      }

      for (var j = 15; j <= width-10; j=j+50)
      {
        plinko.push(new Plinko(j,175));
      }
      for (var j = 5; j <= width-20; j=j+50)
      {
        plinko.push(new Plinko(j,275));
      }
      for (var j = -5; j <= width-30; j=j+50)
      {
        plinko.push(new Plinko(j,375));
      }



     
         
  
}

  
function draw(){
  background("black")
  Engine.update(engine);
  
  ground.display();
 

  for (var j = 0; j < particle.length; j++)
  {
  particle[j].display();
  }
  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
  for (var j = 0; j < plinko.length; j++)
  {
       plinko[j].display();
  }
  if(frameCount%10===0){
    particle.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
 
    

}

