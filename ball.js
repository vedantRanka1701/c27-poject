class Ball{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.4,
        friction:2,
        density:0.5
    }
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius;
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    push()
    translate (pos.x,pos.y)
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius)
    fill("white");
    pop()
}
}