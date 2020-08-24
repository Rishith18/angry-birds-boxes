class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color(random(0,255),random(0,255),random(0,255));
    
    World.add(world, this.body);
    console.log(this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill(this.color);
    stroke("red");
    strokeWeight(4);
    rect(0,0, this.width, this.height);
    pop();
  }
};
