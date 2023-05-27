function Stone(){
  this.x;
  this.y;
  this.xStoneL = [];
  this.yStoneL = [];
  

  this.StoneLocation = function(){
    for(var i = 0; i <= snake.total; i++){
      this.xStoneL[i] = (Math.floor(Math.random() * row - 1 ) + 1) * scale;
      this.yStoneL[i] = (Math.floor(Math.random() * col - 1 ) + 1) * scale;
    
    }
   
  }
  this.DrawStone = function (){
      ctx.fillStyle = '#808080';
      for(var i = 0; i <= snake.total; i++){
        ctx.fillRect(this.yStoneL[i], this.xStoneL[i], scale,scale);

      }
   
  }
}