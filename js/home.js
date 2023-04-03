

// Start Jquery area 
$(document).ready(function(){
    // console.log("hello")

    // Star navbar
    $(window).scroll(function(){
        var getScrollTop = $(this).scrollTop();
        // console.log(getScrollTop)
        if(getScrollTop > 400){
            $(".sub_header").addClass("active");
        }else {
            $(".sub_header").removeClass("active");
        }
    })
    // end navbar
    // Start Banner Caousel
    $("#banner_owl_carousel").owlCarousel({
        items : 1,
        autoplayHoverPause : true,
        autoplayTimeout: 8000,
        smartSpeed : 3000,
        loop : true,
        animationIn: "animate__fadeInDown",
        animatinOut: "animate__fadeOutUp",
        autoplay : true,
    })
    // End Banner Carousel


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


var getmachinary = document.getElementById("machinery_count"),
    getprojects = document.getElementById("project_count"),
    getfactories = document.getElementById("factory_count");

var minmachinary = 0 , minproject = 0 , minfactory = 0 ;
var maxmachinary = 30 , maxproject = 25 , maxfactory = 40 ; 


var countItv ;

machinaryItv = setInterval(
    maccounter,100
)
function maccounter(){
    minmachinary += 1;
    // console.log(minmachinary);
    getmachinary.innerText = minmachinary;
    if(minmachinary === maxmachinary){
        clearInterval(machinaryItv);
    }
}

projectItv = setInterval(
    procounter,100
)
function procounter(){
    minproject += 1;
    // console.log(minproject);
    getprojects.innerText = minproject;
    if(minproject === maxproject){
        clearInterval(projectItv);
    }
}

facItv = setInterval(
    faccounter,100
)
function faccounter(){
    minfactory += 1;
    // console.log(minfactory);
    getfactories.innerText = minfactory;
    if(minfactory === maxfactory){
        clearInterval(facItv);
    }
}