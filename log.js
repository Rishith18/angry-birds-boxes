class Log {
    constructor(x,y,width,angle) {
        var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, 20, options);
        this.width = width;
        this.height = 20;
        this.color = "brown";
        Matter.Body.setAngle(this.body,angle);

        World.add(world, this.body);
    }

    display() {
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(this.color);
        stroke("orange");
        strokeWeight(4);
        rect(0,0, this.width, this.height);
        pop();
    }
}