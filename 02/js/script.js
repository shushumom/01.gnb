$(function () {
  // 대상을 변수에 저장
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;
  const $header = $('#header');

  // 메뉴에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    // 진입한 영역의 메뉴에 on클래스 부여
    $(this).addClass('on');
    $header.addClass('active');

    // 서브메뉴를 활성화 = 보이게 = slide down
    $submenu.stop().slideDown(duration);
  });

  // 마우스가 메뉴에서 나갈 때
  $menu.on('mouseleave', function () {
    $menu.removeClass('on');
    $header.removeClass('active');
    $submenu.stop().slideUp(duration);
  });
});
