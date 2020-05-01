export default class Paddle {
    constructor(gameWidth, gameHeight) {
        
        this.width = 15;
        this.height = 150;

        this.position = {
            x: this.width/2,
            y: gameHeight / 2 - this.height / 2,
        };
    }
    
    draw(ctx) {
        
        ctx.fillStyle = 'black';
        
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}