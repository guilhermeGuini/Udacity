// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200;
    this.y = 400;
    this.win = false;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
     if(this.y === 0)
        this.win = true;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if(!key)
        return;

    switch(key) {
        case 'left':
            if(this.x > 0)
                this.x -= constants.JUMP_PLAYER;
         break;
        case 'up':
            if(this.y > 0)
                this.y  -= constants.JUMP_PLAYER/2;
         break;
        case 'right':
            if(this.x <  (constants.TAM_BLOCO  * constants.QTDEBLOCOS) - constants.TAM_BLOCO)
                this.x += constants.JUMP_PLAYER;
         break;
        case 'down':
            if(this.y < 400)
                this.y += constants.JUMP_PLAYER/2;
         break;
    }
};
