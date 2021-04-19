class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.trajectory= []
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.velocity.x>1 && this.body.position.x> 200  ){
    var position = [this.body.position.x,this.body.position.y]
    this.trajectory.push (position)
    }
    super.display();
    for (var smoke=0; smoke < this.trajectory.length;smoke++){
      image (this.image2,this.trajectory[smoke][0],this.trajectory[smoke][1])
    }
  }
}
