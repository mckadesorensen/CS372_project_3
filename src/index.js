import Paddle from '/src/paddle.js';
import SmrtPaddle from '/src/smartpaddle.js';
import InputHandler from '/src/input.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0 ,0, GAME_WIDTH, GAME_HEIGHT);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ai = new SmrtPaddle(GAME_WIDTH, GAME_HEIGHT);

ai.draw(ctx);
paddle.draw(ctx);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0 ,0, GAME_WIDTH, GAME_HEIGHT);

    paddle.update(deltaTime);
    ai.update(deltaTime);
    paddle.draw(ctx);
    ai.draw(ctx);
 
    requestAnimationFrame(gameLoop);
}

gameLoop();