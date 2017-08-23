var TAM_BLOCO = 100;
var JUMP = 50;
var JUMP_BUG = 100;
var QTDEBLOCOS = 5;

var player;
var allEnemies;

createEnemy = function(count) {
    var arrEnemys = [];

    for(var i = 0; i < count; i++)
        arrEnemys.push(new Enemy());

    return arrEnemys;
};

init = function() {
    player = new Player();
    allEnemies = this.createEnemy(20);

    document.addEventListener('keyup', function(e) {

        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        player.handleInput(allowedKeys[e.keyCode]);
    });

};

init();