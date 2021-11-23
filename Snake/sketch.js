let snake;

function setup() {
	createCanvas(1000, 600);
	snake = new Snake();
	food = new Food();
}

function draw() {
	background(50);
	snake.move();
	if (food.collide(snake)) {
		food = new Food();
		snake.len += 100;
	}
	console.log(snake.eatSelf());
	snake.show();
	food.show();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW && snake.vel.heading() != PI && snake.vel.heading() != 0) {
		snake.vel = createVector(-snake.speed, 0);
	}
	if (keyCode === RIGHT_ARROW && snake.vel.heading() != PI && snake.vel.heading() != 0) {
		snake.vel = createVector(snake.speed, 0);
	}
	if (keyCode === UP_ARROW && snake.vel.heading() != -HALF_PI && snake.vel.heading() != HALF_PI) {
		snake.vel = createVector(0, -snake.speed);
	}
	if (keyCode === DOWN_ARROW && snake.vel.heading() != -HALF_PI && snake.vel.heading() != HALF_PI) {
		snake.vel = createVector(0, snake.speed);
	}
}