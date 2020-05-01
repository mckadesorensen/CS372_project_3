import Paddle from '/src/paddle.js';
import SmrtPaddle from '/src/smartpaddle.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0 ,0, GAME_WIDTH, GAME_HEIGHT);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ai = new SmrtPaddle(GAME_WIDTH, GAME_HEIGHT);

ai.draw(ctx);
paddle.draw(ctx);