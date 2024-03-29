// Snake class
class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  update() {
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  
  // eat your food snake, you'll grow strong and long!
  grow() {
  	let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  
  // checks if the game is over
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if ( x > w-1 || x < 0 || y > h-1 || y < 0 ) {
       return true;
    }
    for ( let i = 0; i < this.body.length-1; i++ ) {
    	let part = this.body[i];
      if ( part.x == x && part.y == y ) {
      	return true;
      }
    }
    return false;
  }
  
  // did you really eat that, snake?
  eat(pos) {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if ( x == pos.x && y == pos.y ) {
      this.grow();
      return true;
    }
    return false;
  }
  
  // display the snake!
  show() {
  	for ( let i = 0; i < this.body.length; i++ ) {
    	fill(255, 255, 255);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}