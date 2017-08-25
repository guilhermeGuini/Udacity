
(function(global){

    var constants = {
        TAM_BLOCO    : 100,
        JUMP_PLAYER  : 50,
        JUMP_BUG     : 100,
        QTDEBLOCOS   : 5
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

        init: function() {
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

        }
    };

    app.init();
    global.app = app;
    global.constants = constants;
    global.player    = player;
    global.allEnemies = allEnemies;

})(this);

