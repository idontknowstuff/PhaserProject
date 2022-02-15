class Duel extends Phaser.Scene {
    constructor() {
        super("Duel");

        this.block1;
        this.block2;
        this.block3;
        this.block4;
        this.block1text;
        this.block2text;
        this.block3text;
        this.block4text;
        this.time;
        // this.zone1;
        // this.zone2;
        // this.zone3;
        // this.zone4;
        this.trueanswer;
        this.rightwrong;
        // this.answer = ["0","0","0","0"];
    }

    

    create(){

        // variables
        var playerHealth = 5;
        var EnemyHealth = 5;
        var playerprogress = 4;
        var enemyprogress = 1;
        this.timer = 300;
        
        const arr = ["0","0","0","0"];

        this.trueanswer = arr;

        const useranswer = ["0","0","0","0"];
        this.rightwrong = [0,0,0,0];

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
        this.time = this.add.text(350, 50, this.timer);
        // timer
        // const timerLabel = this.add.text(50,50, "45");
 
        // work place, question place, blocks place
        this.add.image(0, 200, "WorkPlace").setOrigin(0,0);
        this.add.image(0, 100, "QuestionPlace").setOrigin(0,0);

        // blocks and sets name
        this.block1 = this.add.image(575, 250, "blocks").setName("1");
        this.block2 = this.add.image(575, 350, "blocks").setName("2");
        this.block3 = this.add.image(575, 450, "blocks").setName("3");
        this.block4 = this.add.image(575, 550, "blocks").setName("4");

        // empty text variables for later inserting uses 
        this.block1text = this.add.text(200,300, "");
        this.block2text = this.add.text(200,300, "");
        this.block3text = this.add.text(200,300, "");
        this.block4text = this.add.text(200,300, "");

        // set names for blocks
        // block1.setName("block1");
        // block2.setName("block2");
        // block3.setName("block3");
        // block4.setName("block4");

        // make the blocks draggable
        this.block1.setInteractive();
        this.block2.setInteractive();
        this.block3.setInteractive();
        this.block4.setInteractive();
        this.input.setDraggable(this.block1);
        this.input.setDraggable(this.block2);
        this.input.setDraggable(this.block3);
        this.input.setDraggable(this.block4);

        this.input.on('dragstart', function (pointer, gameObject, dragX, dragY){
            
        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;


        });

        //  4 drop zones and sets the names
        this.zone1 = this.add.zone(200, 250, 300, 300).setRectangleDropZone(100, 50).setName("1");
        this.zone2 = this.add.zone(200, 350, 300, 400).setRectangleDropZone(100, 50).setName("2");
        this.zone3 = this.add.zone(200, 450, 300, 500).setRectangleDropZone(100, 50).setName("3");
        this.zone4 = this.add.zone(200, 550, 300, 600).setRectangleDropZone(100, 50).setName("4");


        //  Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(this.zone1.x - this.zone1.input.hitArea.width / 2, this.zone1.y - this.zone1.input.hitArea.height / 2, this.zone1.input.hitArea.width, this.zone1.input.hitArea.height);
        graphics.strokeRect(this.zone2.x - this.zone2.input.hitArea.width / 2, this.zone2.y - this.zone2.input.hitArea.height / 2, this.zone2.input.hitArea.width, this.zone2.input.hitArea.height);
        graphics.strokeRect(this.zone3.x - this.zone3.input.hitArea.width / 2, this.zone3.y - this.zone3.input.hitArea.height / 2, this.zone3.input.hitArea.width, this.zone3.input.hitArea.height);
        graphics.strokeRect(this.zone4.x - this.zone4.input.hitArea.width / 2, this.zone4.y - this.zone4.input.hitArea.height / 2, this.zone4.input.hitArea.width, this.zone4.input.hitArea.height);
        

        this.input.on('dragenter', function (pointer, gameObject, dropZone) {

            graphics.clear();
            graphics.lineStyle(2, 0x00ffff);
            // console.log(gameObject.x);
            graphics.strokeRect(dropZone.x - dropZone.input.hitArea.width / 2, dropZone.y - dropZone.input.hitArea.height / 2, dropZone.input.hitArea.width, dropZone.input.hitArea.height);
            // graphics.strokeRect(this.zone2.x - this.zone2.input.hitArea.width / 2, this.zone2.y - this.zone2.input.hitArea.height / 2, this.zone2.input.hitArea.width, this.zone2.input.hitArea.height);
            // graphics.strokeRect(this.zone3.x - this.zone3.input.hitArea.width / 2, this.zone3.y - this.zone3.input.hitArea.height / 2, this.zone3.input.hitArea.width, this.zone3.input.hitArea.height);
            // graphics.strokeRect(this.zone4.x - this.zone4.input.hitArea.width / 2, this.zone4.y - this.zone4.input.hitArea.height / 2, this.zone4.input.hitArea.width, this.zone4.input.hitArea.height);

        }, this);

        this.input.on('dragleave', function (pointer, gameObject, dropZone) {

            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(dropZone.x - dropZone.input.hitArea.width / 2, dropZone.y - dropZone.input.hitArea.height / 2, dropZone.input.hitArea.width, dropZone.input.hitArea.height);
            // graphics.strokeRect(this.zone1.x - this.zone1.input.hitArea.width / 2, this.zone1.y - this.zone1.input.hitArea.height / 2, this.zone1.input.hitArea.width, this.zone1.input.hitArea.height);
            // graphics.strokeRect(this.zone2.x - this.zone2.input.hitArea.width / 2, this.zone2.y - this.zone2.input.hitArea.height / 2, this.zone2.input.hitArea.width, this.zone2.input.hitArea.height);
            // graphics.strokeRect(this.zone3.x - this.zone3.input.hitArea.width / 2, this.zone3.y - this.zone3.input.hitArea.height / 2, this.zone3.input.hitArea.width, this.zone3.input.hitArea.height);
            // graphics.strokeRect(this.zone4.x - this.zone4.input.hitArea.width / 2, this.zone4.y - this.zone4.input.hitArea.height / 2, this.zone4.input.hitArea.width, this.zone4.input.hitArea.height);

        });

        this.input.on('drop', function (pointer, gameObject, dropZone) {

            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;

            // console.log(gameObject.name);
            // console.log(dropZone.name);
            // console.log(dropZone)

            var change = parseInt(dropZone.name);
            
            // console.log("CHECK")
            // console.log(change);
            // console.log(gameObject.name);
            // console.log(answer[change-1]);
            // change answers
            useranswer[change-1] = gameObject.name;
            // console.log(answer[change-1]);

            // console.log(answer);

            gameObject.input.enabled = true;

        });

        this.input.on('dragend', function (pointer, gameObject, dropped) {

            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }

            // graphics.clear();
            // graphics.lineStyle(2, 0xffff00);
            // graphics.strokeRect(dropZone.x - dropZone.input.hitArea.width / 2, dropZone.y - dropZone.input.hitArea.height / 2, dropZone.input.hitArea.width, dropZone.input.hitArea.height);
            // graphics.strokeRect(this.zone1.x - this.zone1.input.hitArea.width / 2, this.zone1.y - this.zone1.input.hitArea.height / 2, this.zone1.input.hitArea.width, this.zone1.input.hitArea.height);
            // graphics.strokeRect(this.zone2.x - this.zone2.input.hitArea.width / 2, this.zone2.y - this.zone2.input.hitArea.height / 2, this.zone2.input.hitArea.width, this.zone2.input.hitArea.height);
            // graphics.strokeRect(this.zone3.x - this.zone3.input.hitArea.width / 2, this.zone3.y - this.zone3.input.hitArea.height / 2, this.zone3.input.hitArea.width, this.zone3.input.hitArea.height);
            // graphics.strokeRect(this.zone4.x - this.zone4.input.hitArea.width / 2, this.zone4.y - this.zone4.input.hitArea.height / 2, this.zone4.input.hitArea.width, this.zone4.input.hitArea.height);

        });

        // back button
        var BackBtn = this.add.image(50, 25, "Back");
        BackBtn.setInteractive({useHandCursor: true});
        BackBtn.on('pointerdown', () => this.clickBackButton());
        
        // loads question
        this.loadquestion();
        
        // setInterval(this.countdown, 1000);
        setInterval(this.countdown.bind(this), 1000);
        // console.log(this.timer);

        // check button to see if answer is correct
        var SubmitBtn = this.add.image(700, 150, "checkBtn");
        SubmitBtn.setInteractive();
        SubmitBtn.on('pointerdown', () => this.clickSubmit(useranswer));
    }

    update(){
        this.block1text.setPosition(this.block1.x, this.block1.y);
        this.block2text.setPosition(this.block2.x, this.block2.y);
        this.block3text.setPosition(this.block3.x, this.block3.y);
        this.block4text.setPosition(this.block4.x, this.block4.y);
        var graphics = this.add.graphics();
        graphics.strokeRect(this.zone1.x - this.zone1.input.hitArea.width / 2, this.zone1.y - this.zone1.input.hitArea.height / 2, this.zone1.input.hitArea.width, this.zone1.input.hitArea.height);
        graphics.strokeRect(this.zone2.x - this.zone2.input.hitArea.width / 2, this.zone2.y - this.zone2.input.hitArea.height / 2, this.zone2.input.hitArea.width, this.zone2.input.hitArea.height);
        graphics.strokeRect(this.zone3.x - this.zone3.input.hitArea.width / 2, this.zone3.y - this.zone3.input.hitArea.height / 2, this.zone3.input.hitArea.width, this.zone3.input.hitArea.height);
        graphics.strokeRect(this.zone4.x - this.zone4.input.hitArea.width / 2, this.zone4.y - this.zone4.input.hitArea.height / 2, this.zone4.input.hitArea.width, this.zone4.input.hitArea.height);
    }

    countdown(){
        this.timer -= 1;
        this.time.setText("Time left: " + this.timer);
        // console.log(this.timer);
    }

    clickBackButton(){
        // input.manager.resetCursor({ cursor: true });
        this.scene.switch('DuelPrep');
    }

    clickSubmit(ans){
        // contains checking
        console.log("checking!");
        console.log(ans);
        console.log(this.trueanswer);

        for (let i = 0; i < 4; i++){
            if (ans[i] == this.trueanswer[i]){
                continue;
            }
            else{
                console.log(i + " is wrong");
            }
        }
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
                var text = this.add.text(25,125,data.questions[0].question, style);
                text.setColor("#00ff00");

                // insert the data into the empty string variables
                this.block1text.setText(data.questions[0].blocks[0]);
                this.block2text.setText(data.questions[0].blocks[1]);
                this.block3text.setText(data.questions[0].blocks[2]);
                this.block4text.setText(data.questions[0].blocks[3]);

                this.trueanswer[0] = data.questions[0].answer[0];
                this.trueanswer[1] = data.questions[0].answer[1];
                this.trueanswer[2] = "0";
                console.log(data.questions[0].answer[2]);
                this.trueanswer[3] = "0";
                console.log(this.trueanswer);
                // var text = this.add.text(200,400,data.questions[1].blocks[1], style);
                // var text = this.add.text(200,500,data.questions[1].blocks[2], style);
                // var text = this.add.text(200,550,data.questions[1].blocks[3], style);


            })
            .catch(error => console.log(error));
    }
}