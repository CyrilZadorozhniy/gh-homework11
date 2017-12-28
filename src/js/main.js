$(document).ready(function() {

    if($(window).width() <= 1153) {
        $('.navigation-welcome').clone().insertAfter('.button-toggle-menu').attr('class','navigation-welcome-clone');
        $('.navigation-welcome').remove();
    }
    else {
        $('.navigation-welcome-clone').clone().insertAfter('.ancor').attr('class','navigation-welcome');
        $('.navigation-welcome-clone').remove();
        $('.navigation-welcome').show();
    };

    var hoverBox = function () {
        $('.list-nav>li>a').mouseover(function () {
            $('.list-nav>li>a').removeClass('active');
            $(this).addClass('active');
            $('.list-nav>li').mouseover(function () {
                $('.drobdown').stop().fadeOut(50);
                $(this).find('.drobdown').stop().fadeIn();
            });

        });
        $('.drobdown').hover(
            function () {
            },
            function () {
                $(this).stop().fadeOut();
                $('.list-nav>li>a').removeClass('active');
            }
        );
        $('html body').click(function () {
            $('.drobdown').stop().fadeOut();
            $('.list-nav>li>a').removeClass('active');
        });
    };

    $('.list-nav>li>a').mouseover(function () {
        $('.list-nav>li>a').removeClass('active');
        $(this).addClass('active');
        $('.list-nav>li').mouseover(function () {
            $('.drobdown').stop().fadeOut(50);
            $(this).find('.drobdown').stop().fadeIn();
        });
        
    });
    $('.drobdown').hover(
        function () {
         },
        function () {
            $(this).stop().fadeOut();
            $('.list-nav>li>a').removeClass('active');
        }
    );
    $('html body').click(function () {
        $('.drobdown').stop().fadeOut();
        $('.list-nav>li>a').removeClass('active');
    });

    var $container = $('.list-goods-masonry');

   $container.masonry({
       columnWidth: '.grid-sizer',
       percentPosition: true
   });
    $('.navigation-welcome-clone').hide();
    $(window).on('ready resize',function() {
        $('.list-nav>li>a').mouseover(function () {
            $('.list-nav>li>a').removeClass('active');
            $(this).addClass('active');
            $('.list-nav>li').mouseover(function () {
                $('.drobdown').stop().fadeOut(50);
                $(this).find('.drobdown').stop().fadeIn();
            });

        });
        $('.drobdown').hover(
            function () {
            },
            function () {
                $(this).stop().fadeOut();
                $('.list-nav>li>a').removeClass('active');
            }
        );
        $('html body').click(function () {
            $('.drobdown').stop().fadeOut();
            $('.list-nav>li>a').removeClass('active');
        });
        if($(window).width() <= 1153) {
            $('.navigation-welcome').clone().insertAfter('.button-toggle-menu').attr('class','navigation-welcome-clone');
            $('.navigation-welcome').remove();
        }
        else {
            $('.navigation-welcome-clone').clone().insertAfter('.ancor').attr('class','navigation-welcome');
            $('.navigation-welcome-clone').remove();
            $('.navigation-welcome').show();
        };
    });



   $('.button-toggle-menu').click(function() {
      $('.navigation-welcome-clone').slideToggle();
   });
});

