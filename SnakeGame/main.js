const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const scale = 10;
const row = canvas.height / scale;
const col = canvas.width / scale;
let i = 0;

//var snake;
var lastFrameTime = performance.now();
var speed = 200; // Initial speed of the snake

(function start() {
  snake = new Snake();
  fruit = new Fruit();
  stone = new Stone();
  

  fruit.FruitLocation();
  stone.StoneLocation();

  function gameLoop(currentTime) {
    var deltaTime = currentTime - lastFrameTime; // Calculate the time difference between frames
    if (deltaTime >= speed) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fruit.Draw();
      snake.UpdateSnake();
      snake.DrawSnake();
      stone.DrawStone();
      snake.CollisionCheck();
      snake.StoneCollide();
      if (snake.FoodSnake(fruit)) {
        fruit.FruitLocation(); 
        stone.StoneLocation();
      }
     /*if (snake.StoneCollide(stone)) {
        alert('Game Over');
     }
     */
    document.querySelector('.SnakeHP').innerText = snake.life;
     document.querySelector('.SnakeSpeed').innerText = this.speed;
      document.querySelector('.score').innerText = snake.total;
      lastFrameTime = currentTime; // Update the previous frame timestamp
    }
    // Request the next frame
    window.requestAnimationFrame(gameLoop);
  }
  // Initiate the game loop
  window.requestAnimationFrame(gameLoop);
})();

window.addEventListener('keydown',((evt)=> {
    const Arrow = evt.key.replace('Arrow','');
    snake.Direction(Arrow);
}));

const Button = document.querySelectorAll('.btn');
Button.forEach(Button => {
    Button.addEventListener('click',function(e){
        const ClickArrow = this.getAttribute('data-key');
        snake.Direction(ClickArrow);
    })
})
