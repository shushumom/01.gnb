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
    // 마우스 휠을 조작했을 때의 이벤트 정보를 보자
    // console.log(e);
    // console.log(e.originalEvent.wheelDelta);

    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올린 상태
      $header.removeClass('hide');
    } else {
      // 휠을 내린 상태 --> header를 숨기자 --> hide 클래스 부여
      $header.addClass('hide');
    }
  });
});
