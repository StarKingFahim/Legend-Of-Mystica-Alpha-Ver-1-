//The Map Parts

var village,villageImg;

var House1,House1Img;

var Land1,Land1Img;

//

// var villager=[];

var O_Man,O_Woman,Man,Woman,Boy,Girl;

var O_ManImg,O_WomanImg,ManImg,WomanImg,BoyImg,GirlImg;

var Man_idle;

var villageSound;


//GameStates

var In_Village=0;
var In_House=1


var gameState=In_Village;

//

var HouseTrigger1,HouseOutTrigger1;

function preload()
{
  villageImg=loadImage("Maps Made/Original Map Ver.2.png");
  
  House1Img=loadImage("Maps Made/House Inside 1.png");

  Land1Img=loadImage("Maps Made/Landscape 1 Ver.1.png");
  
  O_ManImg = loadImage("NPC and PC/Villagers/1 Old_man/Old_man.png");
  O_WomanImg = loadImage("NPC and PC/Villagers/2 Old_woman/Old_woman.png");
  
  ManImg = loadImage("NPC and PC/Villagers/3 Man/Man.png");
  
  Man_idle = loadAnimation("NPC and PC/Villagers/3 Man/Man_Idle/I1.png","NPC and PC/Villagers/3 Man/Man_Idle/I2.png","NPC and PC/Villagers/3 Man/Man_Idle/I3.png","NPC and PC/Villagers/3 Man/Man_Idle/I4.png");


  WomanImg =loadImage("NPC and PC/Villagers/4 Woman/Woman.png");

  BoyImg = loadImage("NPC and PC/Villagers/5 Boy/Boy.png");
  GirlImg =loadImage("NPC and PC/Villagers/6 Girl/Girl.png");
 
  villageSound = new Audio("Sound Tracks/Calm village.wav");
  
  


}

function setup()
{

 canvas = createCanvas(displayWidth,displayHeight);
  
 village=createSprite(displayWidth/2,displayHeight/2,displayWidth*2,displayHeight*2)
 // image(villageImg,0,displayHeight*4,displayWidth,displayHeight*2);

 village.addImage(villageImg);
 village.scale=5.30;
 village.depth=1;


 House=createSprite(10000,10000,10,10);


 Land=createSprite(displayWidth/2,-3690,displayWidth*2,displayHeight*2);
 Land.addImage(Land1Img);
 Land.scale=5.30;
 Land.depth=0;

 House.addImage(House1Img);
 House.scale=3;
 House.depth=1;



 //villager.push(O_Man,O_Woman,Man,Woman,Boy,Girl)


 O_Man=createSprite(200,300,100,100);
 O_Man.addImage(O_ManImg);
 O_Man.scale=5;
 O_Man.depth=2;
 //O_Man.wander();

 O_Woman=createSprite(500,200,100,100);
 O_Woman.addImage(O_WomanImg);
 O_Woman.scale=5;
 O_Woman.depth=2;

 Man=createSprite(1000,500,100,100);
 Man.addImage(ManImg);
 Man.scale=5;
 Man.depth=2;

 Woman=createSprite(1200,800,100,100);
 Woman.addImage(WomanImg);
 Woman.scale=5;
 Woman.depth=2;

 Boy=createSprite(200,500,100,100);
 Boy.addImage(BoyImg);
 Boy.scale=5;
 Boy.depth=2;

 Girl=createSprite(300,800,100,100);
 Girl.addImage(GirlImg);
 Girl.scale=5;
 Girl.depth=2;


 //Triggers

 HouseTrigger1=createSprite(1340,80,1,1);
 HouseTrigger1.visible=false;

 HouseOutTrigger1=createSprite(9960,11110,1,1);
 //HouseOutTrigger1.visible=false;


}

function draw()
{
 
  background("white");
 
  console.log(Man.x,Man.y);
  villageSound.play();
  villageSound.loop = true;


 //  
 if(keyWentDown(UP_ARROW))
  {
    Man.velocityY=-10;
  }
  else if(keyDown(DOWN_ARROW))
  {
    Man.velocityY= 10;
  }
  else if(keyDown(RIGHT_ARROW))
  {
    Man.velocityX= 10;
  }
  else if(keyDown(LEFT_ARROW))
  {
    Man.velocityX= -10;
  }

  if(keyWentDown(UP_ARROW)&&keyWentDown(LEFT_ARROW)) {
    Man.velocityX = -10;
    Man.velocityY = -10;
  }
  if(keyWentDown(UP_ARROW)&&keyWentDown(RIGHT_ARROW)) {
    Man.velocityX = 10;
    Man.velocityY = -10;
  }
  if(keyWentDown(DOWN_ARROW)&&keyWentDown(LEFT_ARROW)) {
    Man.velocityX = -10;
    Man.velocityY = 10;
  }
  if(keyWentDown(DOWN_ARROW)&&keyWentDown(RIGHT_ARROW)) {
    Man.velocityX = 10;
    Man.velocityY = 10;
  }


  
    if(keyWentUp(UP_ARROW))
    {
      Man.velocityY=0;
    }
    else if(keyWentUp(DOWN_ARROW))
    {
      Man.velocityY=0;
    }
    else if(keyWentUp(RIGHT_ARROW))
    {
      Man.velocityX=0;
    }
    else if(keyWentUp(LEFT_ARROW))
    {
      Man.velocityX=0;
    }  
    



    if(Man.velocityX===0 && Man.velocityY===0)
    {
      Man.addAnimation("idle",Man_idle);
    }

  
camera.x=Man.x;
camera.y=Man.y;

  //House Triggers

 if(Man.isTouching(HouseTrigger1))
 {
   //gameState=1;
   Man.scale=6;
   Man.x=9960;
   Man.y=10960;
 }
 if(Man.isTouching(HouseOutTrigger1))
 {
   //gameState=1;
   Man.scale=5;
   Man.x=1370;
   Man.y=230;
 }

 if(gameState===0)
 {
   village.visible=true;
   
   O_Man.visible=true;
   O_Woman.visible=true;
   Man.visible=true;
   Woman.visible=true;
   Boy.visible=true;
   Girl.visible=true;
 }

/* if(gameState===1)
 {
  village.visible=false;
   
  O_Man.visible=true;
  O_Woman.visible=false;
  Man.visible=false;
  Woman.visible=false;
  Boy.visible=false;
  Girl.visible=false;
 }
   */


 
  drawSprites();
}


//Villager Ai

