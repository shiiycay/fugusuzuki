$(document).ready(function(){
  $('.global-menu__sp__btn--close').click(function () {
    $('.global-menu__sp__btn--close').removeClass('visible');
    $('.global-menu__sp__btn--open').addClass('visible');
    $('.global-menu__sp__nav').fadeToggle(400);
    $('.global-menu__sp__nav').addClass('visible');
  });
});

$(document).ready(function(){
  $('.global-menu__sp__btn--open').click(function () {
    $('.global-menu__sp__btn--open').removeClass('visible');
    $('.global-menu__sp__btn--close').addClass('visible');
    $('.global-menu__sp__nav').fadeToggle(400);
    $('.global-menu__sp__nav').removeClass('visible');
  });
});

$(document).ready(function(){
  $('.global-menu__sp__nav__item').click(function () {
    $('.global-menu__sp__btn--open').removeClass('visible');
    $('.global-menu__sp__btn--close').addClass('visible');
    $('.global-menu__sp__nav').fadeToggle(400);
    $('.global-menu__sp__nav').removeClass('visible');
  });
});
