class rope {
	constructor(body1, point2) {
		var options = {
			bodyA: body1,
			pointB: point2,
			stiffness: 0.05,
			length:15

		}
		//console.log(options);
		this.pointB=point2;
		this.rope = Constraint.create(options)
		World.add(world, this.rope)
	}

	display() {
		if (this.rope.bodyA !== null) {
			var pointA = this.rope.bodyA.position;
			var pointB = this.pointB;

			strokeWeight(2);
			// push();
			// fill("green")

			// var Anchor1X = pointA.x
			/*var Anchor1Y = pointA.y

			var Anchor2X = pointB.x + this.offsetX
			var Anchor2Y = pointB.y + this.offsetY*/

			line(pointA.x,pointA.y,pointB.x,pointB.y);
			// pop();
		}
	}
	fly() {
		this.rope.bodyA = null;


	}
	attach(body) {
		this.rope.bodyA = body;
	}

}
