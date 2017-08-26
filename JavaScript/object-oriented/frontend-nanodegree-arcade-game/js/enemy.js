// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   if(this.x === 0 || this.x > (constants.QTDEBLOCOS + 1) * constants.TAM_BLOCO)
        this.initPosition();
    else
        this.x += (constants.JUMP_BUG * dt);
};

Enemy.prototype.initPosition = function() {
    var thisEnemy = this;

    this.x = -2 * (Math.random() * 600);
    this.y = (Math.random() * 200) + 50;

    var qtdColisao = 0;

    allEnemies.forEach(function(enemy) {
        if( (thisEnemy.y - constants.TAM_BLOCO) <= enemy.y &&
            (thisEnemy.y + constants.TAM_BLOCO) >= enemy.y )
           qtdColisao++;
    });

    if(qtdColisao > 1)
         this.y = (Math.random() * 200) + 50;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};