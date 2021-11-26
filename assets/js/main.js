(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});
// sidebar
$('.mobile-nav-close,#mobile-nav-close').on('click',function(){
	$('.mobile-nav').removeClass('show-nav');
})
$('.mobile-toggle-bar > button').on('click',function(){
	$('.mobile-nav').addClass('show-nav');
});
// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		fade: true,
		speed: 1000,
		arrows: false,
		cssEase: 'linear',
		prevArrow:'<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
		responsive: [
			{ breakpoint: 850, 
				settings: { dots: false, arrows: false } 
			}
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();





// owlCarousel
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:0,
// 	items:1,
// 	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//     nav:true,
// 	dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         767:{
//             items:3
//         },
//         992:{
//             items:5
//         }
//     }
// })


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop

if (jQuery(".filter-wrapper").length > 0) {
    $('.filter-wrapper .filter-grid').imagesLoaded(function () {
        let $grid = $('.filter-wrapper .filter-grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item' // columnWidth: 1
            }
        });

        // filter items on button click
        $('.filter-nav').on('click', 'button', function () {
            let filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });

        //for menu active class
        $('.filter-nav button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });

	
}



//for menu active class
// $('.works-button-group button').on('click', function(event) {
// 	$(this).siblings('.active').removeClass('active');
// 	$(this).addClass('active');
// 	event.preventDefault();
// });


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fal fa-chevron-double-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();
// data background
$("[data-background").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// nice select
$('select').niceSelect();
// testimoinal

$('.testimonial-active').slick({
	dots: false,
	arrows: true,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
  });
  $('.testimonial-active-2').slick({
	dots: false,
	arrows: true,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow:'<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
  });

  $('.works-active-3').owlCarousel({
      loop:true,
      margin:0,
	  margin: 30,
		items:3,
		dots: false,
  	navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
      nav:true,
      responsive:{
          0:{
              items:1,
			  dots: false,
			  nav: false,
          },
          550:{
              items:2,
			  dots: false,
			  nav: false,
          },
          992:{
              items:3,
			  dots: false,
          }
      }
  })
  $('.testimonial-active-3').owlCarousel({
	loop:false,
	margin: 30,
	items:4,
	navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
	nav:false,
	dots:true,
	autoplay: false,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		992:{
			items:3
		},
		1400: {
			items: 4,
		}
	}
})

//   counterup
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});
// news-active
$('.news-active').owlCarousel({
	items: 2,
	loop: true,
	margin: 30,
	dots: false,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		992:{
			items:2
		}
	}
})

$('.sponsor-active').owlCarousel({
	items: 4,
	loop: true,
	autoplay: false,
	smartSpeed: 500,
	arrows: false,
	dots: false,
	nav: false,
	responsive:{
			0:{
				items:1
			},
			500: {
				items: 2
			},
			767:{
				items: 3
			},
			992:{
				items: 3
			},
			1000: {
				items: 4 
			}
		}
})
// date
$('#date').datepicker();

	// circle-progress
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
				accX: 0,
				accY: -150
			});
		});
	}



})(jQuery);

