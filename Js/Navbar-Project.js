        // document ready
        (function($) {

            // scroll functions
            $(window).scroll(function(e) {

                // add/remove class to navbar when scrolling to hide/show
                var scroll = $(window).scrollTop();
                if (scroll >= 150) {
                    $('.header-title').addClass('title-up');
                    $('.header-project').addClass('header-project-active');
                    $('.hamburger').addClass('ham-up');
                } else {
                    $('.header-title').removeClass('title-up');
                    $('.header-project').removeClass('header-project-active');
                    $('.hamburger').removeClass('ham-up');
                }

            });

        })(jQuery);
