jQuery(document).ready(function ($) {
    $(".menu-toggle").click(function () {
        $("#primary-menu").slideToggle();
        $(this).toggleClass('menu-open')
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

    $(".si_close").click(function () {
        $(".si_trigger, .il_hero_slidein").removeClass('si_open');
        $(".il_slidein.si_open").slideToggle().removeClass('si_open');
    });


    $(".si_triggers .si_trigger").click(function () {
        $(".il_hero_slidein:not(.si_open)").addClass('si_open');
    });

    $(".si_triggers .close-trigger").click(function () {
        $(".il_hero_slidein").removeClass('si_open');
        $(".si_trigger.si_open").removeClass('si_open');
        $(".il_slidein.si_open").slideToggle().removeClass('si_open');
    });

    $(".si_trigger.si-1").click(function () {
        $(".si_trigger.si-1").toggleClass('si_open');
        $(".si_trigger:not(.si-1)").removeClass('si_open');
        $(".il_slidein.si-1").slideToggle().toggleClass('si_open');
        $(".il_slidein.si_open:not(.si-1)").slideToggle().removeClass('si_open');
    });
    $(".si_trigger.si-2").click(function () {
        $(".si_trigger.si-2").toggleClass('si_open');
        $(".si_trigger:not(.si-2)").removeClass('si_open');
        $(".il_slidein.si-2").slideToggle().toggleClass('si_open');
        $(".il_slidein.si_open:not(.si-2)").slideToggle().removeClass('si_open');
    });
    $(".si_trigger.si-3").click(function () {
        $(".si_trigger.si-3").toggleClass('si_open');
        $(".si_trigger:not(.si-3)").removeClass('si_open');
        $(".il_slidein.si-3").slideToggle().toggleClass('si_open');
        $(".il_slidein.si_open:not(.si-3)").slideToggle().removeClass('si_open');
    });
    $(".si_trigger.si-4").click(function () {
        $(".si_trigger.si-4").toggleClass('si_open');
        $(".si_trigger:not(.si-4)").removeClass('si_open');
        $(".il_slidein.si-4").slideToggle().toggleClass('si_open');
        $(".il_slidein.si_open:not(.si-4)").slideToggle().removeClass('si_open');
    });
    $(".si_trigger.si-5").click(function () {
        $(".si_trigger.si-5").toggleClass('si_open');
        $(".si_trigger:not(.si-5)").removeClass('si_open');
        $(".il_slidein.si-5").slideToggle().toggleClass('si_open');
        $(".il_slidein.si_open:not(.si-5)").slideToggle().removeClass('si_open');
    });

    // Mobile

    $(".si_title").click(function () {
        $(this).parents(".il_slidein").slideToggle().removeClass("si_open");
        $(".mobile_trigger").removeClass("si_open");
    });

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
