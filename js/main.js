// Аккордеон Вопрос-Ответ

$(".quest-box").accordion({
    header:'.quest',
    collapsible: true
});


$(window).load(function () {
    $('.responsive').masonry({
        itemSelector: '.col',
        singleMode: true,
        isResizable: true,
        isAnimated: false
    });

});


// Слайдеры

$('.slide-content').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slider-nav-prev').click(function(){
    $('.slide-content').slick('slickPrev');
});

$('.slider-nav-next').click(function(){
    $('.slide-content').slick('slickNext');
});
//---

$('.event-list').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1
});

$('.event-nav-prev').click(function(){
    $('.event-list').slick('slickPrev');
});

$('.event-nav-next').click(function(){
    $('.event-list').slick('slickNext');
});
//---

$('.video__slider').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1
});

$('.video-nav-prev').click(function(){
    $('.video__slider').slick('slickPrev');
});

$('.video-nav-next').click(function(){
    $('.video__slider').slick('slickNext');
});

//---

$('.result__item').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.result-nav-prev').click(function(){
    $('.result__item').slick('slickPrev');
});

$('.result-nav-next').click(function(){
    $('.result__item').slick('slickNext');
});

//---

$('.event-slide').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1
});

$('.event-slide-prev').click(function(){
    $('.event-slide').slick('slickPrev');
});

$('.event-slide-next').click(function(){
    $('.event-slide').slick('slickNext');
});



//--- Галерея ---------

$('.gallery__slider').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1
});

$('.gallery-nav-prev').click(function(){
    $('.gallery__slider').slick('slickPrev');
});

$('.gallery-nav-next').click(function(){
    $('.gallery__slider').slick('slickNext');
});

$('.gallery__thumbs').delegate('img','click', function(){
    $('.img-large').attr('src',$(this).attr('src').replace('thumb','large'));
});

$('#case1 .img-thumb').delegate('img','click', function(){
    $('#case1 .case-large').attr('src',$(this).attr('src').replace('thumb','large'));
});

//-- Калькулятор пожертвований ----------------

jQuery("#donation__slider").slider({
    min: 100000,
    max: 1111000,
    values: [100000,1111000],
    step: 50000,
    range: true,
    stop: function(event, ui) {
        jQuery("input#donation__sum").val(jQuery("#donation__slider").slider("values",1));
    },
    slide: function(event, ui){
        jQuery("input#donation__sum").val(jQuery("#donation__slider").slider("values",1));
    }
});


jQuery("input#donation__sum").change(function(){


    jQuery("input#donation__sum").val(value2);
    jQuery("#donation__slider").slider("values",1,value2);
});


