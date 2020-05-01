import Paddle from '/src/paddle.js';
import SmrtPaddle from '/src/smartpaddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        

    }

    start(){
        this.paddle = new Paddle(this);
        this.ai = new SmrtPaddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle);
    }

    update(deltaTime){
        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);
        this.ai.update(deltaTime);
    }

    draw(ctx){
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
        this.ai.draw(ctx);
    }
}