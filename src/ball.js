export default class Ball {
    constructor(game){
        this.image = document.getElementById("img_ball");
        this.size = 16;
        let ys = Math.floor((Math.random() * (game.gameHeight - 100)) + 1);
        let xs = game.gameWidth/2;
        this.position = {x: xs, y: ys};
        this.speed = {x: 5, y: 5};
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.game = game;
    }

    draw(ctx){
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
            );

    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.game.gamestate = 3;
        }
        if(this.position.y + this.size > this.gameHeight || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }
        
        let topOfPad = this.game.paddle.position.y;
        let botOfPad = this.game.paddle.position.y + this.game.paddle.height;

        if(this.position.x <= this.game.paddle.position.x + this.game.paddle.width
            && this.position.y >= topOfPad
            && this.position.y <= botOfPad)
        {
            this.speed.x = -this.speed.x;
        }

        let topOfAi = this.game.ai.position.y - 6;
        let botOfAi = this.game.ai.position.y + this.game.ai.height;

        if((this.position.x + this.size) >= this.game.ai.position.x
            && this.position.y >= topOfAi
            && this.position.y <= botOfAi)
        {
            this.speed.x = -this.speed.x;
        }
        
    }
}