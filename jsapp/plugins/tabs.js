$('.js-tab').click(function(){

    var $element = $(this),
        $tabs = $('.js-tab-content'),
        $tabsIndex = $('.js-tab'),
        $open = $(document).find("[data-tab='" + $element.attr('data-tab-index') + "']"),
        $menu = $('.call-history__menu'),
        $menuLinks = $('.call-history__menu > a');


        if($element.hasClass('call-history__menu-item--active')){

            $menu.toggleClass('call-history__menu--mobile-open');
            $menuLinks.toggleClass('call-history__menu-item--mobile-open');

        }else{

            $tabsIndex.removeClass('call-history__menu-item--active');
            $element.addClass('call-history__menu-item--active');

            $tabs.removeClass('call-history__tab--active');
            $open.addClass('call-history__tab--active');

            $menu.toggleClass('call-history__menu--mobile-open');
            $menuLinks.removeClass('call-history__menu-item--mobile-open');

        }

});
