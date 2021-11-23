let len = 200;
let angle = 0;
let slider;
let angleDisplay;
let level = 0;
let shrinkFactor = 0.67;


colors = ["white", "red", "green", "blue"];

function setup() {
	createCanvas(1000, 600);
	stroke(255);
	slider = createSlider(0, TWO_PI, PI/4, PI/100);
	angleDisplay = createP(angle);
	angle = PI / 3;
}

function draw() {
	background(0);
	angle = slider.value();
	angleDisplay.html((angle/PI).toFixed(2).toString() + ' pi radians');
	translate(width/2, height);
	branch(len);
}

function branch(length) {
	stroke(colors[level % colors.length]);
	level ++;
	line(0, 0, 0, -length);
	translate(0, -length);
	if (length > 4) {
		push();
		rotate(angle);
		branch(shrinkFactor * length);
		pop();
		push();
		rotate(-angle)
		branch(shrinkFactor * length);
		pop();
	}
	level --;
}