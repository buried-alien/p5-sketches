class Food {
	constructor() {
		let overlap = true;
		this.radius = 10;
		while (overlap) {
			overlap = false;
			this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius));
			for (var i = snake.blocks.length - 1; i >= 0; i--) {
				if (dist(this.pos.x, this.pos.y, snake.blocks[i].x, snake.blocks[i].y) < this.radius + snake.speed) {
					overlap = true;
				}
			}
		}
	}

	show() {
		noStroke();
		fill(255, 100, 0);
		circle(this.pos.x, this.pos.y, this.radius * 2);
	}

	collide(snake) {
		return dist(snake.pos.x, snake.pos.y, this.pos.x, this.pos.y) < this.radius
	}
}