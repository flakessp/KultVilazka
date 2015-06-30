var slideWidth = $('.gallery-wrapper img').width();
function moveLeft() {
    $(".gallery-wrapper").stop();

    var first = $('.gallery-wrapper img:first-child');
    var last = $('.gallery-wrapper img:last-child');
    last.prependTo('.gallery-wrapper');
    $(".gallery-wrapper").css({left: "auto"});
    $(".gallery-wrapper").css({right: slideWidth+"px"});
    $(".gallery-wrapper").animate({right: "0px"}, 1000);
};
function moveRight() {
    $(".gallery-wrapper").stop();
    var last = $('.gallery-wrapper img:last-child');
    var first = $('.gallery-wrapper img:first-child');
    first.appendTo('.gallery-wrapper');
    $(".gallery-wrapper").css({right: "auto"});
    $(".gallery-wrapper").css({left: "0px"});
    $(".gallery-wrapper").animate({left: "-290px"}, 1000);
};

$('a.prev').click(function (e) {
    e.preventDefault();
    moveRight();
});

$('a.next').click(function (e) {
    e.preventDefault();
    moveLeft();
});
