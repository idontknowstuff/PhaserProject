class load extends Phaser.Scene {
    constructor() {
        super("loadGame");
    }

    preload(){
        this.load.image("background", "assets/background.png");
        this.load.image("DuelBtn", "assets/DuelBtn.png");
        this.load.image("SinglePlayer", "assets/singlePlayerBtn.png");
        this.load.image("Back", "assets/back.png");
        this.load.image("WorkPlace", "assets/workplace.png");
        this.load.image("QuestionPlace", "assets/questionplace.png");
        this.load.image("MatchBtn", "assets/match.png");
    }

    create(){
        this.add.text(20, 20, "loading game...");
        this.scene.start("playGame");
    }



}