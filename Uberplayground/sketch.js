var ball = {
	x: 100,
	y: 100,
	r: 0,
	g: 0,
	b: 0
};

var rgb = toString(ball.r) + ", " + toString(ball.g) + ", " + toString(ball.b);
var bgcolor = 0;

function setup() {
	createCanvas(1000, 600);
	ball.r = random(0, 255);
	ball.g = random(0, 255);
	ball.b = random(0, 255);
}

function draw() {
	bgcolor = map(mouseX, 0, width, 0, 255);
	background(bgcolor);
	fill(ball.r, ball.g, ball.b);
	controls();
	circle(ball.x, ball.y, 50);
	// ellipse(x, y, 50, 50);
	rgb = str(ball.r.toFixed(0)) + ", " + str(ball.g.toFixed(0)) + ", " + str(ball.b.toFixed(0));
	fill(255);
	rect(20, 20, 100, 30);
	fill(0);
	text(rgb, 30, 40);
}

function mouseClicked() {
	console.log(frameRate());
}

function controls() {
	if (keyIsDown(LEFT_ARROW)) {
		ball.x -= 10;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		ball.x += 10;
	}
	if (keyIsDown(UP_ARROW)) {
		ball.y -= 10;
	}
	if (keyIsDown(DOWN_ARROW)) {
		ball.y += 10;
	}
	if (keyIsDown(81)) {
		if (ball.r >= 3) {ball.r -= 3;}
	}
	if (keyIsDown(80)) {
		if (ball.r <= 252) {ball.r += 3;}
	}
	if (keyIsDown(65)) {
		if (ball.g >= 3) {ball.g -= 3;}
	}
	if (keyIsDown(76)) {
		if (ball.g <= 252) {ball.g += 3;}
	}
	if (keyIsDown(90)) {
		if (ball.b >= 3) {ball.b -= 3;}
	}
	if (keyIsDown(77)) {
		if (ball.b <= 252) {ball.b += 3;}
	}
}