jQuery(document).ready(function ($) {

    // Mobile navigation

    $(".menu-toggle").click(function () {
        $("#primary-menu").fadeToggle();
        $(this).toggleClass('menu-open')
    });
    // Sub Menu Trigger

    $( "#primary-menu li.menu-item-has-children > a" ).after('<span class="sub-menu-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>');

    $( ".sub-menu-trigger" ).click(function() {
		$( this ).parent().toggleClass('sub-menu-open')
		$( this ).siblings(".sub-menu").slideToggle();
	});

    // Accordion
    $(".il_accordion-header").click(function () {
        $(this).siblings(".il_accordion-body").slideToggle();
        $(this).parent('.il_accordion-item ').toggleClass('open')
    });
    // Tabs
    $('.il_tabs_nav li:first-child').addClass('active');
    $('.il_tabs_nav a').click(function (e) {

        e.preventDefault();
        // Check for active
        let tabLabels =  $(this.closest('.container')).find('.il_tabs_nav li');
        tabLabels.removeClass('active');
        $(this).parent().addClass('active');

        // Display active tab
        let currentTab = $(this).data('tab');
        let currentsTabContent = $(this.closest('.container')).find('.il_tab');
        currentsTabContent.hide();
        $.each(currentsTabContent, (key, tab) => {
            let tabContentIndex = $(tab).data('tab');
            if(tabContentIndex === currentTab ) {
                $(tab).show();
            }
        });

        return false;
    });

    // Home Hero Triggers

    const siTrigger = $('.si_trigger');
    const slide = $('.il_slidein');
    const siContainer = $('.si_container');
    const siClose = $('.si_close');

    const siSlide = (e) => {
        e.preventDefault();
        let current = $(e.currentTarget);
        let currentIndex = current.data('index');
        let slides = current.closest(siContainer).find(slide);
        let triggers = current.closest(siContainer).find(siTrigger);

        if(current.hasClass('si_open')) return false;

        $.each(slides, (key, slide) => {
            let slideIndex = $(slide).data('index');
            if(currentIndex === slideIndex) {
                triggers.removeClass('si_open');
                current.addClass('si_open');
                slides.slideUp().removeClass('si_open');
                $(slide).slideDown('si_open');
            }
        });
    }

    siSlideDown =  (e) => {
        e.preventDefault();
        let current = $(e.currentTarget);
        let slides = current.closest(siContainer).find(slide);
        let triggers = current.closest(siContainer).find(siTrigger);
        slides.slideUp();
        slides.removeClass('si_open');
        triggers.removeClass('si_open');
    };

    siTrigger.on('click', siSlide);
    siClose.on('click', siSlideDown);

    // Technologies

    $(".tg_trigger-1").click(function () {
        $(".tg_trigger-1").toggleClass('si_open');
        $(".tg_trigger.si_open:not(.tg_trigger-1)").removeClass('si_open');
        $(".tg_modal-1").slideToggle().toggleClass('si_open');
        $(".tg_modal.si_open:not(.tg_modal-1)").slideToggle().removeClass('si_open');
    });

    $(".tg_trigger-2").click(function () {
        $(".tg_trigger-2").toggleClass('si_open');
        $(".tg_trigger.si_open:not(.tg_trigger-2)").removeClass('si_open');
        $(".tg_modal-2").slideToggle().toggleClass('si_open');
        $(".tg_modal.si_open:not(.tg_modal-2)").slideToggle().removeClass('si_open');
    });

    $(".tg_trigger-3").click(function () {
        $(".tg_trigger-3").toggleClass('si_open');
        $(".tg_trigger.si_open:not(.tg_trigger-3)").removeClass('si_open');
        $(".tg_modal-3").slideToggle().toggleClass('si_open');
        $(".tg_modal.si_open:not(.tg_modal-3)").slideToggle().removeClass('si_open');
    });


    // Team

    $(".il_team_member").click(function () {
        $(this).next(".member_text").slideToggle().toggleClass('t-open');
        $(".il_team_member").not(this).next(".member_text.t-open").slideToggle().removeClass('t-open');
    });
    $(".member_text .close").click(function () {
        $(this).parents('.member_text').slideToggle().removeClass('t-open');
    });

    // Init Lightbox Carousel

    const sliderCarousel = $('.carousel-main').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        draggable: false,
        hash: true,
        initialIndex: 1
    });

    // Slider popup

    const trigger = $(".il_lb_triggers a");
    const popup = $('.il_lb_carousel_wrap');
    const close = $('.il_lb_carousel_wrap .close');

    const openPopup = (e) => {
        e.preventDefault();
        let index = $(e.currentTarget).data('index');
        sliderCarousel.flickity('select', index);

        setTimeout(() => {
            popup.addClass('is-open');
        },200);
    }
    const closePopup = (e) => {
        e.preventDefault();
        popup.removeClass('is-open');
    }

    trigger.on('click', openPopup);
    close.on('click', closePopup);
});
