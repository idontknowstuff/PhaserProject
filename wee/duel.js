class Duel extends Phaser.Scene {
    constructor() {
        super("Duel");
    }

    

    create(){

        // variables
        var playerHealth = 5;
        var EnemyHealth = 5;
        var playerprogress = 4;
        var enemyprogress = 1;

        // background
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0,0);

        // progress bar for amount of questions completed
        // enemy bar
        let enemyProgressBar = this.makeBar(950,600,0x900f0f);
        this.setValue(enemyProgressBar, enemyprogress*20);
        // player bar
        let playerProgressBar = this.makeBar(900,600,0x1eb053);
        this.setValue(playerProgressBar, playerprogress*20);

        // text
        var text = this.add.text(200,50, playerHealth);
        var text = this.add.text(600,50, EnemyHealth);
        var enemyY = this.mini(575 - enemyprogress*100, 575);
        var playerY = this.mini(575 - playerprogress*100, 575);
        var text = this.add.text(970, enemyY, enemyprogress, {fontSize: '20px', fill: "#000000", stroke: '#000000', strokeThickness: 1});
        var text = this.add.text(920, playerY, playerprogress, {fontSize: '20px', fill: "#000000", stroke: '#000000', strokeThickness: 1});

        // timer
        // const timerLabel = this.add.text(50,50, "45");
 
        // work place, question place, blocks place
        this.add.image(0, 200, "WorkPlace").setOrigin(0,0);
        this.add.image(0, 100, "QuestionPlace").setOrigin(0,0);

        // blocks
        var block1 = this.add.image(575, 250, "blocks");
        var block2 = this.add.image(575, 350, "blocks");
        var block3 = this.add.image(575, 450, "blocks");
        var block4 = this.add.image(575, 550, "blocks");

        // make the blocks draggable
        block1.setInteractive();
        block2.setInteractive();
        block3.setInteractive();
        block4.setInteractive();
        this.input.setDraggable(block1);
        this.input.setDraggable(block2);
        this.input.setDraggable(block3);
        this.input.setDraggable(block4);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        //  4 drop zones
        var zone1 = this.add.zone(200, 250, 300, 300).setRectangleDropZone(100, 50);
        var zone2 = this.add.zone(200, 350, 300, 400).setRectangleDropZone(100, 50);
        var zone3 = this.add.zone(200, 450, 300, 500).setRectangleDropZone(100, 50);
        var zone4 = this.add.zone(200, 550, 300, 600).setRectangleDropZone(100, 50);

        //  Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone1.x - zone1.input.hitArea.width / 2, zone1.y - zone1.input.hitArea.height / 2, zone1.input.hitArea.width, zone1.input.hitArea.height);
        graphics.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
        graphics.strokeRect(zone3.x - zone3.input.hitArea.width / 2, zone3.y - zone3.input.hitArea.height / 2, zone3.input.hitArea.width, zone3.input.hitArea.height);
        graphics.strokeRect(zone4.x - zone4.input.hitArea.width / 2, zone4.y - zone4.input.hitArea.height / 2, zone4.input.hitArea.width, zone4.input.hitArea.height);
        

        this.input.on('dragenter', function (pointer, gameObject, dropZone) {

            graphics.clear();
            graphics.lineStyle(2, 0x00ffff);
            graphics.strokeRect(zone1.x - zone1.input.hitArea.width / 2, zone1.y - zone1.input.hitArea.height / 2, zone1.input.hitArea.width, zone1.input.hitArea.height);
            graphics.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
            graphics.strokeRect(zone3.x - zone3.input.hitArea.width / 2, zone3.y - zone3.input.hitArea.height / 2, zone3.input.hitArea.width, zone3.input.hitArea.height);
            graphics.strokeRect(zone4.x - zone4.input.hitArea.width / 2, zone4.y - zone4.input.hitArea.height / 2, zone4.input.hitArea.width, zone4.input.hitArea.height);

        });

        this.input.on('dragleave', function (pointer, gameObject, dropZone) {

            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone1.x - zone1.input.hitArea.width / 2, zone1.y - zone1.input.hitArea.height / 2, zone1.input.hitArea.width, zone1.input.hitArea.height);
            graphics.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
            graphics.strokeRect(zone3.x - zone3.input.hitArea.width / 2, zone3.y - zone3.input.hitArea.height / 2, zone3.input.hitArea.width, zone3.input.hitArea.height);
            graphics.strokeRect(zone4.x - zone4.input.hitArea.width / 2, zone4.y - zone4.input.hitArea.height / 2, zone4.input.hitArea.width, zone4.input.hitArea.height);

        });

        this.input.on('drop', function (pointer, gameObject, dropZone) {

            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;

            console.log(gameObject);

            gameObject.input.enabled = true;

        });

        this.input.on('dragend', function (pointer, gameObject, dropped) {

            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }

            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone1.x - zone1.input.hitArea.width / 2, zone1.y - zone1.input.hitArea.height / 2, zone1.input.hitArea.width, zone1.input.hitArea.height);
            graphics.strokeRect(zone2.x - zone2.input.hitArea.width / 2, zone2.y - zone2.input.hitArea.height / 2, zone2.input.hitArea.width, zone2.input.hitArea.height);
            graphics.strokeRect(zone3.x - zone3.input.hitArea.width / 2, zone3.y - zone3.input.hitArea.height / 2, zone3.input.hitArea.width, zone3.input.hitArea.height);
            graphics.strokeRect(zone4.x - zone4.input.hitArea.width / 2, zone4.y - zone4.input.hitArea.height / 2, zone4.input.hitArea.width, zone4.input.hitArea.height);

        });

        // back button
        var BackBtn = this.add.image(50, 25, "Back");
        BackBtn.setInteractive({useHandCursor: true});
        BackBtn.on('pointerdown', () => this.clickBackButton());
        
        // loads question
        this.loadquestion();
        

    }

    update(){

    }

    clickBackButton(){
        // input.manager.resetCursor({ cursor: true });
        this.scene.switch('DuelPrep');
    }

    makeBar(x, y, color){
        let bar = this.add.graphics();

        // coloring the bar
        bar.fillStyle(color, 1);

        // add rectangle
        bar.fillRect(0, 0, 50, 500);

        // where the bar is
        bar.x = x;
        bar.y = y;

        // returns the results of the bar
        return bar;
    }

    // sets the bar's percentage
    setValue(bar, percentage){
        bar.scaleY = -percentage/100;
    }

    mini(a, b){
        if (a < b){
            return a;
        }
        else{
            return b;
        }
    }

    loadquestion(){
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                var style = { font: "20px Arial", fill: "#00ff00", align: "center", wordWrap: { width: 600 } };
                var text = this.add.text(25,125,data.questions[1].question, style);
                text.setColor("#00ff00");

            })
            .catch(error => console.log(error));
    }
}
