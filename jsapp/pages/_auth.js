$(document).on('click', '.js-checkbox', function(){
    var $element = $(this), $input = $(this).children('input');

    $element.toggleClass('checkbox--check');

    if($element.hasClass('checkbox--check')){
        $input.attr('checked', true);
    }else{
        $input.attr('checked', false);
    }
});
