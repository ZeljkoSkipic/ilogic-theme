jQuery(document).ready(function ($) {
	$( ".menu-toggle" ).click(function() {
		$( ".main-navigation" ).slideToggle();
		$( this ).toggleClass('menu-open')
	});

	$( ".il_accordion-header" ).click(function() {
		$( this ).siblings( ".il_accordion-body" ).slideToggle();
		$( this ).parent('.il_accordion-item ').toggleClass('open')
	});

});
