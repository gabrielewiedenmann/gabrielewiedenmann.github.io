$(".hamburger").click(
    function () {

        if ($(".hamburger").hasClass('is-active')) {
            $(".hamburger").removeClass('is-active');
            $(".about").removeClass("about-active");
            $(".header").removeClass("about-header");
            $(".header-line").removeClass("about-headerline");
            $("body").removeClass("notscrollable");
             setTimeout(function () {
                $(".mycontacts").addClass("not-active");
            }, 50);
             setTimeout(function () {
                $(".mycv").addClass("not-active");
            }, 50);
            setTimeout(function () {
                $(".mydescription").addClass("not-active");
            }, 50);
             setTimeout(function () {
                $(".myphoto").addClass("not-active");
            }, 50);
           
           



        } else {
            $(".hamburger").addClass("is-active");
            $(".about").addClass("about-active");
            $(".header").addClass("about-header");
            $(".header-line").addClass("about-headerline");
            $(".header-title").addClass("about-headertitle");
            $("body").addClass("notscrollable");
            setTimeout(function () {
                $(".myphoto").removeClass("not-active");
            }, 300);
            setTimeout(function () {
                $(".mydescription").removeClass("not-active");
            }, 400);
            setTimeout(function () {
                $(".mycv").removeClass("not-active");
            }, 500);
            setTimeout(function () {
                $(".mycontacts").removeClass("not-active");
            }, 600);
            



        }
    })

$("#iconVimeo").hover(
    function () {
        $(".cerchioVimeo").addClass("cerchio-active");
        $(".logoVimeo").addClass("logo-active");
    },
    function () {
        $(".cerchioVimeo").removeClass("cerchio-active");
        $(".logoVimeo").removeClass("logo-active");
    }
)

$("#iconInsta").hover(
    function () {
        $(".cerchioInsta").addClass("cerchio-active");
        $(".logoInsta").addClass("logo-active");
    },
    function () {
        $(".cerchioInsta").removeClass("cerchio-active");
        $(".logoInsta").removeClass("logo-active");
    }
)

$("#iconLinkedin").hover(
    function () {
        $(".cerchioLinkedin").addClass("cerchio-active");
        $(".logoLinkedin").addClass("logo-active");
    },
    function () {
        $(".cerchioLinkedin").removeClass("cerchio-active");
        $(".logoLinkedin").removeClass("logo-active");
    }
)

$("#iconWhatsapp").hover(
    function () {
        $(".cerchioWhatsapp").addClass("cerchio-active");
        $(".logoWhatsapp").addClass("logo-active");
    },
    function () {
        $(".cerchioWhatsapp").removeClass("cerchio-active");
        $(".logoWhatsapp").removeClass("logo-active");
    }
)

$("#iconDribbble").hover(
    function () {
        $(".cerchioDribbble").addClass("cerchio-active");
        $(".logoDribbble").addClass("logo-active");
    },
    function () {
        $(".cerchioDribbble").removeClass("cerchio-active");
        $(".logoDribbble").removeClass("logo-active");
    }
)



$(".email-me").hover(
    function () {
        $(".contact-me").addClass("contact-off");
        $(".icon-me").addClass("icon-on");
    },
    function () {
        $(".contact-me").removeClass("contact-off");
        $(".icon-me").removeClass("icon-on");
    }
)
