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


})
// End Jquery Area
let getinstimgs = document.querySelectorAll(".insta_imgs");

let getmodinstimgs = document.querySelectorAll(".insta_img_carousel");

let getindbtns = document.querySelectorAll(".int_indicator span");

let getintnextbtn = document.querySelector("#int_next");

let getintprevbtn = document.querySelector("#int_prev");

var currentInt = 0 ;

getinstimgs.forEach(function(getinstimg,ind){
    getinstimg.setAttribute("showimg" , ind);
    getinstimg.addEventListener("click",function(){
        // console.log(this.getAttribute("showimg"))
        document.querySelector(".insta_model").style.display = "flex";
        showindcar(currentInt = this.getAttribute("showimg"));
    })
})
window.addEventListener("click",function(e){
    console.log(e.target)
    if(e.target.classList.contains("insta_model")){
        document.querySelector(".insta_model").style.display = "none";
    }
})

function showindcar(curidx){
    getmodinstimgs.forEach(function(getmodinstimg,idx){
        getmodinstimg.style.display = "none";
        getindbtns[idx].classList.remove("active");
    })
    getmodinstimgs[curidx].style.display = "block";
    getindbtns[curidx].classList.add("active");
}

showindcar(currentInt);

getintnextbtn.addEventListener("click",function(){
    currentInt += 1 ;
    if(currentInt >= getmodinstimgs.length){
        currentInt = 0
    }
    showindcar(currentInt);
})

getintprevbtn.addEventListener("click",function(){
    currentInt--;
    if(currentInt < 0 ){
        currentInt = getmodinstimgs.length-1
    }
    showindcar(currentInt);
    console.log(currentInt);

})

getindbtns.forEach(function(getindbtn , idx){
    getindbtn.setAttribute("img_indi",idx);
    getindbtn.addEventListener("click",function(){
        showindcar(currentInt = this.getAttribute("img_indi"));
    })
})

document.querySelector(".close_modal_btn").addEventListener("click",function(){
    document.querySelector(".insta_model").style.display = "none";
})