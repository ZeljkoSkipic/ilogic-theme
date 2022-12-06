jQuery(document).ready(function ($) {
	$( ".menu-toggle" ).click(function() {
		$( "#primary-menu" ).slideToggle();
		$( this ).toggleClass('menu-open')
	});
	// Accordion
	$( ".il_accordion-header" ).click(function() {
		$( this ).siblings( ".il_accordion-body" ).slideToggle();
		$( this ).parent('.il_accordion-item ').toggleClass('open')
	});
	// Tabs
	$('.tabs_nav li:first-child').addClass('active');
	$('.tabs_nav a').click(function() {

		// Check for active
		$('.tabs_nav li').removeClass('active');
		$(this).parent().addClass('active');

		// Display active tab
		let currentTab = $(this).attr('href');
		$('.tabs_content .tab').hide();
		$(currentTab).show();

		return false;
	  });

});