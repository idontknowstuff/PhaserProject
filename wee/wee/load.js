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
        this.load.image("title", "assets/title.png");
        this.load.image("go", "assets/go.png");
        this.load.image("blocks", "assets/blocks.png");
        this.load.image("checkBtn", "assets/checkBtn.png");
    }

    create(){
        this.add.text(20, 20, "loading game...");
        this.scene.start("playGame");
    }



}