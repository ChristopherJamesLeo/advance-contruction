

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


})
// End Jquery Area