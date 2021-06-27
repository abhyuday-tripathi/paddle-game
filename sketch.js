let ball;
let paddle;
let ballImage;
let paddleImage;
let edges;

function preload() {
  ballImage = loadImage('ball.png');
  paddleImage = loadImage('paddle.png');
}

function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 20, 20);
  ball.velocityX = 9;
  paddle = createSprite(370, 200, 10, 100);
  edges = createEdgeSprites();
}

function draw() {
  background(255);

  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle, randomVelocity);

  ball.addImage(ballImage);
  paddle.addImage(paddleImage);

  if (keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 20;
  }

  if (keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20;
  }

  drawSprites();
}

function randomVelocity() {
  ball.velocityY = random(6, 12);
}
