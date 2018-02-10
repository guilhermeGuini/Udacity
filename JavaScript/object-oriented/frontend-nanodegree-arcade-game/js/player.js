
let Player = function() {
    this.x = 0;
    this.y = 400;
    this.win = false;
    this.loose = false;
    this.width = 65;
    this.height = 85;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.wins = function() {
    return this.y === 0;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if(!key)
        return;

    switch(key) {
        case 'left':
            this.moveToLeft();
         break;
        case 'up':
            this.moveToUp();
         break;
        case 'right':
            this.moveToRight();
         break;
        case 'down':
            this.moveToDown();
         break;
    }
};

Player.prototype.moveToLeft = function() {
    if(this.x > 0)
        this.x -= constants.JUMP_PLAYER;
}

Player.prototype.moveToRight = function() {
    if(this.x <  (constants.SIZE_BLOCK  * constants.COUNT_BLOCKS) - constants.SIZE_BLOCK)
        this.x += constants.JUMP_PLAYER;
}

Player.prototype.moveToUp = function() {
    if(this.y > 0)
        this.y  -= constants.JUMP_PLAYER/2;
}

Player.prototype.moveToDown = function() {
    if(this.y < 400)
        this.y += constants.JUMP_PLAYER/2;
}
