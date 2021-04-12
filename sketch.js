
function preload() {
    //load the images here
    bg=loadImage("garden.png");
   tom1=loadAnimation("cat1.png");
   tom2=loadAnimation("cat2.png","cat3.png");
   tom3=loadAnimation("cat4.png");
   j1=loadAnimation("mouse1.png");
   j2=loadAnimation("mouse2.png","mouse3.png");
   j3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomSleeping",tom1)
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerrystanding",j1);
    jerry.scale=0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tom2","tom3");
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("tom2");
    }

    
    drawSprites();
}




function keyPressed(){

  //For moving and changing animation write code here

if(keyCode===LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("RUNNING",tom2);
    tom.changeAnimation("RUNNING");
}
}
