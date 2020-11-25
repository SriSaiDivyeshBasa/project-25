 class paperClass{
      constructor(x,y,width,height,angle){
        var options={
          isStattic:false,
          restitution:0.3,
          density:1.2
           this.image = loadImage("/projectsassets.s3.us-east-2.amazonaws.com");
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      function keyPresed(){
        if(keyCode===up_arrow){
          Matter.bodyApplyForce(paperObject.body,paperobject.body.position,{x:85,y:85});
        }
      }
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}