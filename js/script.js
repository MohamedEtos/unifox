$(document).ready(function () {


    // loading spinner 

    $(".loading").removeClass("loading");
    $("body").css("overflow", "visible")


    // navbar smoth scroll

    $("nav ul li a,.btn-back,.fa-eject").click(function () {

        $("nav ul li a ").click(

            $("body,html").animate({

                scrollTop: $("#" + $(this).data("value")).offset().top

            }, 1000)

        )

    })

    // show navbar with small screen button

    if ($(window).width() <= 768) {

        $(".cbtn,nav ul li").click(function () {
            $(".nav-bar").slideToggle(1000)
        })

    } else {

    }

    $("a").hover(function () {

        $(this).next().animate({ width: "100%" }, 400)


    }

        ,

        function () {

            $(".line").animate({ width: "0%" }, 400)

        })


    // nav full height on small screen

    if ($(window).width() <= 786) {

        $("header nav .nav-bar ul").height($(window).height())

    }


    // navbar sticky on large screen 

    $(window).scroll(function () {
        if ($(window).scrollTop() > 580) {
            $("header").addClass("stekcy");
            $(".backtohome").show(500);
        } else {
            $("header").removeClass("stekcy");
            $(".backtohome").hide(500);

        }
    })



    // icons cont ==============================================


    $(window).scroll(function () {


        if ($(window).scrollTop() > 1460) {
            $('.timer').countTo();


        }

    })


    // protfolio buttons


    $(".mix-btns button").click(function () {

        $(this).addClass("active-btn").siblings().removeClass("active-btn");

        var CSSFilter = $(this).attr("id");

        if (CSSFilter === "all") {

            $(".mix-img div").fadeOut(500);

            $(".mix-img div").fadeIn(1000)

        } else {

            $(".mix-img div").fadeOut(500);

            $(".mix-img ").contents().filter('.' + CSSFilter).fadeIn(500)
        }
    })


    $(".viewmore-btn").click(function(){

        $(".viewmore").fadeIn(500)

    })





    // progress

    $(window).scroll(function () {

        if ($(window).scrollTop() > 2876) {
            $('.prog-timer').countTo();
            $(".exprtes .prog .prog-left .prog-bar.yeallo").css("animation", "load3 1s linear forwards 1.8s");
            $(".exprtes .prog .prog-left .prog-bar.blue").css("animation", "load2 1.5s linear forwards 1.8s");
            $(".exprtes .prog .prog-right .prog-bar").css("animation", "load1 1.8s linear forwards")
            // $(window).off("scroll");

        }

    })




    // owl curoser >> team  frame work

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 1500,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        stagePadding: 50,
        loop: true,
        margin: 10,
        nav: true,
        // autoWidth:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })


    // why chose nav bar  ====================================================


    $(".chose-nav li").click(function () {

        var p = $(this).data("nav");

        $(this).addClass("active-p").siblings().removeClass("active-p");

        $(".chose-content").filter('#' + p).show(2000).siblings().hide(1000)

    })


    // to refrech site and video size  ==========================

    $(window).resize(function () {

        var vidHight = $(".chose .chose-right video").height();

        $(".chose .chose-left").height(vidHight);
    })



    // popup for bessnicess section framework ======================


    $('.pop').magnificPopup({ type: 'iframe' });



    // our blog like cont ++ ====================================

    
    $(".blogs .content-blog .like-up ").click(function () {
        

        if ($(this).children(".fa").hasClass("fa fa-thumbs-o-up")) {




            $('.like-up-c').html(function (i, val) { return val * 1 + 1 });

            $(this).children(".fa").removeClass("fa fa-thumbs-o-up").addClass("fa fa-check");

        } else {
            $(this).children(".fa").removeClass("fa fa-check").addClass("fa fa-thumbs-o-up")

            $('.like-up-c ').html(function (i, val) { return val * 1 - 1 });

        }


    })






})