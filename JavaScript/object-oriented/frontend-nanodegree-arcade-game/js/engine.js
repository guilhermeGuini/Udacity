/**
 * Objeto responsável por atualizar a tela.
 */

(function(global) {
   
    let doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastIdAnimation = '',
        lastTime;
    
    const MILLISECONDS = 1000.0;

    function main() {
        let now = Date.now(),
            dt = (now - lastTime) / MILLISECONDS;

        update(dt);
        render();

        lastTime = now;

        if(endGame()) {
            win.cancelAnimationFrame(lastIdAnimation);
            app.cancelAnimation();
            console.log('cancel');
        } else {
            lastIdAnimation = win.requestAnimationFrame(main);
        }
    }

    function endGame() {
        return player.win || player.loose;
    }

    function init() {
        canvas.width = 505;
        canvas.height = 606;

        $('.container-canvas').append(canvas);
        reset();
        lastTime = Date.now();
        main();
    }

    function update(dt) {
        if(player.wins()) {
            app.win();
        } else {
            updateEntities(dt);
            checkCollisions();
        }
    }

    function checkCollisions() {
        allEnemies.forEach(function(enemy) {
            if(app.checkColision(enemy))
                player.loose = true;
        });
    }

    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });;
    }

    function render() {
        var rowImages = [
                'images/water-block.png',   
                'images/stone-block.png',   
                'images/stone-block.png',   
                'images/stone-block.png',   
                'images/grass-block.png',   
                'images/grass-block.png'   
            ],
            numRows = 6,
            numCols = 5,
            row, col;

       
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
               
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities();
    }

  
    function renderEntities() {
       
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
    }

    
    function reset() {
    }

   
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png'
    ]);

   
    var engine = {};
    engine.init = init;
   // engine.Resources = Resources;

    global.ctx = ctx;
    global.Engine = engine;
})(this);

