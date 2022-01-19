class mainscreen extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create(){
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0,0);
        // no login information yet

        this.scene.start("chooseGame");
    }

    update(){

    }



}