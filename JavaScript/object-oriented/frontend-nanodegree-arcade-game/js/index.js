(function(global) {
    
    var view = {
        initTransactions: function() {
            $('.h1-title').transition('fly up', 500, function(){
                $('.sub-title').transition('fly left', 1000, function() {
                    $('#content').transition('fly rigth', 1000, function () {
                        $('.image')
                            .transition({
                            animation : 'jiggle',
                            reverse   : true,
                            interval  : 200
                            });
                    });
                });
            });
        },

        initEvents: function() {
            $('.card  img').click(function() {
                if($(this).hasClass('img-active'))
                    $(this).removeClass('img-active');
                else {
                    $('.card img').each(function(){
                        $(this).removeClass('img-active');
                    });

                    $(this).addClass('img-active');
                }
            });

            $('#btnComecar').click(function() {
                if($('.img-active').length > 0) {
                    view.start();
                }
                else
                    $('.message').show();
            });
        },

        start: function() {
            localStorage.charImgSrc = $('.img-active').attr('src').toString();
            localStorage.start = true;
            player.sprite = localStorage.charImgSrc;
            $('.message').hide();
            $('.container').hide();
            $('body').addClass('background-game');
            window.Resources.onReady(Engine.init());
        },

        init: function() {
            if(Boolean(localStorage.start)) {
                /* this.start();
                return;*/
            }

            this.initTransactions();
            this.initEvents();
        }
    };

    view.init();
})(this);