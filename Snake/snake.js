class Snake {
	constructor() {
		this.speed = 5;
		this.pos = createVector(width / 2, height / 2);			// position coordinates of head of the snake
		this.vel = createVector(0, -this.speed);
		this.len = 3;
		this.blocks = [];										// The head is the last index in blocks, the tail is the 0th
		for (let i = this.len - 1; i >= 0; i--) {
			let newVect = p5.Vector.sub(this.pos, p5.Vector.mult(this.vel, i));
			this.blocks.push(newVect);
		}
	}

	move() {
		if (this.blocks.length == this.len) this.blocks.shift();
		this.pos.add(this.vel);
		if (this.pos.x < 0) {this.pos.x += width};
		if (this.pos.x > width) {this.pos.x -= width};
		if (this.pos.y < 0) {this.pos.y += height};
		if (this.pos.y > height) {this.pos.y -= height}; 
		this.blocks.push(this.pos.copy());
	}

	show() {
		rectMode(CENTER);
		noStroke();
		fill(255);
		for (var i = this.blocks.length - 1; i >= 0; i--) {
			rect(this.blocks[i].x, this.blocks[i].y, 2*this.speed, 2*this.speed);
		}
	}

	eatSelf() {
		for (var i = this.blocks.length - 2; i >= 0; i--) {
			return (dist(this.blocks[i].x, this.blocks[i].y, this.pos.x, this.pos.y) >= 1.01 *this.speed);
		}
	}

}