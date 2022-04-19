$(function () {
  include(); // 메뉴 모달 인클루드
  resizeBg(); // 좌우 스크롤 가운데 정렬 및 스크롤 안내 모달 노출
  lobbyModalFunc();
});

$(window).on("load", function () {
  // $(function)이 실행된 이후 실행할 함수
  // 인클루드 실행 완료 후 모달 기능 실행을 위한 setTimeout
  setTimeout(menuModalFunc, 500);

  // back to index.html cache=true
  var params = getUrlParams();
  if (params.cache) {
    $(".total_wrap .intro").css("display", "none");
    $(".intro_video").css("display", "none");
    $(".main-title_box").css("display", "none");
    $(".lobby_bg").css("display", "block");
  }
  // 인트로 영상 ended & skip
  $(".intro_video video").on("ended", introVideoEndFunc);
  $(".main-title_box .skip-btn button").on("click", introVideoEndFunc);

  // modal 닫기
  $(".inner_modal button").click(function () {
    $(".modal.typeinfo").css("display", "none");
  });
}); // end window load function

$(window).on("resize", function () {
  // 화면 리사이즈시 실행할 함수
  resizeBg();
});

/*================================================
이하 함수 리스트
/*================================================*/

// include HTML file ===================================
function include() {
  let commonInc = $(".inc_wrap");
  commonInc.load("header_modal_include.html");
}

// get URL params ===================================
function getUrlParams() {
  var params = {};
  window.location.search.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (str, key, value) {
      params[key] = value;
    }
  );
  return params;
}

// menu modal ======================================================================
function menuModalFunc() {
  const menuOpenBtn = $(".btn_menu.type4"),
    menuItem = $(".list_menu > li"),
    menuItemBtn = $(".list_menu > li > a"),
    depth3menuBtn = $(".item_depth3 > a");

  menuOpenBtn.on("click", function () {
    $(this).toggleClass("is-active");
    $(".wrap_modal").toggleClass("active");
    $("body").toggleClass("fixed");
    $(".list_menu > li > div").removeClass("active");
  });

  // menuItem.hover(
  //   function () {
  //     //hover action
  //   },
  //   function () {
  //     //hover out action
  //     $(this).find(".item_depth3 > a ").removeClass("active");
  //     $(this).find(".item_depth3 ul").stop().slideUp();
  //   }
  // );

  // 220415 li addClss active 테스트
  if ($(window).width() > 1023) {
    menuItem
      .on("mouseenter", function () {
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
      })
      .on("mouseleave", function () {
        depth3menuBtn.removeClass("active");
        depth3menuBtn.next("ul").slideUp();
      });
  } else {
    menuItem.on("click", function () {
      $(this).children("div").slideDown(600);
      $(this).siblings("li").children("div").slideUp(600);
      $(this).siblings("li").find(".item_depth3>a").removeClass("active");
      $(this).siblings("li").find(".item_depth3>ul").stop().slideUp();
    });
  }

  // .list_menu > li > a 태그 기본기능 멈춤처리
  menuItemBtn.on("click", function (e) {
    e.preventDefault();
  });

  // 3Depth 메뉴 오픈 관련 스크립트.
  depth3menuBtn.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().siblings().children("a").removeClass("active");
    $(this).parent().siblings().children("ul").slideUp();
    $(this).next("ul").slideToggle();
  });

  // iframe에 사용되는 url 관리
  let hanhoUrl = "http://www.hanho.kr/";
  let gravityUrl =
    "http://xn--2i0bo6p0ob42i6mlnnfsuso1c.com/home/main/main.asp";
  let hillstateUrl =
    "https://www.hillstate-hec.co.kr/Salesinfo/s_main_info_renew.aspx?apt_num=81&code_type=17&code_val=0&code_subVal=&hPAGE=1";

  // 복사 기능
  $(".item_typeinfo .item_btn").click(function () {
    // 조건을 위한 href 값 추출
    let pageHref = $(this).attr("href");

    if (pageHref === "#hanho") {
      copyUrl(hanhoUrl);
    } else if (pageHref === "#gravity") {
      copyUrl(gravityUrl);
    } else if (pageHref === "#hillstate") {
      copyUrl(hillstateUrl);
    }
  });

  function copyUrl(url) {
    var linkTemp = document.createElement("textarea");
    document.body.appendChild(linkTemp);
    linkTemp.value = url;
    linkTemp.select();
    console.log(linkTemp.value);
    let success = document.execCommand("copy");
    if (success) {
      alert("홈페이지 Url이 복사되었습니다.\n브라우저에서 검색해주세요.");
    }
    document.body.removeChild(linkTemp);
  }

  // open help modal (tutorial)  ======================================================================
  function helpModalFunc() {
    // var
    const HelpOpenBtn = $(".btn_help_pop");
    HelpOpenBtn.on("click", function () {
      $(".modal_inner").hide();
      $(".btn_modal_close span").text("Close");
      $(".chk_wrap-not_today").hide();

      $(".modal_inner_help").show();
      $(".modal").fadeIn(200);
      $(".modal_bg").fadeIn(200);
    });
  }

  helpModalFunc();
} // modalMenuFunc end

// resizeBg  ======================================================================
function resizeBg() {
  var windowWidth = $(window).width();
  var introSwipeModal = $(".mobile-modal");
  var enterBtn = $(".afterPlay .btn");

  $("body").css("width", windowWidth);

  if (windowWidth > 1024) {
    // 1025 부터

    //intro&entry 스와이프 기능
    introSwipeModal.css("display", "none");

    enterBtn.click(function () {
      $(".start-modal").fadeOut(200);
      $(".main-title_box").css("display", "block");
      $(".main_video").trigger("play");
      $(".left.intro .site_logo").css("display", "block");
    });
  } else {
    //
    introSwipeModal.css("display", "none");
    enterBtn.click(function () {
      $(".start-modal").fadeOut(200);
      introSwipeModal.css("display", "block");
      $(".main-title_box").css("display", "block");
      $(".main_video").trigger("play");
      $(".left.intro .site_logo").css("display", "block");
    });

    // 스와이프 모달 off 기능
    $(".pre_video_wrap").on("scroll", function () {
      var left = $(this).scrollLeft();
      if (left > 0) {
        introSwipeModal.css("display", "none");
      }
    });

    // 좌우 스크롤 중앙 배치
    let scrollWrapper = $(".wrap_scroll"),
      videoWrapper = $(".pre_video_wrap");

    // scroll wrapper 길이의 반
    halfWrapperWidth = scrollWrapper.width() / 2;

    // 현재 디바이스 길이의 반
    let halfDeviceWidth = $(window).width() / 2;
    videoWrapper.scrollLeft(halfWrapperWidth - halfDeviceWidth);
  }
}

// 인트로 영상 종료 이벤트 (1. 인트로 영상 종료시 & 2. 인트로영상의 스킵버튼 클릭시 실행 ) ======================================================================
/*
 * 인트로 관련 콘텐츠 Out, 로비 화면 in
 */

function introVideoEndFunc() {
  $(".intro_video").fadeOut(200);
  $(".main-title_box").fadeOut(200);
  $(".lobby_bg").fadeIn(500);
}

function Mobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
const isMobile = Mobile();

function lobbyModalFunc() {
  const modalBtn = $(".each_btn"),
    sewoonblockVid = $(".sewoonblock_vid"),
    brandhallVid = $(".brandhall_vid"),
    gravityVid = $(".gravity_vid"),
    botanikVid = $(".botanik_vid"),
    hillstateVid = $(".hillstate_vid");

  // 로비 모달 클릭시

  if (isMobile && window.devicePixelRatio > 1) {
    // 모바일 디바이스
    modalBtn.on("click", function (e) {
      e.preventDefault();
      let url = $(this).attr("href");
      playVideo(url);
    });
  } else {
    // pc
    modalBtn.on("click", function (e) {
      e.preventDefault();
      if (!$(this).hasClass("noevent")) {
        //noevent 클래스가 없을 시에만 실행
        let url = $(this).attr("href");
        playVideo(url);
      }
    });
  }

  function playVideo(param) {
    let skipBtnWrap = $(".wrap_skip-btn");

    // show skip button after 4sec
    setTimeout(function () {
      skipBtnWrap.addClass("active");
    }, 3000);

    if (param == "hall1.html") {
      sewoonblockVid.fadeIn(2000);
      sewoonblockVid.prop("muted", false);
      sewoonblockVid.trigger("play");
      sewoonblockVid.on("ended", function () {
        location.href = param;
      });

      skipBtnWrap.on("click", function () {
        location.href = param;
      });
    } else if (param == "hall2.html") {
      brandhallVid.fadeIn(2000);
      brandhallVid.prop("muted", false);
      brandhallVid.trigger("play");
      brandhallVid.on("ended", function () {
        location.href = param;
      });
      skipBtnWrap.on("click", function () {
        location.href = param;
      });
    } else if (param == "hall3.html") {
      gravityVid.fadeIn(2000);
      gravityVid.prop("muted", false);
      gravityVid.trigger("play");
      gravityVid.on("ended", function () {
        location.href = param;
      });
      skipBtnWrap.on("click", function () {
        location.href = param;
      });
    } else if (param == "hall4.html") {
      botanikVid.fadeIn(2000);
      botanikVid.prop("muted", false);
      botanikVid.trigger("play");
      botanikVid.on("ended", function () {
        location.href = param;
      });
      skipBtnWrap.on("click", function () {
        location.href = param;
      });
    } else if (param == "hall5.html") {
      hillstateVid.fadeIn(2000);
      hillstateVid.prop("muted", false);
      hillstateVid.trigger("play");
      hillstateVid.on("ended", function () {
        location.href = param;
      });
      skipBtnWrap.on("click", function () {
        location.href = param;
      });
    }
  } //playvideo function end
}
