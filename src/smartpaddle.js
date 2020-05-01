export default class SmrtPaddle {
    constructor(game) {
        
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.width = 10;
        this.height = 50;
        this.maxSpeed = 5;
        this.speed = 0;
        this.game = game;
        this.swap = true;

        this.position = {
            x: this.gameWidth - this.width*1.5,
            y: this.gameHeight / 2 - this.height / 2,
        };
        this.lposition = {
            x: this.gameWidth - this.width*1.5,
            y: this.gameHeight / 2 - this.height / 2,
        };
    }
    
    draw(ctx) {
        ctx.fillStyle = 'black';
        if(this.swap){
            this.lposition = this.position;
            ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
        }else{
            ctx.fillRect(this.lposition.x,this.lposition.y,this.width,this.height)
        }
        this.swap = !this.swap;
    }

    update(deltaTime){
        if(this.position.y > this.game.ball.position.y){
            this.moveUp();
        }
        if(this.position.y < this.game.ball.position.y){
            this.moveDown();
        }
        this.position.y += this.speed;

        if (this.position.y + this.height > this.gameHeight) {
            this.position.y = this.gameHeight - this.height;
        } else if (this.position.y < 0) {
            this.position.y = 0;
        }
    }

    moveUp(){
        this.speed = -this.maxSpeed;
    }

    moveDown(){
        this.speed = this.maxSpeed;
    }

    stop(){
        this.speed = 0;
    }
}