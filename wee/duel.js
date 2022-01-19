class Duel extends Phaser.Scene {
    constructor() {
        super("Duel");
    }

    create(){
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0,0);

        var text = this.add.text(100,100, 'THIS IS Duel');
        
        this.add.image(0, 200, "WorkPlace").setOrigin(0,0);
        this.add.image(0, 100, "QuestionPlace").setOrigin(0,0);

        var BackBtn = this.add.image(50,25, "Back");
        BackBtn.setInteractive({useHandCursor: true});
        BackBtn.on('pointerdown', () => this.clickBackButton());
        
        this.loadquestion();
    }

    update(){

    }

    clickBackButton(){
        // input.manager.resetCursor({ cursor: true });
        this.scene.switch('DuelPrep');
    }

    loadquestion(){
        var myproblem = JSON.parse(problem);
        alert(myproblem.sport);
        // alert(myproblem[0].answer);
    }



}