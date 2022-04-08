$(function(){
  // gnb
  function gnb(){
    var windowWidth = $(window).width();
    if(windowWidth > 1024){
      $('.gnb').removeClass('is_res');
      $('.gnb').addClass('is_pc');
      $('.gnb-list').stop().show();
    }else{
      $('.gnb').addClass('is_res');
      $('.gnb').removeClass('is_pc');
      $('.gnb-btn').click(function(){
        if($(this).hasClass('is_open')){
          $('.gnb-list').stop().fadeOut(function(){
            $('.gnb-btn').removeClass('is_open');
          });
        }else{
          $('.gnb-list').stop().fadeIn(function(){
            $('.gnb-btn').addClass('is_open');
          });
        }
      });
    };
  };
  gnb();
  $(window).resize(function(){
    gnb();
  });

  // modal next
  $('.btn_modal_next').click(function(){
    var hasCookie = $(this).hasClass('btn_cookie');
    if (!hasCookie) {
        $(this).parents('.modal_inner').hide();
        $(this).parents('.modal_inner').next('.modal_inner').show();
        // $('#tutorial_video').get(0).play();
    }
  });

  //video tutorial
  $('.modal_help-video').parents('.modal_help-center').addClass('has_video');

  //tutorial btn
  $('.btn_help_pop').click(function(){
    $('.modal_inner').hide();
    $('.btn_modal_close span').text('닫기');
    $('.chk_wrap-not_today').hide();
    // this project only
    // $('.modal_inner.has_logo').show();
    $('.modal_inner_help').show();
    $('.modal').fadeIn(200);
    $('.modal_bg').fadeIn(200);
    // $('#tutorial_video').get(0).play();
  });
});

/**
 * 쿠키 읽기
 * @param name 키
 * @returns
 */
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

/**
 * 쿠키 쓰기
 * @param name  키
 * @param value 값
 * @param days 날짜
 */
function writeCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

/**
 * 쿠키 삭제
 * @param name
 */
function deleteCookie(name) {
    writeCookie(name,"",-1);
}