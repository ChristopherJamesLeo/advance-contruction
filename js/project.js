

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

    // Start Projects Section
    $(".project_tabs").click(function(){
        $(this).addClass("active");
        // console.log($(this).siblings())
        $(this).siblings().removeClass("active");
        let gettagval = $(this).attr("show-tab");
        console.log(gettagval);
        // $(".showall").find(gettagval).hide();
        if(gettagval === "showall"){
            $(".showall").fadeIn(500);
        }else {
            $(".showall").hide();
            $(".showall").not("."+gettagval).hide(500);
            $(".showall").filter("."+gettagval).fadeIn(500);
        }
    })
    // End Project Section


})
// End Jquery Area