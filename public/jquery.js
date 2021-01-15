
window.scrollTo(0, 0);

const onLoad = $(window).on('load', function () {
    $(".loadscreen").addClass("loading");
    $("html").addClass("hide");
    // loadScreen.fadeOut(3000);
    $('.start').click(function () {
        $("html").removeClass("hide");
        $(".wrap").toggleClass('visibility')
        $(".loadscreen").fadeOut(2300);
        texting();
    });
});

const texting = function () {
    $(".text").toggleClass('animate');
    $(".text2").toggleClass('animate');
    $(".text3").toggleClass('animate');
}



const $window = $(window);

