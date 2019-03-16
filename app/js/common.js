$(document).ready(function() {
	initScrollBars();
	initHeaderDD();
	initClearBtn();
	initAsideSlider();
	initMainSlider();
	initSpecialOffersMovements();

	function initHeaderDD() {
		var nav      = $('.navigation'),
			navDD    = nav.find('.navigation__drop-down'),
			closeAll = function(count) {
				navDD.each(function(c,element) {
					if(count!==c) {
						console.log('клик по - '+count);
						console.log('закрытие - '+c);
						$(element).find('.navigation__drop-down-btn').removeClass('opened'),
						$(element).find('.navigation__drop-down-list').css({
							clip: 'rect(0, 9999px, 0, 0)'
						});
					}
				});
				console.log('closeAll');
			};

		navDD.each(function(i,el) {
			var btn        = $(el).find('.navigation__drop-down-btn'),
				list       = $(el).find('.navigation__drop-down-list'),
				listHeight = list.outerHeight(),
				openDD     = function() {
					btn.addClass('opened');
					list.css({
						clip: 'rect(0, 9999px, '+listHeight+'px, 0)'
					});
				},
				closeDD    = function() {
					btn.removeClass('opened');
					list.css({
						clip: 'rect(0, 9999px, 0, 0)'
					});
				};

			btn.on('click', function(evt) {
				evt.preventDefault();
				closeAll(i);
				if (btn.hasClass('opened')) {
					console.log('close');
					closeDD();
				} else {
					console.log('open');
					openDD();
				}
			});


		});
	}
	function initClearBtn() {
		var form = $('.search-form'),
			searchInput = form.find('.search-form__input'),
			clearBtn = form.find('.search-form__btn_reset');

		searchInput.on('keyup', function() {
			if(searchInput.val()!=='') {
				clearBtn.addClass('show');
			} else {
				clearBtn.removeClass('show');
			}
		});

		clearBtn.on('click', function() {
			clearBtn.removeClass('show');
		});
	}
	function initAsideSlider() {
		var sliders = $('.side-slider');

		sliders.each(function(i,el) {
			var slides = $(el).find('.side-slider__slides'),
				controls = $(el).find('.side-slider__controls'),
				arrowLeft = controls.find('.side-slider__arrow_left'),
				arrowRight = controls.find('.side-slider__arrow_right');

			slides.slick({
				appendArrows: controls,
				prevArrow: arrowLeft,
				nextArrow: arrowRight
			});
		});
	}
	function initMainSlider() {
		var slider = $('.main-slider'),
			slides = slider.find('.main-slider__slides'),
			controls = slider.find('.main-slider__controls'),
			arrowLeft = controls.find('.main-slider__arrow_left'),
			arrowRight = controls.find('.main-slider__arrow_right');

		slides.slick({
			appendArrows: controls,
			prevArrow: arrowLeft,
			nextArrow: arrowRight
		});
	}
	function initSpecialOffersMovements() {
		var specialOffers = $('.special-offers'),
			specialOffersItems = specialOffers.find('.special-offers__item');

		specialOffersItems.each(function(i,el) {
			var item = $(el),
				btn  = $(el).find('.special-offers__in-basket-btn');
			btn.on('click', function(evt) {
				evt.preventDefault();
				item.toggleClass('in-basket');
			});
		});
	}
	function initScrollBars() {
		$("body").niceScroll({
			cursorcolor: "#ffc80a",
			cursorwidth:"8px",
			cursorfixedheight: 100,
	  		cursorborder:"none",
	  		cursorborderradius: '4px',
	  		autohidemode: false	  		
		});
		$('.scroll-wrapper').each(function(i,el){
			$(el).niceScroll({
				cursorcolor: "#ffc80a",
				cursorwidth:"8px",
				cursorfixedheight: 100,
				scrollspeed: 100,
				mousescrollstep: 10,
		  		cursorborder:"none",
		  		cursorborderradius: '4px',
		  		autohidemode: false
			});
		});
	}
});