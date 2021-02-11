var cat1,cat2,cat,cat4
var mouse,mouse1,mouse4,mouse2
var canvas;
var bg;

function preload() {
    //load the images here

    bg = loadImage("images/garden.png");
    cat1 = loadAnimation('images/cat1.png')
    cat2 = loadAnimation('images/cat2.png','images/cat3.png')
    cat4 = loadAnimation('images/cat4.png')
    mouse1 = loadAnimation('images/mouse1.png')
    mouse2 = loadAnimation('images/mouse2.png','images/mouse3.png')
    mouse4 = loadAnimation('images/mouse4.png')
}

function setup(){


   canvas =  createCanvas(1000,800);

    //create tom and jerry sprites here
   cat = createSprite(800,670)
   cat.addAnimation('catsleeping',cat1)
   cat.scale = 0.2;

   mouse = createSprite(200,670)
   mouse.addAnimation('mousestanding',mouse1)
   mouse.scale = 0.1
}

function draw() {

    //Write condition here to evalute if tom and jerry collide
    background(bg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation('catlastImage',cat4)
    cat.x=300;
   cat.scale=0.2
    cat.changeAnimation('catlastImage')

    mouse.addAnimation('mouselastImage',mouse4)
   
    mouse.changeAnimation('mouselastImage')
    
    
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW){}
     cat.velocityX = -5;
     cat.addAnimation('catRunning',cat2)
     cat.changeAnimation('catRunning')

     mouse.addAnimation('mouseteasing',mouse2)
    mouse.frameDelay=25;
     mouse.changeAnimation('mouseteasing')
}
