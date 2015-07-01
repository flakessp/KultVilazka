var slideWidth = $('.gallery-wrapper img').width();
function moveLeft() {
    $(".gallery-wrapper").stop();

    var first = $('.gallery-wrapper img:first-child');
    var last = $('.gallery-wrapper img:last-child');
    last.prependTo('.gallery-wrapper');
    $(".gallery-wrapper").css({left: "auto"});
    $(".gallery-wrapper").css({right: "290px"});
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
   
    //select all the a tag with name equal to modal
    $('a.button-order').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        
        var id = $("#dialog");
    
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
    
        //Set height and width to mask to fill up the whole screen
        $('#mask').appendTo('body');
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
        //transition effect        
        // $('#mask').fadeIn(1000);    
        $('#mask').fadeTo("fast",0.8);    
    
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
              
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
    
        //transition effect
        $(id).fadeIn(500); 
        
    });
    

    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
        player.destroy();
    });  
    $('#dialogClose').click(function () {
        $("#mask").hide();
        $('.window').hide();
        player.destroy();
    });