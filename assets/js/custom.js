$('.navbar-toggler').on('click',function(){
  $('body').css('overflow','hidden');
});

$('[data-navClose="true"]').on('click',function(){
    $('#navbarSupportedContent').removeClass('show');
    $('body').removeAttr('style');
});