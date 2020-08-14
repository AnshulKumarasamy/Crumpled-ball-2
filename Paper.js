class Paper extends BaseClass {
    constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
}