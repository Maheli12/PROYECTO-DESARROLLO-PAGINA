var swiper = new swiper(".mySwiper-1",{
  slidesPerView:1,
  spaceBetween:30,
  loop:true,
  pagination: {
    el:".swiper-pagination",
    clickable: true,
  

  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  }
});
var swiper = new swiper(".mySwiper-2",{
  slidesPerView:3,
  spaceBetween:20,
  loop:true,
  loopFillGroupWithBlank:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerview:1,
    }
    S20:{
      slidesPerview:2,

    },
    950:{
      slidesPerView:3
    }
  }


});
let tabInputs=document.querySelectorAll(",tabInput");
tabInputs.forEach(function(input){
  input.addEventListener('change',function(){
    let id= input.ariaValueMax;
    let thisSwiper = document.getElementById('swiper' + id);
  })
});
