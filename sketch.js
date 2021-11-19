var ball;

function setup() {
  createCanvas(400, 400);
  ball = createSprite(100, 100, 20, 20);
  ball.shapeColor = "blue";
}

function draw() {
  background("pink");
  if (keyIsDown(RIGHT_ARROW)) {
    ball.x = ball.x + 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    ball.x = ball.x - 2;
  }
  if (keyIsDown(UP_ARROW)) {
    ball.y = ball.y - 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    ball.y = ball.y + 2;
  }
  drawSprites();
}




