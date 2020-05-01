export default class Paddle {
    constructor(gameWidth, gameHeight) {
        
        this.width = 15;
        this.height = 150;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
            x: this.width/2,
            y: gameHeight / 2 - this.height / 2,
        };
    }
    
    draw(ctx) {
        
        ctx.fillStyle = 'black';
        
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }

    update(deltaTime){
        if (!deltaTime) return;

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


}