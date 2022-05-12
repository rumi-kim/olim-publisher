//intro script

$(function () {
  // include();
  resizeBg();
  lobbyModalFunc();
});

$(window).on("load", function () {
  // $(function)이 실행된 이후 실행할 함수

  //cache 가 있을 경우, 인트로 영상 재생 X / 로비 화면으로 떨어지도록 설정.
  var params = getUrlParams();
  if (params.cache == "true") {
    $(".intro").css("display", "none");
    $(".intro_video").css("display", "none");
    $(".main-title_box").css("display", "none");
    $(".lobby_bg").css("display", "block");
  }

  //인트로 비디오 끝날 때, intro box+intro video+skip button 숨김+로비이미지 노출
  $(".intro_video video").on({
    ended: function (e) {
      $(".intro").css("display", "none");
      $(".intro_video").css("display", "none");
      $(".main-title_box").css("display", "none");
      $(".lobby_bg").css("display", "block");
    },
  });

  //skip button 클릭 시, intro box+intro video+skip button 숨김+로비이미지 노출
  $(".main-title_box .skip-btn button").click(function () {
    $(".intro").fadeOut(200);
    $(".intro_video").fadeOut(200);
    $(".main-title_box").fadeOut(200);
    $(".lobby_bg").fadeIn(500);
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
// function include() {
//   let commonInc = $(".inc_wrap");
//   commonInc.load("header_modal_include.html");
// }

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

function resizeBg() {
  var windowWidth = $(window).width();
  var introSwipeModal = $(".mobile-modal");
  //intro start button
  var enterBtn = $(".afterPlay .btn");
  var preVideoWrap = $(".pre_video_wrap");

  $("body").css("width", windowWidth);

  if (windowWidth > 1024) {
    // 1025 부터

    //intro&entry 스와이프 기능
    introSwipeModal.css("display", "none");

    //start button 클릭 시 기능 제어
    enterBtn.click(function () {
      $(".start-modal").fadeOut(200);
      $(".main-title_box").css("display", "block");
      $(".left .site_logo h1").css("display","block");
      $(".main_video").trigger("play");
    });
  } else {
    //
    introSwipeModal.css("display", "none");
    enterBtn.click(function () {
      $(".start-modal").fadeOut(200);
      introSwipeModal.css("display", "block");
      $(".main-title_box").css("display", "block");
      $(".main_video").trigger("play");
    });

    // 스와이프 모달 off 기능
    // $(".pre_video_wrap").on("scroll", function () {
    //   var left = $(this).scrollLeft();
    //   if (left > 0) {
    //     introSwipeModal.css("display", "none");
    //   }
    // });
    
    // touch 시작 시 스와이프 모달 off 기능
    preVideoWrap.on('touchstart', function(e){
      introSwipeModal.css("display", "none");
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

//entry script

function Mobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

const isMobile = Mobile();

function lobbyModalFunc() {
  const modalBtn = $(".each_btn");


  // 로비 모달 클릭시
  if (isMobile || window.devicePixelRatio > 1) {
    // 모바일 디바이스
    $(".info_desc").append(
      "<div class='enter-btn'><a href='' class='link'>들어가기</a></div>"
    );
    modalBtn.on("click", function (e) {
      e.preventDefault();
      // get url
      let url = $(this).attr("href");
      const infoBox = $(this).next(".info_box");
      infoBox.toggleClass("active");
      $(this).toggleClass("on");
      infoBox.find(".link").on("click", function (e) {
        e.preventDefault();
        playVideo(url);
      });
    });
  } else {
    // mousehover event - pc(hover)
    modalBtn
      .on("mouseover", function () {
        $(this).next(".info_box").addClass("active");
      })
      .on("mouseout", function () {
        $(this).next(".info_box").removeClass("active");
      })
      .on("click", function (e) {
        e.preventDefault();
        //noevent 클래스가 없을 시에만 실행
        let url = $(this).attr("href");
        playVideo(url);
      });
  }
}

function playVideo(param) {
  let skipBtnWrap = $(".wrap_skip-btn");
  const MediaIslandVid = $(".MediaIsland_vid");
  const ipNetworkVid = $(".ipnetwork_vid");

  // show skip button after 4sec
  setTimeout(function () {
    skipBtnWrap.addClass("active");
  }, 3000);

  if (param == "hall1.html?startID=44892") {
    MediaIslandVid.fadeIn(2000);
    MediaIslandVid.prop("muted", false);
    MediaIslandVid.trigger("play");
    MediaIslandVid.on("ended", function () {
      location.href = param;
    });

    skipBtnWrap.on("click", function () {
      location.href = param;
    });
  } else if (param == "hall2.html") {
    ipNetworkVid.fadeIn(2000);
    ipNetworkVid.prop("muted", false);
    ipNetworkVid.trigger("play");
    ipNetworkVid.on("ended", function () {
      location.href = param;
    });
    skipBtnWrap.on("click", function () {
      location.href = param;
    });
  }
}

// jquery function end
