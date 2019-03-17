$(document).ready(function() {
	initScrollBars();
	initHeaderDD();
	initClearBtn();
	initAsideSlider();
	initMainSlider();
	initSpecialOffersMovements();
	initFiltersFunctional();
	initSectionDoorTypeMovements();

	function initHeaderDD() {
		var nav      = $('.navigation'),
			navDD    = nav.find('.navigation__drop-down'),
			closeAll = function(count) {
				navDD.each(function(c,element) {
					if(count!==c) {
						$(element).find('.navigation__drop-down-btn').removeClass('opened');
						$(element).find('.navigation__drop-down-list').css({
							clip: 'rect(0, 9999px, 0, 0)'
						});
					}
				});
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
					closeDD();
				} else {
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
	function initFiltersFunctional() {
		var form        = $('.filters'),
			selectsList = form.find('.filters__selects-list'),
			selects     = selectsList.find('.filters__select'),
			closeAll = function(count) {
				selects.each(function(c,element) {
					if(count!==c) {
						$(element).find('.filters__select-btn').removeClass('opened');
						$(element).find('.filters__option-list').css({
							clip: 'rect(0, 9999px, 0, 0)'
						});
					}
				});
			};

		selects.each(function(i,el){
			var btn            = $(el).find('.filters__select-btn'),
				list           = $(el).find('.filters__option-list'),
				listHeight     = list.outerHeight(),
				options        = list.find('.filters__option'),
				input          = $(el).find('.filters__select-input'),
				openSelectList = function() {
					btn.addClass('opened');
					list.css({
						clip: 'rect(0, 9999px, '+listHeight+'px, 0)'
					});
				},
				closeSelectList = function() {
					btn.removeClass('opened');
					list.css({
						clip: 'rect(0, 9999px, 0, 0)'
					});
				};

			btn.on('click', function(evt) {
				evt.preventDefault();
				closeAll(i);
				if (btn.hasClass('opened')) {
					closeSelectList();
				} else {
					openSelectList();
				}
			});

			options.each(function(i,option){
				$(option).on('click',function(evt){
					evt.preventDefault();
					input.val($(option).attr('data-value'));
					btn.text($(option).text());
					closeAll();
				});
			});
		});
	}
	function initSectionDoorTypeMovements() {
		var hold           = $('.door'),
			form           = hold.find('.door__calc'),
			selects        = form.find('.door__select'),
			contentWrapper = hold.find('.door__content-wrapper'),
			tabs           = contentWrapper.find('.door__tabs-list').find('.door__tab'),
			children       = contentWrapper.find('.door__content').children(),
			openChild      = function(count) {
				children.each(function(i,el){
					if (count == i) {
						$(el).css({
							display: 'block'
						});
					} else {
						$(el).css({
							display: 'none'
						});
					}
				});
			},
			closeAllTabs   = function(count) {
				tabs.each(function(c,element) {
					if(count!==c) {
						$(element).removeClass('door__tab_selected');
					}
				});
			},
			closeAll       = function(count) {
				selects.each(function(c,element) {
					if(count!==c) {
						$(element).find('.door__select-btn').removeClass('opened');
						$(element).find('.door__option-list').css({
							clip: 'rect(0, 9999px, 0, 0)'
						});
					}
				});
			};

		if (tabs.length == children.length) {
			openChild(0);
			tabs.each(function(i,el){
				$(el).on('click', function(){
					if (!$(el).hasClass('door__tab_selected')) {
						closeAllTabs(i);
						openChild(i);
						$(el).addClass('door__tab_selected');
					}
				});
			});
		}

		selects.each(function(i,el){
			var btn            = $(el).find('.door__select-btn'),
				list           = $(el).find('.door__option-list'),
				listHeight     = list.outerHeight(),
				options        = list.find('.door__option'),
				input          = $(el).find('.door__select-input'),
				openSelectList = function() {
					btn.addClass('opened');
					list.css({
						clip: 'rect(0, 9999px, '+listHeight+'px, 0)'
					});
				},
				closeSelectList = function() {
					btn.removeClass('opened');
					list.css({
						clip: 'rect(0, 9999px, 0, 0)'
					});
				};

			btn.on('click', function(evt) {
				evt.preventDefault();
				closeAll(i);
				if (btn.hasClass('opened')) {
					closeSelectList();
				} else {
					openSelectList();
				}
			});

			options.each(function(i,option){
				$(option).on('click',function(evt){
					evt.preventDefault();
					input.val($(option).attr('data-value'));
					btn.text($(option).text());
					closeAll();
				});
			});
		});
	}
});