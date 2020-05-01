class paddle{
    constructor(gameWidth, gameHeight){
        this.width = 30;
        this.height = 150;

        this.position = {
            x: gameWidth - this.width - 10,
            y: gameHeight / 2 - this.Heigth / 2,
        }
    }
    draw(ctx){
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}