// (function ($) {
//
// 	'use strict';
//
//     let scrollPosi = 0;
//
// 	$(window).scroll(function () {
// 		scrollPosi = $(document).scrollTop();
//
//         $('.section--message__image').stop(true, true).animate({
// 			'background-position-y': -scrollPosi / 15 + 'px'
// 		}, 100);
// 	});
//
// })(jQuery);

// $(document).ready(function () {
//   $('a[href^="#"]').click(function () {
//     var speed = 800;
//     var href = $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $('body,html').animate({
//       scrollTop: position
//     }, speed, 'swing');
//     window.history.pushState(null, null, this.hash);
//     return false;
//   });
// });
