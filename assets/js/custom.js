$('.navbar-toggler').on('click', function () {
    $('body').css('overflow', 'hidden');
});

$('[data-navClose="true"]').on('click', function () {
    $('#navbarSupportedContent').removeClass('show');
    $('body').removeAttr('style');
});

//photo gallery
var countClick = 0;
$('[data-gallery="true"] li').on('click', 'a', function (e) {
    $('body').css('overflow', 'hidden');
    countClick++;
    e.preventDefault();
    if (countClick <= 1) {
        generateHtml();
    } else {
        console.log('false');
    }

    var getPicIndex = $(this).find('picture').attr('data-count');
    console.log(getPicIndex);

    $('#photoGalleryCarousel').owlCarousel({
        loop: false,
        margin: 10,
        startPosition: getPicIndex,
        dots: false,
        nav: true,
        navText: ['<img src="assets/img/icons/arrow.svg">', '<img src="assets/img/icons/arrow.svg">'],
        items: 1
    });
    $('.photoGalleryModel').addClass('active-model');


});

/*Modal Box HTML Code*/
function generateHtml() {
    var html = '';
    html += '<section class="py-lg-6 photoGalleryModel">';
    html += '<div class="container">';
    html += '<div class="row"><div class="col-12 px-0 position-relative py-3">';
    html += '<button class="close-btn btn btn-light" data-galleryDismiss="true"> <i class="fa fa-times"></i> Close</button>';
    html += '</div> </div>';
    html += '<div class="row">';
    html += '<div class="col-12 col-lg-8 col-xl-6 mx-auto px-0">';
    html += '<div id="photoGalleryCarousel" class="owl-carousel owl-theme owl-left-right-navbar  px-lg-4 ">';

    var pictureCountr = 0;
    $('[data-gallery="true"] picture').each(function () {
        $(this).attr('data-count', pictureCountr++);
        var getImg = $(this).attr('data-img');
        console.log(getImg);
        html += '<div class="item">';
        html += '<img src="' + getImg + '">';
        html += '</div>';
    });

    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</section>';
    $('body').append(html);
}

//dismiss Model
$(document).on('click', '[data-galleryDismiss="true"]', function () {
    $('.photoGalleryModel').removeClass('active-model');
    $('body').removeAttr('style');
});









