export default class InputHandler {
    constructor(paddle){
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case 38:
                    paddle.moveUp();
                    break;
                case 40:
                    paddle.moveDown();
                    break;
                case 87:
                    paddle.moveUp();
                    break;
                case 83:
                    paddle.moveDown();
                    break;
            }
        });
        
    }
}