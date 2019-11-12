class Snake {
	constructor() {
		this.len = 0;
		this.body = [];
		this.body[0] = createVector(floor(w/2), floor(h/2));	
		this.xdir = 0;
		this.ydir = 0;
	}

	setDir(x,y) {
		this.xdir = x;
		this.ydir = y;
	}

	update() {
		//this.body[0].x += this.xdir;
		//this.body[0].y += this.ydir;

		let head = this.body[this.body.length - 1].copy();
		this.body.shift();
		head.x += this.xdir;
		head.y += this.ydir;
		this.body.push(head);
	}

	grow() {
		let head = this.body[this.body.length - 1].copy();
		this.len += 1;
		this.body.push(head);
	}

	endGame() {
		let x = this.body[this.body.length - 1].x;
		let y = this.body[this.body.length - 1].y;
		if(x > w-1 || x < 0 || y > h-1 || y < 0) {
			console.log("Sidee");
			return true; 
		}
		for(let i = 0; i< this.body.length-1; i++) {
			console.log("Own body")
			let part = this.body[i];
			if(part.x == x && part.y == y) {
				return true;
			}
		}
		return false;	
	}

	eat(pos) {
		let x = this.body[this.body.length - 1].x;
		let y = this.body[this.body.length - 1].y;
		if(x == pos.x && y ==pos.y) {
			this.grow();
			return true;
		}
		return false;
	}

	show() {
		for (let i = 0;i < this.body.length; i++)	{
			fill(0);
			noStroke();
			rect(this.body[i].x, this.body[i].y, 1,1);
		}
		

	}
}