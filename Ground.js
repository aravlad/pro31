class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.width = width;
      this.height = height;

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };