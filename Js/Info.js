$(document).ready(function() {
            $(".click-me").click(function() {
                $('html, body').animate({
                    scrollTop: $(".portfolio").offset().top
                }, 1000);
            });
        });