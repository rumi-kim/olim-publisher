const cookie = {
  set: function(name, value, day) {
    let date = new Date();
    date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  },
  get: function(name) {
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
  },
  delete: function(name) {
    let date = new Date();
    document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
  }
}
function siteSetMuted() {
  let muted = getMutedStatus();
  cookie.set('isMuted',!!!muted,1);
  if(!!!muted){
    $(".btn_sound").addClass('unmute');
  }else{
    $(".btn_sound").removeClass('unmute');
  }
}

function getMutedStatus() {
  const muted = cookie.get('isMuted') === 'true';
  cookie.set('isMuted',!!muted,1);
  if(!!muted){
    return true;
  }else{
    return false;
  }
}

$(function(){
  // set default muted
  const muted = getMutedStatus();
  if(muted){
    $(".btn_sound").addClass('unmute');
  }else{
    $(".btn_sound").removeClass('unmute');
  }

  //mobile navigation
  $('.now_nav').click(function(){
    $('.nav-pc').slideToggle();
    $(this).toggleClass('nav_on');
    $('.nav-wrap').toggleClass('is_active');
  })
  $(window).resize(function(){
    if($(window).width() >= 1000){
      $('.now_nav').removeClass('nav_on');
      $('.nav-wrap').removeClass('is_active');
      $('.nav-pc').css('display','inline-block').show();
    }else{
      $('.now_nav').removeClass('nav_on');
      $('.nav-wrap').removeClass('is_active');
      $('.nav-pc').css('display','block').hide();
    }
  })

  // modal next
  $('.btn_modal_next').click(function(){
    var hasCookie = $(this).hasClass('btn_cookie');
    if (!hasCookie) {
      $(this).parents('.modal_inner').hide();
      $(this).parents('.modal_inner').next('.modal_inner').show();
      $('#tutorial_video').get(0).play();
    }
  });

  //video tutorial
  $('.modal_help-video').parents('.modal_help-center').addClass('has_video');

  //tutorial btn
  $('.btn_help_pop').click(function(){
    $('.modal_inner').hide();
    $('.btn_modal_close span').text('닫기');
    $('.chk_wrap-not_today').hide();
    $('.modal_inner_help').show();
    $('.modal').fadeIn(200);
    $('.modal_bg').fadeIn(200);
    $('#tutorial_video').get(0).play();
  });

  //iso disclaimer
  $('.detail-view__iso--wrap').prepend('<ul class="disclaimer iso_disclaimer"><li class="item">본 VR콘텐츠는 소비자의 이해를 돕기위한 콘텐츠로 실제와 다를 수 있습니다.</li></ul>');
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