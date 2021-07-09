class Iron{
    constructor(x,y){
       var options = {
          restitution:0.8,
          friction:3,
          density:30
       };
       this.x=x;
       this.y=y;
       this.body=Bodies.rectangle(x,y,100,50,options)
       World.add(world,this.body);
       this.width=100;
       this.height=50;
    }; 
    display()
    {
       var IronPos = this.body.position;
       push()
       translate(IronPos.x,IronPos.y);
       rectMode(CENTER)
       fill("red");
       rect(0,0,this.width,this.height);
       pop()
 
 
    };
 };