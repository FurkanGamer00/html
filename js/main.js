$(function() {
  "use strict";
  
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');	

		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();

});


	
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();





  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();

	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

  /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
        $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            // items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }



    /*-------------------------------------------------------------------------------
	  featured slider
	-------------------------------------------------------------------------------*/
    if ($('.logo-carousel').length) {
        $('.logo-carousel').owlCarousel({
            loop: false,
            margin: 30,
            items: 2,
            nav: false,
            dots: false,
            responsiveClass: true,
            slideSpeed: 300,
            responsive: {
                590: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        })
    }



    /*-------------------------------------------------------------------------------
	  featured slider
	-------------------------------------------------------------------------------*/
    if ($('.hero-carousel').length) {
        $('.hero-carousel').owlCarousel({
            loop: false,
            margin: 30,
            items: 1,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500
        })
    }



  
});




////

$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();





  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();

	

  /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
        $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            // items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }



    /*-------------------------------------------------------------------------------
	  featured slider
	-------------------------------------------------------------------------------*/
    if ($('.logo-carousel').length) {
        $('.logo-carousel').owlCarousel({
            loop: false,
            margin: 30,
            items: 2,
            nav: false,
            dots: false,
            responsiveClass: true,
            slideSpeed: 300,
            responsive: {
                590: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        })
    }



    /*-------------------------------------------------------------------------------
	  featured slider
	-------------------------------------------------------------------------------*/
    if ($('.hero-carousel').length) {
        $('.hero-carousel').owlCarousel({
            loop: false,
            margin: 30,
            items: 1,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500
        })
    }



  
});


