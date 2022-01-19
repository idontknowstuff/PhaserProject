class singlePlayer extends Phaser.Scene {
    constructor() {
        super("singlePlayer");
    }

    create(){
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0,0);

        var text = this.add.text(100,100, 'THIS IS SINGLEPLAYER!');
        

    }

    update(){

    }



}