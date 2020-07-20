class BaseClass {
  constructor(x, y, width, height, angle) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    this.image = loadImage("sprite1.png");
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    if (this.body.speed < 10 ) {
      
    }
    else {
      push();
      World.remove(world, this.body)
      this.visibility -= 5;
      tint(255, this.visibility);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
}

