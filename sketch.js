function setup() {
  createCanvas(480,800);
  // createSprite(400, 200, 50, 50);

  
  ground = new Ground(240,790,480,50);
  ground.color="red"
}

function draw() {
  background(0);  
  drawSprites();

}