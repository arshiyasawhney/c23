class Box{
    // box1 = new Box()
    constructor(newx,newy,newwidth,newheight){
        var options = {
            restitution : 1.0
          }
          this.body = Bodies.rectangle(newx,newy,newwidth,newheight, options);
          this.width = newwidth;
          this.height = newheight;
          World.add(myWorld,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}