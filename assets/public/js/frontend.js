/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/custom.js":
/*!*********************************!*\
  !*** ./assets/src/js/custom.js ***!
  \*********************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  $(".menu-toggle").click(function () {
    $("#primary-menu").slideToggle();
    $(this).toggleClass('menu-open');
  });
  // Accordion
  $(".il_accordion-header").click(function () {
    $(this).siblings(".il_accordion-body").slideToggle();
    $(this).parent('.il_accordion-item ').toggleClass('open');
  });
  // Tabs
  $('.il_tabs_nav li:first-child').addClass('active');
  $('.il_tabs_nav a').click(function (e) {
    e.preventDefault();
    // Check for active
    var tabLabels = $(this.closest('.container')).find('.il_tabs_nav li');
    tabLabels.removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    var currentTab = $(this).data('tab');
    var currentsTabContent = $(this.closest('.container')).find('.il_tab');
    currentsTabContent.hide();
    $.each(currentsTabContent, function (key, tab) {
      var tabContentIndex = $(tab).data('tab');
      if (tabContentIndex === currentTab) {
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

  var sliderCarousel = $('.carousel-main').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    draggable: false,
    hash: true,
    initialIndex: 1
  });

  // Slider popup

  var trigger = $(".il_lb_triggers a");
  var popup = $('.il_lb_carousel_wrap');
  var close = $('.il_lb_carousel_wrap .close');
  var openPopup = function openPopup(e) {
    e.preventDefault();
    var index = $(e.currentTarget).data('index');
    sliderCarousel.flickity('select', index);
    setTimeout(function () {
      popup.addClass('is-open');
    }, 200);
  };
  var closePopup = function closePopup(e) {
    e.preventDefault();
    popup.removeClass('is-open');
  };
  trigger.on('click', openPopup);
  close.on('click', closePopup);
});

/***/ }),

/***/ "./assets/src/sass/frontend.scss":
/*!***************************************!*\
  !*** ./assets/src/sass/frontend.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./assets/src/js/frontend.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/frontend.scss */ "./assets/src/sass/frontend.scss");
/* harmony import */ var _js_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/custom */ "./assets/src/js/custom.js");
/* harmony import */ var _js_custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_custom__WEBPACK_IMPORTED_MODULE_1__);
/**
 * SASS
 */


/**
 * JavaScript
 */


})();

/******/ })()
;