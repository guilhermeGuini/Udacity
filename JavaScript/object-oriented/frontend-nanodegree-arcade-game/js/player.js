// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
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
                this.x -= JUMP;
         break;
        case 'up':
            if(this.y > 0)
                this.y  -= JUMP/2;
         break;
        case 'right':
            if(this.x <  (TAM_BLOCO  * QTDEBLOCOS) - TAM_BLOCO)
                this.x += JUMP;
         break;
        case 'down':
            if(this.y < 400)
                this.y += JUMP/2;
         break;
    }
};
