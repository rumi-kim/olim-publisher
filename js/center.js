$(function () {
  $(window).on("resize load", function () {

    resizeBg();
  });

  function resizeBg() {
    var windowWidth = $(window).width();
    $("body").css("width", windowWidth);

    if (windowWidth > 1024) { // 1025 부터
    } else {
      // 좌우 스크롤 중앙 배치
      let imageBox = $(".scroll"),
        scrollWrapper = $(".wrap_scroll");

      // scroll wrapper 길이의 반
      halfWrapperWidth = imageBox.width() / 2;

      // 현재 디바이스 길이의 반
      let halfDeviceWidth = $(window).width() / 2;
      scrollWrapper.scrollLeft(halfWrapperWidth - halfDeviceWidth);
    }
  }
});