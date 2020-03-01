   $(document).ready(function() {

            $('.page').hide();
        });

        $(window).load(function() {
            $('#loader').hide();
            $('body').removeClass("notscrollable");
            $('.page').fadeIn(300);
            

        });