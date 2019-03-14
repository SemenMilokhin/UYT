$(document).ready(function() {
	initHeaderDD();
	initClearBtn();
	initAsideSlider();

	function initHeaderDD() {
		var nav   = $('.navigation'),
			navDD = nav.find('.navigation__drop-down');

		navDD.each(function(i,el) {
			var btn        = $(el).find('.navigation__drop-down-btn'),
				list       = $(el).find('.navigation__drop-down-list'),
				listHeight = list.outerHeight(),
				listFlag   = true;

			btn.on('click', function(evt) {
				evt.preventDefault();
				btn.toggleClass('opened');

				if (listFlag) {
					list.css({
						clip: 'rect(0, 9999px, '+listHeight+'px, 0)'
					});
					listFlag = false;
				} else {
					console.log('close');
					list.css({
						clip: 'rect(0, 9999px, 0, 0)'
					});
					listFlag = true;
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
			// 	parent = $(el).parent('section'),
			// 	container = parent.find('.container'),
			// 	sliderWidth = (container.outerWidth(true)+container.innerWidth())/2-container.width()-80;

			// console.log(container.outerWidth(true));
			// console.log(container.innerWidth());
			// console.log(sliderWidth);
			// console.log(parent);
			// console.log(container);
			// slides.width(sliderWidth);
		});
	}
});