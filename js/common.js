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
    $('.btn_vr-modal_close span').text('닫기');
    $('.chk_wrap-not_today').hide();
    $('.modal_inner_help').show();
    $('.vr-modal').fadeIn(200);
    $('.modal_bg').fadeIn(200);
    $('#tutorial_video').get(0).play();
  });
  
  // tour-gnb
  $('.btn_tour-menu').on('click',function(){
    $('.vr-nav').stop().fadeToggle();
    $(this).toggleClass('is_open');
  });
  $(window).resize(function(){
    if($(window).width() >= 1000){
      $('.vr-nav').show();
      $('.vr-nav').removeAttr('style');
    }else{
      $('.vr-nav').hide();
    }
  });

  // tourpage sub nav 
  $(".btn_click").click(function () {
    $(this).toggleClass("open");
    $(this).next().children("ul").slideToggle();
    if ($(this).hasClass("open")) {
      $(this).children().last().css("transform", "rotate(180deg)");
    } else {
      $(this).children().last().css("transform", "rotate(0)");
    }
  });

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

  //main visual(intro)
  $("#main_visual").owlCarousel({
    items:1,
    dots:false,
    nav:true, 
    loop:true,
    autoplay:true,
    autoplayTimeout:10000,
    slideSpeed:400,
    paginationSpeed:400
  });

  //sub page check
  if($('body').hasClass('sub')){
    $('html').css('background','#000');
    if($('body').hasClass('tour')){
      $('html').css('background','#000');
    }  
  };

  //img_slider가 있는 경우에만 적용
  if($('.inner-content').has('.img_slider').length){
    $(".img_slider").owlCarousel({
      items : 1,
      dots : false,
      nav : true, 
      loop : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      rewindSpeed: 500,
      touchDrag: false,
      mouseDrag: false
    });
    
    $('.btn_zoom').magnificPopup({
      type:'image',
      closeOnContentClick:false,
      closeBtnInside:false,
      zoom: {
        enabled:true,
        duration:0
      },
      callbacks: {
        open: function() {
          $(".mfp-figure").append('<div class="btn_wrap-zoom"><button type="button" class="btn_zoomIn"><span class="ir_text">확대</span></button><button type="button" class="btn_zoomOut"><span class="ir_text">축소</span></button></div>');
          var currentZoom = 1.0;
          var maxZoom = 2.0;
          var minZoom = 0.3;
          $('.btn_zoomIn').click(function(){
            currentZoom = currentZoom + .3;
            if(currentZoom >= maxZoom){
              currentZoom = 2.0;
            }else if(currentZoom <= 1.0){
              $('.mfp-img').css({'transform-origin':'50% 50%'});
            }else if(currentZoom >= 1.1){
              $('.mfp-img').css({'transform-origin':'0 0'});
            }
            $('.mfp-img').css({'transform':'scale(' + currentZoom + ')'});
          });
          $('.btn_zoomOut').click(function(){
            currentZoom = currentZoom - .3;
            if(currentZoom <= minZoom){
              currentZoom = 0.3;
            }else if(currentZoom <= 1.0){
              $('.mfp-img').css({'transform-origin':'50% 50%'});
            }else if(currentZoom >= 1.1){
              $('.mfp-img').css({'transform-origin':'0 0'});
            }
            $('.mfp-img').css({'transform':'scale(' + currentZoom + ')'});
          });
        },
        close: function() {
          // Will fire when popup is closed
        }
      }
    });
  }

  //modal img desc
  $('.modal_slide-item .img_desc').parent('.modal_slide-item').addClass('has_desc');
  $('.modal_slide-item .img_desc1').parent('.modal_slide-item').addClass('has_desc1');
  $('.modal_slide-item .img_desc2').parent('.modal_slide-item').addClass('has_desc2');

  //popup_nav
  var navHeight = $('.popup_head').height() + $('.popup_nav').height();
  var tourNavHeight = $('.popup_head').height() + $('.popup_nav').height();
  var navCalc = '-=' + navHeight + 'px';
  var tourNavCalc = '-=' + tourNavHeight + 'px';
  $('.modal_slide').css('height','100%').css('height', navCalc);
  if($(window).width() <= 680){
    $('.tour .modal_slide').css('height','100%').css('height', tourNavCalc);
  }

  $(window).resize(function(){
    var navHeight = $('.popup_head').height() + $('.popup_nav').height();
    var tourNavHeight = $('.popup_head').height() + $('.popup_nav').height();
    var navCalc = '-=' + navHeight + 'px';
    var tourNavCalc = '-=' + tourNavHeight + 'px';
    $('.modal_slide').css('height','100%').css('height', navCalc);
    if($(window).width() <= 680){
      $('.tour .modal_slide').css('height','100%').css('height', tourNavCalc);
    }
  });

  
  //subType2 popup_nav
  var navHeight = $('.sub-type2 .popup_nav').height() + 3;
  var navCalc = '-=' + navHeight + 'px';
  $('.sub-type2 .modal_slide').css('height','100%').css('height', navCalc);

  $(window).resize(function(){
    var navHeight = $('.sub-type2 .popup_nav').height() + 3;
    var navCalc = '-=' + navHeight + 'px';
    $('.sub-type2 .modal_slide').css('height','100%').css('height', navCalc);
  })

  // 1depth nav in modal responsive event
  function subNav(){
    var htmlWidth = $('.popup_nav_list').width();
    var sum = 0;
    $('.popup_nav_item').each(function(){ sum += $(this).outerWidth();});
    if(htmlWidth < sum && htmlWidth <= 1440){
      $('.popup_nav_list').css({"position":"static","width":"100%","padding-right":"0"});
      $('.popup_nav_list').owlCarousel({
        looop:false,
        nav:false,
        dots:false,
        autoWidth:true,
        startPosition:'URLHash',
        URLhashListener:true
      });
      var nowLoaction = location.href;
      if(nowLoaction.indexOf("selected") > -1){
      }else{
        location.replace(nowLoaction+'#is_selected');
      }
    }else{
      $('.popup_nav_list').removeAttr('style');
      $('.popup_nav_list').owlCarousel('destroy');
    }
  }
  subNav();
  $(window).resize(function(){
    subNav();
  });
  
  // hasn't slide control
  $('.inner-content:not(:has(".slide_control"))').find('.modal_slide-item').css('padding-bottom',0);
})

function contactSubmitForm() {
  var data = {
    "mail_addr": document.querySelector('input[name="mail_addr"]').value,
    "agreement": true,
    "name": document.querySelector('input[name="name"]').value,
    "phone": document.querySelector('input[name="phone"]').value,
  };
  var gender = document.querySelector('input[name="gender"]:checked')
  var email = document.querySelector('input[name="email"]')
  var zip = document.querySelector('input[name="zip"]')
  var address1 = document.querySelector('input[name="address1"]')
  var address2 = document.querySelector('input[name="address2"]')
  var age = document.querySelector('input[name="age"]:checked')
  var category = document.querySelector('input[name="category"]:checked')
  var type = document.querySelector('input[name="type"]:checked')
  var custom1 = document.querySelector('input[name="custom1"]:checked')
  var custom2 = document.querySelector('input[name="custom2"]:checked')
  var account_condition = document.querySelector('input[name="account_condition"]:checked')
  // var inquiry = document.getElementById('inquiry')
  var marketing_sms = document.querySelector('input[name="marketing_sms"]')
  var marketing_email = document.querySelector('input[name="marketing_email"]')
  if (gender) data.gender = gender.value;
  if (email) data.email = email.value;
  if (zip) data.zip = zip.value;
  if (address1) data.address1 = address1.value;
  if (address2) data.address2 = address2.value;
  if (age) data.age = age.value;
  if (category) data.category = category.value;
  /** 체크박스 확인 부분 START **
   var checkedTypes = document.getElementById('type').querySelectorAll('input[name="type"]:checked');
   var filterTypes = [];
   if (checkedTypes) {
            for (let i in checkedTypes) {
              if (checkedTypes[i].value) filterTypes.push(checkedTypes[i].value)
            }
          }
   /** 체크박스 확인 부분 END **
   if (filterTypes) data.type = filterTypes; **/
  if (custom1) data.custom1 = custom1.value;
  if (custom2) data.custom2 = custom2.value;
  if (account_condition) data.account_condition = account_condition.value;
  // if (inquiry) data.inquiry = inquiry.value;
  if (marketing_sms) data.marketing_sms = marketing_sms.checked;
  if (marketing_email) data.gender = marketing_email.checked;
  $.ajax({
    type: "post",
    url : "https://hooks.zapier.com/hooks/catch/2194594/b2id9mf/",
    data : JSON.stringify(data),
    header: {
      "Content-Type": "application/json",
    },
    success : function(res) {
      location.href = 'form_success.html';
    },
    error : function(xhr, textStatus, errorThrown){
      console.error('Error:', error)
    }
  });
}

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