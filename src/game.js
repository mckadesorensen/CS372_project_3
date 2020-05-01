import Paddle from '/src/paddle.js';
import SmrtPaddle from '/src/smartpaddle.js';
import InputHandler from '/src/input.js';
import Ball from '/src/ball.js';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.gamestate = GAMESTATE.MENU
        this.paddle = new Paddle(this);
        this.ai = new SmrtPaddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle, this);
    }

    start(){
        if(this.gamestate == GAMESTATE.RUNNING) return;
        this.ball = new Ball(this);
        this.gamestate = GAMESTATE.RUNNING;
        
    }

    update(deltaTime){

        if(this.gamestate == GAMESTATE.GAMEOVER || this.gamestate == GAMESTATE.PAUSED || this.gamestate == GAMESTATE.MENU) return;

        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);
        this.ai.update(deltaTime);
    }

    draw(ctx){
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
        this.ai.draw(ctx);

        if(this.gamestate == GAMESTATE.PAUSED){
            ctx.rect(0,0,this.gameWidth,this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth/2, this.gameHeight/2);
        }

        if(this.gamestate == GAMESTATE.MENU){
            ctx.rect(0,0,this.gameWidth,this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Space to Start", this.gameWidth/2, this.gameHeight/2);
        }
        if(this.gamestate == GAMESTATE.GAMEOVER){
            ctx.rect(0,0,this.gameWidth,this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Game Over, Press Space to PLay Again", this.gameWidth/2, this.gameHeight/2);
        }
    }

    togglePause(){
        if(this.gamestate == GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        }else{
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}