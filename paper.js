class Paper {
constructor(){
    var options = {
        
        restitution:0,
        friction:0,
        density:1.2
    }

      this.radius = 40;  
      this.body = Bodies.circle(250,400,this.radius,options);
      //this.width = 33;
      
      this.image = loadImage("images/paper.png");
      World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("yellow");
        //DeviceRotationRate(angle);
       imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius, this.radius);

    }

}
    
