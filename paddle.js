export default class Paddle {
    constructor(gameWidth, gameHeight) {
        
        this.width = 20;
        this.height = 150;

        this.position = {
            x: gameWidth - this.width - 10,
            y: gameHeight / 2 - this.height / 2,
        };
    }
    
    draw(ctx) {
        
        ctx.fillStyle = '#0ff';
        
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}