var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  backgroundImage = loadImage("Sky_Meadow.png");
  arrowImage = loadImage("bala.png");
  bowImage = loadImage("commando.png");
  green_balloonImage = loadImage("Blind_Pest.png");
  pink_balloonImage = loadImage("Lesser_Wisp.png");
  blue_balloonImage = loadImage("Solus_Probe.png");
  red_balloonImage = loadImage("jellyfish.png");

}



function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 3.8
  
  // criando arco para atirar flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.5;
  
   score = 0
}

function draw() {
 background(0);
  // movendo chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/1;
    }
  
  //movendo flecha
  bow.y = World.mouseY
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //criando inimigos continuamente
   var select_balloon = Math.round(random(1,4));
  
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  text("Pontuação: "+ score, 300,50)
}


// Criando flechas para arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.1;
}

 function redBalloon() {
   var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.5;
 }

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.5;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.5;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.5;
}
