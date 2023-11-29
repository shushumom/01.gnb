$(function () {
  const $window = $(window);
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  $menu.on('mouseenter', function () {
    $(this).addClass('on');
    $header.addClass('active');
    $submenu.stop().fadeIn(duration);
  });

  $menu.on('mouseleave', function () {
    $menu.removeClass('on');
    $header.removeClass('active');
    $submenu.stop().fadeOut(duration);
  });

  // 마우스 휠을 조작했을 때 :wheel
  $window.on('wheel', function (e) {
    // if문 > 삼항 조건연산자로 표현
    e.originalEvent.wheelDelta > 0 ? $header.addClass('hide') : $header.removeClass('hide');
  });
});
