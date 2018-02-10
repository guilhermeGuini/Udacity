/**
 * Objeto reponsável por ciar os bugs e fazer
 * as demais verificações
 */

(function(global){

    var player, allEnemies;

    var app = {

        reset: function() {
        },

        cancelAnimation: function() {
        },

        checkColision: function(enemy) {
            return (this.checkColisionColumn(enemy) &&
                this.checkColisionRow(enemy));
        },

        checkColisionColumn: function(enemy) {
            return (player.y >= enemy.y && 
                    player.y <= enemy.y + constants.HEIGTH_BUG) ||
                   (player.y + player.height >= enemy.y &&
                    player.y + player.height <= enemy.y + constants.HEIGTH_BUG);
        },

        checkColisionRow: function(enemy) {
            return (player.x >= enemy.x && 
                    player.x <= enemy.x + constants.WIDTH_BUG) ||
                   (player.x + player.width >= enemy.x &&
                    player.x + player.width <= enemy.x + constants.WIDTH_BUG);
        },

        init: function() {
            player = new Player();
            allEnemies = enemyFactory.createEnemies(constants.COUNT_ENEMYS);
            this.createEventKeyUp();
        },

        createEventKeyUp: function() {
            document.addEventListener('keyup', function(e) {
                var allowedKeys = {
                    37: 'left',
                    38: 'up',
                    39: 'right',
                    40: 'down'
                };
                player.handleInput(allowedKeys[e.keyCode]);
            });
        },

        win: function() {
            fireworks.start();
        }
    };

    app.init();
    global.app = app;
    global.player    = player;
    global.allEnemies = allEnemies;

})(this);
