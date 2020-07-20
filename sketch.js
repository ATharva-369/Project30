
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var gameState = "onSling";

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground1 = new ground(400, 690, 800, 20);
	ground2 = new ground(400, 300, 200, 20);
	World.add(world, ground1);
	block1 = new BaseClass(330, 235, 30, 30);
	block2 = new BaseClass(380, 235, 30, 30);
	block3 = new BaseClass(430, 235, 30, 30);
	block4 = new BaseClass(480, 235, 30, 30);
	block5 = new BaseClass(330, 180, 30, 30);
	block6 = new BaseClass(380, 180, 30, 30);
	block7 = new BaseClass(430, 180, 30, 30);
	block8 = new BaseClass(480, 180, 30, 30);
	block9 = new BaseClass(380, 120, 30, 30);
	block10 = new BaseClass(430, 120, 30, 30);
	block11 = new Box(50, 100, 25, 25);
	rope1 = new rope(block11.body, { x: 100, y: 200 });
	World.add(world, block1);

}


function draw() {
	background("white");
	Engine.update(engine);
	rectMode(CENTER);
	push();
	fill("red")
	text("PRESS SPACE TO RESET", 550, 100)
	pop();
	ground2.display();
	ground1.display();
	push();
	fill("yellow");
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	pop();
	push();
	fill("purple");
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	pop();
	push();
	fill("green");
	block9.display();
	block10.display();
	pop();
	block11.display();
	rope1.display();
	drawSprites();

}
function keyPressed() {
	if (keyCode === 32) {

		rope1.attach(block11.body);
		gameState = "onSling";


	}
}
function mouseDragged() {
	if (gameState === "onSling") {
		Matter.Body.setPosition(block11.body, { x: mouseX, y: mouseY });
	}
}
function mouseReleased() {
	rope1.fly();
	gameState = "launched"
}


