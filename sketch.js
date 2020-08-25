var fixedRect, movingRect, gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(400, 200, 50, 50);
  gameobject2 = createSprite(600, 200, 50, 50);
  gameobject1.velocityX = 5;
  gameobject2.velocityX = -5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameobject2)){
    movingRect.shapeColor = "yellow";
    gameobject2.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "blue";
    gameobject2.shapeColor = "blue";
  }

  bounce(gameobject1,gameobject2);
  
  drawSprites();
}




/*
return - Keyword - to make the function give back any type of value to the function draw()

ARGUMENTS
- Real values given to a function
- They take some storage space in the memory location
- They Exist!
- Function is taking/accepting arguments
- Passing arguments to the function

PARAMETERS
- Not real values, do not exist
- They do not take any storage space in the memory location
- PLACEHOLDERS for arguments
*/