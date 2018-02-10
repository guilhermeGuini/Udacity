/**
 * Bugs
 */
var Enemy = function() {
   
    this.x = 0;
    this.y = 0;
    this.velocity = (Math.random() * 100) + 50;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {

    if(this.enemyWalkAll())
       this.initPosition();

    this.updatePosition(dt);
};

Enemy.prototype.updatePosition = function(dt) {
    if(this.y === 0) this.definePositionY();
    this.x += dt * (this.velocity + this.x / constants.SIZE_BLOCK);
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.enemyWalkAll = function() {

    return this.x > (constants.COUNT_BLOCKS + 1) * constants.SIZE_BLOCK;
}

Enemy.prototype.definePositionY = function() {
    const SIZE_BLOCK = constants.SIZE_BLOCK;
    const MINIMUM_BLOCK = SIZE_BLOCK;
    const MAX_ATTEMPTS = 3;
    let MIDDLE_BLOCK = SIZE_BLOCK * 2;

    let attempts = 0;
    let hasColision;

    do {
        hasColision = false;
        this.y = (Math.random() * MIDDLE_BLOCK) + MINIMUM_BLOCK;

        allEnemies.forEach(function(enemy) {
            if( (this.y - SIZE_BLOCK) <= enemy.y &&
                (this.y + SIZE_BLOCK) >= enemy.y )
                hasColision = true;
        });

        attempts++;

    } while(hasColision && attempts < MAX_ATTEMPTS);
        
}

Enemy.prototype.initPosition = function() {
    this.x = constants.SIZE_BLOCK * -3;
    this.y = 0;
}