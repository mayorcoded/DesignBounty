(function ($) {
	"use strict";


	/*==========  Animation  ==========*/
	
	new WOW().init();


	/*==========  Prevents page to scroll on click  ==========*/

    $(document).on('click', '.nav-tabs>li a', function(){
		$('html, body').stop();
	});


	/*==========  Responsive Navigation  ==========*/

	$('.main-nav').children().clone().appendTo('.responsive-nav');
	$('.responsive-menu-open').on('click', function(event) {
		event.preventDefault();
		$('body').addClass('no-scroll');
		$('.responsive-menu').addClass('open');
		return false;
	});
	$('.responsive-menu-close').on('click', function(event) {
		event.preventDefault();
		$('body').removeClass('no-scroll');
		$('.responsive-menu').removeClass('open');
		return false;
	});
	$('.responsive-nav li').each(function(index) {
		if ($(this).find('ul').length) {
			var text = $(this).find('> a').text();
			var id = text.replace(/\s+/g, '-').toLowerCase();
			id = id.replace('&','');
			$(this).find('> a').attr('href', '#collapse-' + id);
			$(this).find('> a').attr('data-toggle', 'collapse');
			$(this).find('> a').append('<i class="ion-ios-arrow-down"></i>');
			$(this).find('> ul').attr('id', 'collapse-' + id);
			$(this).find('> ul').addClass('collapse');
		}
	});
	$('.responsive-nav a').on('click', function() {
		if ($(this).parent().hasClass('collapse-active')) {
			$(this).parent().removeClass('collapse-active');
		} else {
			$(this).parent().addClass('collapse-active');
		}
	});
	if( $('.header-footer-inner').hasClass( "has-form" ) )
	{
	  $( ".main-nav" ).addClass( "early-hidden" );
 	  $( ".responsive-menu-open" ).addClass( "early-visible" );
	}


	/*----------  Dashboard Edit Option Icons  ----------*/

	var edit_option_icons = $(".job-alert .job-edit-cell, .fav-candidate .candidate-edit-cell, .posted-job .posted-job-edit-cell");
	edit_option_icons.on('click', function() {		
		edit_option_icons.removeClass('active');
		$(this).addClass('active');	
	});
	$(".job-alert, .fav-candidate, .posted-job").on('click', function() {
		$('.job-alert').removeClass('active');
		$(this).addClass('active');	
	});

	/*----------  Bootstrap linking to a tab with an url  ----------*/

    $("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        $("#"+tab).click();
    });

	/*----------  Post Gallery Slider  ----------*/

	var postGallery = $('.post-gallery');
	postGallery.owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		autoplay:true,
		autoplay: 100,
		autoplaySpeed:100,
    	autoplayHoverPause:true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 1,
		mouseDrag: true,
		touchDrag: true,
		autoHeight: true
	});
	postGallery.on('resized.owl.carousel', function(event) {
		var $this = $(this);
		$this.find('.owl-height').css('height', $this.find('.owl-item.active').height());
	});


	/*----------  Progress Bar  ----------*/

	var progressBar = $('.progress-bar');
	progressBar.each(function(index) {
		var progress_bar = $(this);
		progress_bar.waypoint(function() {
			progress_bar.css("width", progress_bar.attr("aria-valuenow") + "%");
		}, {
			offset: 'bottom-in-view'
		});
	});	
	progressBar.css('width', '0%');
	$('.countTo').each(function(index) {
		var countTo = $(this);
		countTo.waypoint(function() {
			countTo.countTo({
				speed: 1200
			});
		}, {
			offset: 'bottom-in-view'
		});
	});	

	/*==========  Accordion  ==========*/

	$('.faqs-group .panel-title a').on('click', function(){
    	$(this).find('i').toggleClass('ion-ios-plus-empty ion-ios-minus-empty')    	
    });

    /*==========  Companies Listing Highlight Function  ==========*/

    var companyListMenu = $('.companies-list-menu>li');
	companyListMenu.on('click', function(){
		companyListMenu.removeClass('active');		
    	$(this).addClass('active')
    	return false;    	
    });

	/*==========  Blog Grid Load more button  ==========*/

	$(".news-grid .news-grid-row").hide();
		$(".news-grid .news-grid-row").slice(0, 3).show();
		$("#load-more-button").on('click', function (e) {
		e.preventDefault();
		$(".news-grid .news-grid-row:hidden, .news-grid .spacer-md:hidden").slice(0, 1).slideDown();
		if ($(".news-grid .news-grid-row:hidden, .news-grid .spacer-md:hidden").length == 0) {
			$("#load-more-button").fadeOut('slow');
		}
	});

	/*----------  Blog Masonry Grid ----------*/

	var $newsMasonrygridContainer = $('#news-masonry-grid-row').imagesLoaded(function() {
		$newsMasonrygridContainer.isotope({
			itemSelector: '.news-grid-row.masonry-layout .news-item',
			layoutMode: 'masonry',
			percentPosition: true,
			masonry: {
				columnWidth: $newsMasonrygridContainer.find('.news-masonry-grid-sizer')[0]
			}
		});
		return false;
	});
	$(".news-grid-row.masonry-layout .news-item").hide();
		$(".news-grid-row.masonry-layout .news-item").slice(0, 10).show();
		$("#load-more-buttonn").on('click', function (e) {
		e.preventDefault();
		$(".news-grid-row.masonry-layout .news-item:hidden").slice(0, 3).fadeIn();
		if ($(".news-grid-row.masonry-layout .news-item:hidden").length == 0) {
			$(this).fadeOut('slow');
		}
		$newsMasonrygridContainer.isotope('reloadItems').isotope();
	});


	/*==========  Multisteps Form  ==========*/

	var current = 1,current_step,next_step,steps;
	steps = $("fieldset").length;
	$(".next").click(function(){
		current_step = $(this).closest("fieldset");
		next_step = $(this).closest("fieldset").next();
		next_step.show();
		current_step.hide();		
	});
	$(".previous").click(function(){
		current_step = $(this).closest("fieldset");
		next_step = $(this).closest("fieldset").prev();
		next_step.show();
		current_step.hide();		
	});
	function clone(){
	    var btnWrapperClone = $(this).closest('.button-wrapper').clone();
	    var formWrapperClone = $(this).closest('.button-wrapper').prev().clone();

	    fieldSet.after('<div id="clonedInput'+index+'" class="form-fields-inner clonedInput">'+html+'</div>');
	}
	function remove(event){
	    event.preventDefault(); 
	    $(this).closest('.form-fields-inner.clonedInput').remove();
	}
	$('body').on('click', 'button.clone', clone);
	$('body').on('click', 'button.remove', remove);
	

	/*==========  Open Video Popup  ==========*/

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		preloader: false,
		fixedContentPos: false,    
		removalDelay: 100,
		callbacks: {
			beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
			}
		}	      
	});
		
	/*==========  Validate Email  ==========*/

	function validateEmail($validate_email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( !emailReg.test( $validate_email ) ) {
			return false;
		} else {
			return true;
		}
		return false;
	}
	
	/*==========  Contact Form  ==========*/

	$('#contact-form').on('submit', function() {
		$('#contact-error').fadeOut();
		$('#contact-success').fadeOut();
		$('#contact-loading').fadeOut();
		$('#contact-loading').fadeIn();
		if (validateEmail($('#contact-email').val()) && $('#contact-email').val().length !== 0 && $('#contact-name').val().length !== 0 && $('#contact-message').val().length !== 0) {
			var action = $(this).attr('action');
			$.ajax({
				type: "POST",
				url : action,
				data: {
					contact_name: $('#contact-name').val(),
					contact_email: $('#contact-email').val(),
					contact_phone: $('#contact-phone').val(),
					contact_message: $('#contact-message').val()
				},
				success: function() {
					$('#contact-error').fadeOut();
					$('#contact-success').fadeOut();
					$('#contact-loading').fadeOut();
					$('#contact-success .message').html('Success! Thanks for contacting us!');
					$('#contact-success').fadeIn();
				},
				error: function() {
					$('#contact-error').fadeOut();
					$('#contact-success').fadeOut();
					$('#contact-loading').fadeOut();
					$('#contact-error .message').html('Sorry, an error occurred.');
					$('#contact-error').fadeIn();
				}
			});
		} else if (!validateEmail($('#contact-email').val()) && $('#contact-email').val().length !== 0 && $('#contact-name').val().length !== 0 && $('#contact-message').val().length !== 0) {
			$('#contact-error').fadeOut();
			$('#contact-success').fadeOut();
			$('#contact-loading').fadeOut();
			$('#contact-error .message').html('Please enter a valid email.');
			$('#contact-error').fadeIn();
		} else {
			$('#contact-error').fadeOut();
			$('#contact-success').fadeOut();
			$('#contact-loading').fadeOut();
			$('#contact-error .message').html('Please fill out all the fields.');
			$('#contact-error').fadeIn();
		}
		return false;
	});

	/*==========  Map  ==========*/

	var map;
	function initialize_map() {
		if ($('.map').length) {
			var myLatLng = new google.maps.LatLng(40.742329, -73.980065);
			var mapOptions = {
				zoom: 15,
				center: myLatLng,
				scrollwheel: false,
				panControl: false,
				zoomControl: false,
				scaleControl: true,
				mapTypeControl: false,
				streetViewControl: false,	
				draggable: false,
			 	styles: [
				  {
				    "stylers": [
				      {
				        "saturation": -100
				      },
				      {
				        "lightness": -100
				      }
				    ]
				  },
				  {
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#ebebeb"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.icon",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.text",
				    "stylers": [
				      {
				        "color": "#588b93"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#588b93"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.text.stroke",
				    "stylers": [
				      {
				        "color": "#f5f1e6"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative",
				    "elementType": "geometry.stroke",
				    "stylers": [
				      {
				        "color": "#c9b2a6"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative.land_parcel",
				    "elementType": "geometry.stroke",
				    "stylers": [
				      {
				        "color": "#dcd2be"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative.land_parcel",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#ae9e90"
				      }
				    ]
				  },
				  {
				    "featureType": "landscape.natural",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#dfd2ae"
				      }
				    ]
				  },
				  {
				    "featureType": "poi",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#dfd2ae"
				      }
				    ]
				  },
				  {
				    "featureType": "poi",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#93817c"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.business",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.government",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.medical",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.park",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "color": "#d3e1c4"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.park",
				    "elementType": "labels.text",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.park",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#447530"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.school",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.sports_complex",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "road",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#f5f1e6"
				      }
				    ]
				  },
				  {
				    "featureType": "road.arterial",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#fdfcf8"
				      }
				    ]
				  },
				  {
				    "featureType": "road.arterial",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "color": "#e2e2e2"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#f8c967"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "color": "#e1c2b6"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway",
				    "elementType": "geometry.stroke",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway",
				    "elementType": "labels.text",
				    "stylers": [
				      {
				        "color": "#474747"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#474747"
				      },
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway.controlled_access",
				    "stylers": [
				      {
				        "color": "#e2e2e2"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway.controlled_access",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#e98d58"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway.controlled_access",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "color": "#e1c2b6"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway.controlled_access",
				    "elementType": "geometry.stroke",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "road.local",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#aaaaaa"
				      }
				    ]
				  },
				  {
				    "featureType": "transit.line",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#dfd2ae"
				      }
				    ]
				  },
				  {
				    "featureType": "transit.line",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#8f7d77"
				      }
				    ]
				  },
				  {
				    "featureType": "transit.line",
				    "elementType": "labels.text.stroke",
				    "stylers": [
				      {
				        "color": "#ebe3cd"
				      }
				    ]
				  },
				  {
				    "featureType": "transit.station",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#dfd2ae"
				      }
				    ]
				  },
				  {
				    "featureType": "water",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "color": "#d9e4e5"
				      }
				    ]
				  },
				  {
				    "featureType": "water",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#92998d"
				      }
				    ]
				  }
				],
		    };
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
			var marker = new google.maps.Marker({
				position: {lat: 40.742222, lng: -73.982999}, 
				map: map,
				title: 'Envato',
				icon: './images/marker.png'
			});
		} else {
			return false;
		}
		return false;
	}
	google.maps.event.addDomListener(window, 'load', initialize_map);

})(jQuery);