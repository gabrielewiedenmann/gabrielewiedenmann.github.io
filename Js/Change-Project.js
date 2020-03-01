 $(".prev-col").hover(
            function() {
                $("#previous").addClass('previous_up');
                $("#previous2").addClass('previous2_up');
                $(".img-change-previous").addClass('img-active');

            },
            function() {
                $("#previous").removeClass('previous_up');
                $("#previous2").removeClass('previous2_up');
                $(".img-change-previous").removeClass('img-active');
            },

        );

        $(".next-col").hover(
            function() {
                $("#next").addClass('next_up');
                $("#next2").addClass('next2_up');
                $(".img-change-next").addClass('img-active');


            },
            function() {
                $("#next").removeClass('next_up');
                $("#next2").removeClass('next2_up');
                $(".img-change-next").removeClass('img-active');


            },

        );