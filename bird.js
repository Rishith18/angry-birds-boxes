class Bird {
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.width = 50;
        this.height = 50;
        this.color = "red";

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        stroke("grey");
        strokeWeight(4);
        fill(this.color);
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}