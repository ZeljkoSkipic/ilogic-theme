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
	$('.il_tabs_nav li:first-child').addClass('active');
	$('.il_tabs_nav a').click(function() {

		// Check for active
		$('.il_tabs_nav li').removeClass('active');
		$(this).parent().addClass('active');

		// Display active tab
		let currentTab = $(this).attr('href');
		$('.il_tabs_content .il_tab').hide();
		$(currentTab).show();

		return false;
	  });

});