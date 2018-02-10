(function(global){

    var enemyFactory = {

        createEnemies: function(countEnemies) {
            var arrEnemys = [];

            for(var i = 0; i < countEnemies; i++) {
                let enemy = new Enemy();
                enemy.initPosition(arrEnemys);
                arrEnemys.push(enemy);
            }

            return arrEnemys;
        }
    };

    global.enemyFactory = enemyFactory;

})(this);