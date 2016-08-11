/**
 * Общие скрипты
 **/
$(document).ready(function(){

    $('.js-anchor').click(function(){
        var orect = getCoords(document.getElementById( $(this).attr('data-anchor')));
        $('html, body').animate({scrollTop: orect.top - 15}, 'slow');
    });

    $('.js-open-menu').click(function(){
        $('.js-menu').slideToggle();
    });

    $('.js-popover').click(function(){

        if($(window).width() < 961) {

            if($(this).attr('data-val') == 0){
                $(this).attr('data-val', 1)
            }else{
                $(this).attr('data-val', 0)
            }

            $(this).prev().slideToggle();

        }else{

            if($(this).attr('data-val') == 0){
                $(this).prev().fadeIn();
                $(this).attr('data-val', 1)
            }else{
                $(this).prev().fadeOut();
                $(this).attr('data-val', 0)
            }

        }
    });

    if($(window).width() < 961){

        $('.header__left-title').click(function(){
            $(this).next().slideToggle();
            $(this).toggleClass('header__left-title--active');
        });

    }

    $('.js-pay-tabs').click(function(){
        $('.js-pay-tabs').removeClass('payment__select-item--active');
        $(this).addClass('payment__select-item--active');

        $('.js-summ').val($(this).attr('data-val'));

        $('.js-pay-button > span').text($(this).attr('data-val'));
    });

    $(".js-open-popup").on('click', function() {
        var $link = $(this).attr('data-link');

        window.scrollTo(0,0);

        $.fancybox.open([
                {
                    type: 'ajax',
                    href : $link
                }
            ],
            {
                closeClick	: false,
                margin: 0,
                minWidth: 290,
                autoCenter: true
            }
        );
    });

    $(document).on('click', '.js-close-popup', function(e) { $.fancybox.close(); });

});

function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
