
function Fruit(){
    this.x;
    this.y;

    this.FruitLocation = function(){
         this.x = (Math.floor(Math.random() * row - 1 ) + 1) * scale;
         this.y = (Math.floor(Math.random() * col - 1 ) + 1) * scale;
    }
    this.Draw = function (){
        ctx.fillStyle = '#32CD32';
        ctx.fillRect(this.y, this.x, scale,scale);
    }
}