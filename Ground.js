class Ground
{
  constructor(x,y,w,h)
  {
    var object_options={
       // restitution:0.8,
        isStatic:true,
       // density:1.0
      }
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
     this.body=Bodies.rectangle( this.x,this.y,this.w,this.h,object_options);
     World.add(worldVar,this.body);
  }
  display()
  {
    var pos= this.body.position;
    rectMode(CENTER);
    fill("red");
    rect( pos.x, pos.y,this.w,this.h);
  }
}