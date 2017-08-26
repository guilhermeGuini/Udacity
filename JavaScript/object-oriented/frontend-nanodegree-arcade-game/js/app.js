
(function(global){

    var constants = {
        TAM_BLOCO    : 100,
        JUMP_PLAYER  : 50,
        JUMP_BUG     : 100,
        QTDEBLOCOS   : 5,
        HEIGTH_BUG   : 70,
        WIDTH_BUG    : 78
    };

    var player, allEnemies;

    var app = {

        createEnemy: function(count) {
            var arrEnemys = [];

            for(var i = 0; i < count; i++)
             arrEnemys.push(new Enemy());

            return arrEnemys;
        },

        reset: function() {
        },

        cancelAnimation: function() {
        },

        checkColision: function(enemy) {
            return (this.colidiuColuna(enemy) &&
                this.colidiuLinha(enemy));
        },

        colidiuLinha: function(enemy) {
            return (player.x >= enemy.x &&
                         player.x <= enemy.x + constants.WIDTH_BUG);
        },

        colidiuColuna: function(enemy) {
            return (player.y >= enemy.y  &&
                        player.y <= enemy.y + constants.HEIGTH_BUG);
        },

        init: function() {
            player = new Player();
            allEnemies = this.createEnemy(15);

            document.addEventListener('keyup', function(e) {

                var allowedKeys = {
                    37: 'left',
                    38: 'up',
                    39: 'right',
                    40: 'down'
                };

                player.handleInput(allowedKeys[e.keyCode]);
            });

        }
    };

    app.init();
    global.app = app;
    global.constants = constants;
    global.player    = player;
    global.allEnemies = allEnemies;

})(this);

