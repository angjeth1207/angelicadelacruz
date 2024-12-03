// javaScript file build by JeanDoe

//testimonial


let swiperTestimonial = new Swiper('.testimonial_container', {
	
  // Optional parameters
  loop: true,
   grabCursor: true,
  spaceBetween: 48,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
	clickable: true,
	dynamicBullets: true,
  },
	
  breakpoints:{
	  568:{
		  slidesPerView: 2,
	  }
  }
});