let snake;
let rez = 20;
let food;
let w;
let h;

// setup function - initialize game window, create snake and food!
function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('game-window');

  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

// smells like food somewhere, ey?
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

// assigning the keyboard buttons to actions here! (https://keycode.info/)
function keyPressed() {
  if(keyCode === 65) {
    snake.setDir(-1, 0);
  } else if (keyCode === 68) {
  	snake.setDir(1, 0);
  } else if (keyCode === 83) {
  	snake.setDir(0, 1);
  } else if (keyCode === 87) {
  	snake.setDir(0, -1);
  } else if (key == ' ') {
  	snake.grow();
  }
}

// A function called continuously until the program stops with noLoop()
function draw() {
  scale(rez);
  background(50);

  if (snake.eat(food)) {
     foodLocation();
  }
  snake.update();
  snake.show();
  
  if (snake.endGame()) {
  	print("END GAME");
    background(221, 84, 80);
    noLoop();
  }
  
  noStroke();
  fill(75, 75, 75);
  rect(food.x, food.y, 1, 1);
}