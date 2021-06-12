 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []

var spike, star, spikeImg, starImg;

var divisionHeight=300;
var score =0;

var particle;

var turn = 0;
var maxTurns = 5;

var gameState = "play"

function preload() {
      spikeImg = loadImage("cookie.jpeg")
      starImg = loadImage("star.png")
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 spike = createSprite(155,75, 50,50);
 console.log(spikeImg);
 spike.addImage(spikeImg);



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("turquoise");
 
  Engine.update(engine);
 
  fill("black"); 
  textSize(35)
  text("Score : "+score,20,40);
  fill("magenta");
  text(" 500 ", 5, 550);
  text(" 400 ", 80, 550);
  text(" 300 ", 160, 550);
  text(" 200 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 200 ", 480, 550);
  text(" 300 ", 560, 550);
  text(" 400 ", 640, 550);
  text(" 500 ", 720, 550);
  
  ground.display();

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
  }

  
   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 80 && particle.body.position.x > 1) 
             {
                 score=score+500;      
                 particle=null;
                 if (turn>= maxTurns) gameState ="end";                          
             }

             else if (particle.body.position.x < 160 && particle.body.position.x > 81 ) 
             {
                   score = score + 400;
                   particle=null;
                   if (turn>= maxTurns) gameState ="end";

             }
            
             else if (particle.body.position.x < 240 && particle.body.position.x > 161 )
             {
                   score = score + 300;
                   particle=null;
                   if (turn>= maxTurns)  gameState ="end";

             }      

             else if (particle.body.position.x < 320 && particle.body.position.x > 241 ) 
             {
                   score = score + 200;
                   particle=null;
                   if (turn>= maxTurns) gameState ="end";

             }
            
             else if (particle.body.position.x < 400 && particle.body.position.x > 321 )
             {
                   score = score + 100;
                   particle=null;
                   if (turn>= maxTurns)  gameState ="end";

             }      
             else if (particle.body.position.x < 480 && particle.body.position.x > 401 ) 
             {
                   score = score + 100;
                   particle=null;
                   if (turn>= maxTurns) gameState ="end";

             }
            
             else if (particle.body.position.x < 560 && particle.body.position.x > 481 )
             {
                   score = score + 200;
                   particle=null;
                   if (turn>= maxTurns)  gameState ="end";

             }      
             else if (particle.body.position.x < 640 && particle.body.position.x > 561 ) 
             {
                   score = score + 300;
                   particle=null;
                   if (turn>= maxTurns) gameState ="end";

             }
            
             else if (particle.body.position.x < 720 && particle.body.position.x > 641 )
             {
                   score = score + 400;
                   particle=null;
                   if (turn>= maxTurns)  gameState ="end";

             }      
             else if (particle.body.position.x < 800 && particle.body.position.x > 721 ) 
             {
                   score = score + 500;
                   particle=null;
                   if (turn>= maxTurns) gameState ="end";

             }
            }
      }
      for (var i = 0; i < plinkos.length; i++) {
     
            plinkos[i].display();
            
          }
       
  
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   drawSprites();
}

function mousePressed(){
  if (gameState!=="end"){
    turn++
    particle = new Particle(mouseX,10,12,12)
  }
}