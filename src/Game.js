Ball.Game = function(game) {};
Ball.Game.prototype = {
    create: function() {
		this.add.sprite(0, 0, 'screen-bg');
		this.add.sprite(0, 0, 'panel');
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.fontSmall = { font: "16px Arial", fill: "#e4beef" };
		this.fontBig = { font: "24px Arial", fill: "#e4beef" };
		this.fontMessage = { font: "24px Arial", fill: "#e4beef",  align: "center", stroke: "#320C3E", strokeThickness: 4 };
		this.audioStatus = true;
		this.timer = 0;
		this.totalTimer = 0;
		this.level = 1;
		this.maxLevels = 5;
		this.movementForce = 10;
        this.ballStartPos = { x: Ball._WIDTH*0.5, y: 450 };
        this.ball= this.add.sprite(this.ballStartPos.x,this.ballStartPos.y,'ball');
        this.ball.anchor.set(0.5);
        this.physics.enable(this.ball,Phaser.Physics.ARCADE);
        this.ball.body.setSize(18,18);
        this.ball.body.bounce.set(0.3,0.3);
        this.keys = this.game.input.keyboard.createCursorKeys();
        Ball._player = this.ball;
        //window.addEventListener("deviceorientation",this.handleOrientation,true);
        window.addEventListener("devicemotion",this.handleOrientation,true);
    
    
    },



    initLevels: function() {},
    showLevel: function(level) {},
    updateCounter: function() {},
    managePause: function() {},
    manageAudio: function() {},
    update: function() {
        if (this.keys.left.isDown) {
            this.ball.body.velocity.x -= this.movementForce;
        }
        else if(this.keys.right.isDown) {
            this.ball.body.velocity.x+=this.movementForce;

        }
        if (this.keys.up.isDown) {
            this.ball.body.velocity.y -= this.movementForce;
        }
        else if(this.keys.down.isDown) {
            this.ball.body.velocity.y+=this.movementForce;

        }

//

    },
    wallCollision: function() {},
    handleOrientation: function(e) {
            alert(1);
            var x = e.gamma;
            var y = e.beta;
            Ball._player.body.velocity.x += x;
            Ball._player.body.velocity.y += y;
    },
    finishLevel: function() {}
};