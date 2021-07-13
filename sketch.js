const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Player Object
playerBase= new PlayerBase(300,random(450, height - 300),180,150);
player=new Player(285,playerBase.body.position.y-153,50,180)

   //Display ComputerPlayer and computer base 
   computerBase= new ComputerBase(width-300,random(450,height-300),180,150);
   computerPlayer=new ComputerPlayer(width-280,playerBase.body.position.y-153,50,180)

   console.log(player.height)
 }
 

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);



   //display Player and computerplayer
   playerBase.display();
   player.display();
   computerBase.display();
    computerPlayer.display();
    

    

}
