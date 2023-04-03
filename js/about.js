

// Start Jquery area 
$(document).ready(function(){
    // console.log("hello")

    // Star navbar
    $(window).scroll(function(){
        var getScrollTop = $(this).scrollTop();
        // console.log(getScrollTop)
        if(getScrollTop > 150){
            $(".sub_header").addClass("active");
        }else {
            $(".sub_header").removeClass("active");
        }
    })
    // end navbar

    // Start Testimonial Carousel
    $("#testimonial_carousel").owlCarousel({
        items: 1,
        nav : true,
        loop : true,
        dots : true
    })
    // End Testimonial Carousel


})
// End Jquery Area