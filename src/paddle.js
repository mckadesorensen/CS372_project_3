export default class Paddle {
    constructor(game) {
        
        this.width = 10;
        this.height = 50;
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.maxSpeed = 5;
        this.speed = 0;

        this.position = {
            x: this.width/2,
            y: this.gameHeight / 2 - this.height / 2,
        };
    }
    
    draw(ctx) {
        
        ctx.fillStyle = 'black';
        
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }

    update(deltaTime){
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