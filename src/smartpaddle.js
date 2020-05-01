export default class SmrtPaddle {
    constructor(gameWidth, gameHeight) {
        
        this.width = 15;
        this.height = 150;

        this.position = {
            x: gameWidth - this.width*1.5,
            y: gameHeight / 2 - this.height / 2,
        };
    }
    
    draw(ctx) {
        
        ctx.fillStyle = 'black';
        
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}