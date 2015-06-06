// Аккордеон Вопрос-Ответ

$(".quest-box").accordion({
    header:'.quest',
    collapsible: true
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