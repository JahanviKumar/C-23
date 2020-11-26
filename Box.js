class Box
{
  constructor(x,y,w,h)
  {
    var object_options={
        restitution:0.8,
        isStatic:false,
        density:1.0
      }
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
     this.body=Bodies.rectangle( this.x,this.y,this.w,this.h,object_options);
     World.add(worldVar,this.body);
     console.log(this.body);
  }
  display()
  {
    var pos= this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate(angle);
    rectMode(CENTER);
    rect( 0,0,this.w,this.h);
    pop();
  }
}