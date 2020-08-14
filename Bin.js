class Bin extends BaseClass {
  constructor(x, y, width, height) {
    super(x,y,width,height);
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body);
  }
  display(){
    imageMode(CENTER);
    image(this.image, 1150, 650, this.width, this.height);
  }
}