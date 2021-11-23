let balls = [];
colors = ["white", "black", "red", "maroon", "yellow", "olive", "lime", "green", "aqua", "teal", "blue", "navy", "fuchsia", "purple"];

function setup() {
	createCanvas(1000, 600);
}

function draw() {
	background(50);
	for (let ball of balls){
		ball.move();
		ball.show();
	}
	line(0, 300, 1000, 300);
	
}

function mousePressed() {
	b = new Ball(mouseX, mouseY, random(10, 50));
	balls.push(b);
}
let maxHeight = 1000;
class Ball {
	constructor(x, y, diameter) {
		this.x = x;
		this.y = y;
		this.diameter = diameter;
		this.color = random(colors);
		this.dx = random(-10, 10);
		this.dy = random(-10,10);
		this.gravity = 2;
	}
	move() {
		this.x += this.dx;
		this.y += this.dy;
		if (this.x + this.diameter >= width || this.x - this.diameter <= 0) this.dx = -1 * this.dx;
		// if (this.y + this.diameter >= height || this.y - this.diameter <= 0) this.dy = -1 * this.dy;
		if (this.y + this.diameter >= height) {
			this.dy = -1 * this.dy
		} else {
			this.dy += this.gravity;
		}
		if (this.y < maxHeight) {
			maxHeight = this.y;
			console.log(maxHeight);
		}
	}
	show() {
		fill(this.color);
		circle(this.x, this.y, this.diameter);
	}
}
