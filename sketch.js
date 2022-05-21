let xVal;
let yVal;
let msNew0;
let msOld = 0;
let canvasWidth = 400;
let canvasHeight = 500;
let clickX = 50;
let clickY = 50;
let colorVal = "black";
let msStart = 0;
let current = 0;
let newdiameter = 0;

let gameOver = 0;
let hitCount = 0;
let totalCount = 0;
let gameState = "gameStart";
let clicked = false;
let cnv;
let delayTime = 0;
let gameTime = 15000; // msec 
let diameter = 50;
let speed = 800; // drawing cycle
let hitSound;
var level1;
var level2;
var level3;
var restart = 0;
let option = 0;
let bg = 0;
let bg1 = 0;

class Circle{
  constructor (){
    this.color = "#ff0000";
    this.fill = "#000000";
    this.x = 100;
    this.y =100;
    this.r = 50;
  }
  move(){
    this.moveX;
    this.moveY;
  }
  show(){
    stroke(this.color);
    fill(this.fill);
    strokeWeight(4); 
    circle(this.x, this.y, this.r);
  }
}
 

function preload() {
  hitSound = loadSound('assets/game.mp3');
  bg = loadImage('assets/image.jpg');
  bg1 = loadImage('assets/image1.jpg');
}
function setup() {

  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.mousePressed(hitColor);
  cnv.mouseReleased(normalColor);
  xVal = canvasWidth / 2;
  yVal = canvasHeight / 2;
  
  //
  
  bubble1 = new Circle();
  //=============================================
  level1 = new Clickable();
  level2 = new Clickable();
  level3 = new Clickable();
  restart = new Clickable();
  restart.width = 180;
  restart.height = 50;
  restart.textSize = 25

  level1.locate(35, 370);
  level1.onHover = function () {
    level1.color = "#AAAAFF";
    level1.textColor = "#FFFFFF";
    level1.text = "Play";

  }
  //This function is ran when the clickable is NOT hovered.
  level1.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "Easy";
    this.textColor = "#000000";
  }
  //This function is ran when the clickable is pressed.
  level1.onPress = function () {
    this.stroke = "#FF0000";
    console.log("level1 selected");
    option = "1";
    processOption() ;
  }

  //=============================================

  level2.locate(145, 370);
  level2.onHover = function () {
    level2.color = "#AAAAFF";
    level2.textColor = "#FFFFFF";
    level2.text = "Play";
  }
  //This function is ran when the clickable is NOT hovered.
  level2.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "medium";
    this.textColor = "#000000";
  }
  level2.onPress = function () {
    this.stroke = "#FF0000";
    console.log("level2 selected");
    option = "2";
    processOption() ;
  }
  //=============================================

  level3.locate(260, 370);
  level3.onHover = function () {
    level3.color = "#AAAAFF";
    level3.textColor = "#FFFFFF";
    level3.text = "Play";
  }
  //This function is ran when the clickable is NOT hovered.
  level3.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "Hard";
    this.textColor = "#000000";
  }
  //This function is ran when the clickable is pressed.
  level3.onPress = function () {
    this.stroke = "#FF0000";
    console.log("level3 selected");
    option = "3";
    processOption() ;
  }

  restart.locate(110, 370);
  restart.onHover = function () {
    restart.color = "#AAAAFF";
    //restart.textColor = "#FFFFFF";
    restart.textColor = "#ff0000";
    restart.text = "Play Again";
  }
  //This function is ran when the clickable is NOT hovered.
  restart.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "Play Again";
    this.textColor = "#000000";
  }
  restart.onPress = function () {
    this.stroke = "#FF0000";
    console.log("level2 selected");
    option = "S";
    processOption() ;
  }
  //=============================================
  //=============================================
  //=============================================
  frameRate(60);
}
function processOption() {
  if (gameState === "gameStart" || gameState === "gameEnd") {
    switch (option) {
      case 'S':
        console.log("gameStart");
        gameState = "gameStart";
        break;
      case "1":
        gameState = "lvl1";
        break;
      case "2":
        gameState = "lvl2";
        break;
      case "3":
        gameState = "lvl3";
        break;
      case "E":
        gameState = "gameEnd";
        break;
    }
  }
}

function mousePressed() {
  clickX = winMouseX - 50;
  clickY = winMouseY - 50; 
  clicked = true;
  //console.log("mousePressed(): ",clickX, clickY);
}
function mouseRelease() {
 
}
function normalColor() {
  colorVal = "black";
}
function hitColor() {
  colorVal = "red";
}

function hitMade() {
  let d = sqrt((xVal - clickX) ** 2 + (yVal - clickY) ** 2);
  if (d <= diameter/2) {
    return 1;
  } 
    return 0;
}


function keyReleased() {
  if (gameState === "gameStart" || gameState === "gameEnd") {
    key = key.toUpperCase();
    switch (key) {
      case 'S':
        console.log("gameStart");
        gameState = "gameStart";
        break;
      case "1":
        console.log("level1");
        gameState = "lvl1";
        break;
      case "2":
        gameState = "lvl2";
        break;
      case "3":
        gameState = "lvl3";
        break;
      case "E":
        gameState = "gameEnd";
        break;
    }
  }
}

// Function for rendering the gameStart screen.
function gameStart() {  
  //background(100, 100, 240);  
  background(bg);
  level1.draw();
  level2.draw();
  level3.draw();
  stroke(200);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  push();
  fill(255, 0 ,0);
  text("Game Begin", width * 0.5, height * 0.3);
  textSize(25);
  text("Game has three levels:", width * 0.5, height * 0.46);
  pop();
  stroke(150);
  textSize(16);

 /*
 
  text('You will see bubbles appear in random places', width * 0.5, height * 0.56);
  text('click the mouse inside the bubble to pop it', width * 0.5, height * 0.60);
  text('Press "1" for Easy', width * 0.5, height * 0.88);
  text('Press "2" for Medium', width * 0.5, height * 0.92);
  text('Press "3" for Hard', width * 0.5, height * 0.96);
*/
  clicked = false;
  fadeDuration = 0;
  msStart = millis();
  gameOver = millis() + gameTime;
  clickX = 0;
  clickY = 0;
  totalCount =0;
  hitCount = 0;
}

// Function for rendering the main game play screen.
function gameStage1() {
  diameter = 70;
  speed = 1000; // drawing cycle
  background(100, 240, 100);
  stroke(0);
  textSize(25);
  textAlign(CENTER);
  push();
  fill(255);  
  //stroke(255);
  text("Level 1", width * 0.5, height * 0.9);
  pop();
  play();
}
function gameStage2() {
  diameter = 55;
  speed = 1000; // drawing cycle
  background(240, 100, 100);
  stroke(0);
  fill(0);
  textSize(30);
  textAlign(CENTER);
  push();
  fill(255);  
  //stroke(255);
  text("Level 2", width * 0.5, height * 0.9);
  pop();
  play();
}
function gameStage3() {
  diameter = 45;
  speed = 1000; // drawing cycle
  //background(100, 100, 240);
  background(204, 204, 0); 
  stroke(0);
  fill(0);
  textSize(30);
  textAlign(CENTER);
  push();
  fill(255);  
  //stroke(255);
  text("Level 3", width * 0.5, height * 0.9);
  pop();
  play();
}
// Function for rendering game over screen.
function gameEnd() {
  //background(240, 0, 0);
  background(bg1);
  restart.draw();
  stroke(255);
  fill(255);
  textSize(45);
  textAlign(CENTER);
  push();
  fill(255, 0 ,0);
  text("GAME OVER", width * 0.5, height * 0.33);
  textSize(18);
  text('Total bubbles: ' + totalCount, width * 0.5, height * 0.56);
  text('Number of pops: '+ hitCount, width * 0.5, height * 0.61);
  text('Percentage: %' + parseInt((hitCount/totalCount)*100), width * 0.5, height * 0.66);
  pop();
}
function play() {
  if(millis() < delayTime ){
    return;
  }
  if(millis() > gameOver){
    gameState = "gameEnd";
    return;
  }
  //console.log("timeRemaining: ", (gameOver - millis())/1000);
  //background(220);
  current = millis();
  if (current < msStart + fadeDuration) {
    fill("red");
    if (newdiameter > 0) {
      newdiameter = newdiameter - 4;
    }
    else {
      delayTime = millis() +1000;  // wait 1 sec after a hit
    }
    bubble1.fill = "#ff0000";
    bubble1.x =xVal;
    bubble1.y =yVal;
    bubble1.r =newdiameter;
    bubble1.show();

  } else {
    msNew = millis(); //getMsecond();
    if (msNew > msOld + speed) {
      clickX = 0;
      clickY = 0;
      xVal = parseInt(random(diameter+50, canvasWidth - diameter));
      yVal = parseInt(random(diameter+50, canvasHeight - diameter -100));

      msOld = msNew;
      totalCount++;
   
    }
    //console.log("xVal, yVal: ", xVal, yVal);  
    bubble1.fill = "#000000";
    bubble1.x =xVal;
    bubble1.y =yVal;
    bubble1.r =diameter;
    bubble1.show();

    //push();
    //fill("white")
    //textSize(12);
    //text(xVal+ " " + yVal, xVal, yVal);
    //pop();
    if (hitMade() && clicked == true) {
      hitSound.play();
      clickX = 0;
      clickY = 0;
      fill("red");
      msStart = millis();
      fadeDuration = 200;
      newdiameter = diameter;
      hitCount++;
      clicked = false;
    } 
    else {
      fill("black");

    }

  }
}
//==================================

/* The draw loop content is drawn depending on the current value of 
gameState. The 'switch' function here is replacing what could be an 
'if-else' statement. */
function draw() {
  switch (gameState) {
    case "gameStart":
      //console.log("gameStart");
      gameStart();
      break;
    case "lvl1":
      //console.log("level 1");
      gameStage1();
      break;
    case "lvl2":
      //console.log("level 2");
      gameStage2();
      break;
    case "lvl3":
      //console.log("level 3");
      gameStage3();
      break;
    case "gameEnd":
      //console.log("gameEnd");
      gameEnd();
      break;
  }
}