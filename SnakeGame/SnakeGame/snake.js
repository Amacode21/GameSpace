
function Snake(){
    this.x = 0
    this.y = 0
    this.xSpeed = scale * 1
    this.ySpeed = 0
    this.total = 0
    this.life = 100;
    this.tail = []
   
this.DrawSnake = function(){
    
    ctx.fillStyle = '#000000';
    
    for(let i = 0 ; i < this.tail.length; i++){
        ctx.fillRect(this.tail[i].x, this.tail[i].y, scale,scale)
    }
    ctx.fillRect(this.x, this.y,scale,scale);
}
this.UpdateSnake = function(){
    for(let i = 0; i < this.tail.length - 1; i++){
        this.tail[i] = this.tail[i + 1];
    }
    this.tail[this.total - 1] = {x:this.x, y:this.y };
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    if(this.x > canvas.width){
        this.x = 0;
    }else if(this.x < 0){
        this.x = canvas.width;
    }

    if(this.y > canvas.height){
        this.y = 0;
    }else if(this.y < 0){
        this.y = canvas.height;
    }

}

this.Direction = function(Arrow){
    switch(Arrow){
        case 'Up':
            this.xSpeed = 0;
            this.ySpeed = - scale * 1;
            break;
        case 'Down':
            this.xSpeed = 0;
            this.ySpeed = scale;
            break;
        case 'Left':
            this.xSpeed = - scale * 1;
            this.ySpeed = 0;
            break;
        case 'Right':
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
            break;
    }
}

 this.FoodSnake = function(fruit){
   
    if(this.y === fruit.x && this.x === fruit.y){
        this.total++;
        if(speed > 0){
            speed -= 10;
        }else{
            speed = 10;
        }
        return true;
    }
    return false;   
}
this.CollisionCheck = function(){
    for(var i = 0; i < this.tail.length; i++){
        if(this.x === this.tail[i].x && this.y === this.tail[i].y){
            this.Track(document.querySelector('.HighScore').innerText);
            this.tail = [];
            speed = 200;
            fruit.FruitLocation();
            alert('Game Over');
            this.total = 0;

        }
        
    }
 }
 this.StoneCollide = function(){ 
for(var i = 0 ; i <= this.total; i++){
    if(this.y === stone.xStoneL[i] && this.x ===  stone.yStoneL[i]){
        this.SnakeLife();
        ctx.fillStyle = '#808080';
    }
}
    
  }
  this.Track = function(CurrentHScore){
    if(this.total > CurrentHScore){
        document.querySelector('.HighScore').innerHTML = this.total;    
    }
  }
  this.SnakeLife = function(){
    if(this.life > 10){
        this.life -= 10;

  
        if(this.life === 50){
            document.querySelector('.SnakeHP').style.backgroundColor = "Orangered";
        }else if(this.life  === 20){
            document.querySelector('.SnakeHP').style.backgroundColor = "Red";
        }
    }else{
        this.Track(document.querySelector('.HighScore').innerText);
        document.querySelector('.SnakeHP').style.backgroundColor = "Green";
        this.total = 0;
        this.tail = [];
        speed = 200;
        alert('Game Over');
        this.life = 100;
    }
  }
}