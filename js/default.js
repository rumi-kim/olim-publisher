$(function () {
  var params = getUrlParams();
  // console.log(params);
  if (params.cache == "true") {
    $(".section_intro").css("display", "none");
    $("footer").css("display", "none");
    $(".logo_h1").removeClass("active");
  }

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

  // var =============================================

  const startBtn = $(".btn_start"),
    introSwipeModal = $(".modal_mobile"),
    introVideo = $(".video_main");

  // ============================================= var

  // 스크롤 가운데 정렬 ============================================================================
  $(window).on("resize load", function () {
    resizeBg();
  });

  function resizeBg() {
    var windowWidth = $(window).width();
    $("body").css("width", windowWidth);

    if (windowWidth > 1024) {
      // 1025 부터
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

  // 인트로 (스타트) 버튼 클릭 ============================================================================
  startBtn.click(function () {
    let skipBtn = $(".wrap_introVideo .btn_skip");

    introVideo.trigger("play");
    skipBtn.addClass("active");
    introSwipeModal.addClass("active");
    $(".wrap_intro").fadeOut(1500);
    $("footer").fadeOut(1500);

    // 인트로 영상 스킵버튼 클릭 또는 영상 종료 시 함수 실행
    skipBtn.on("click", function () {
      endIntroVideo();
    });

    introVideo.on("ended", function () {
      endIntroVideo();
    });

    function endIntroVideo() {
      $(".section_intro").fadeOut(2000);
    }

    // 슬라이드 안내 모달창 제거 (css로 1024부터 노출 컨트롤)
    if (introSwipeModal.hasClass("active")) {
      $(".wrap_scroll").on("touchend", function () {
        introSwipeModal.removeClass("active");
      });
    }
  });

  // 진입영상 function ============================================================================
  const videoAttr = $("[data-video]"); // data-video 속성을 가진 el 추출

  videoAttr.each(function () {
    // 각 el 클릭시 해당 href, data-video 값 넘김
    $(this).on("click", function (e) {
      e.preventDefault();
      let videoUrl = $(this).attr("data-video");
      let pageUrl = $(this).attr("href");
      playMoveVideo(videoUrl, pageUrl);
      $(".logo_h1").addClass("active");
    });
  });

  function playMoveVideo(videoUrlParam, pageUrlParam) {
    const MoveVideo = $(".video_move");
    const skipBtn = $(".video_move").next(".btn_skip");

    MoveVideo.attr("src", videoUrlParam);
    MoveVideo.fadeIn(2000);
    MoveVideo.prop("muted", false);
    MoveVideo.trigger("play");

    //  3초 후 스킵 버튼 노츨
    setTimeout(function () {
      skipBtn.addClass("active");
    }, 3000);

    //   스킵 버튼 클릭 or 진입 영상 종료후 해당 url로 이동
    skipBtn.on("click", function () {
      location.href = pageUrlParam;
    });
    MoveVideo.on("ended", function () {
      location.href = pageUrlParam;
    });
  }

  // 오디오 컨트롤============================================================================

  // 오디오 파일이 있을 경우에만 실행

  const soundBtn = $(".btn_sound");
  const mainAudio = $(".audio_main")[0];

  if (mainAudio) {
    soundBtn.on("click", function () {
      const innerText = $(this).find(".ir_text");

      if ($(this).hasClass("active")) {
        innerText.text("sound on");
        mainAudio.pause();
        $(this).removeClass("active");
      } else {
        innerText.text("sound off");
        $(this).addClass("active");
        mainAudio.play();
      }
    });
  } else {
    soundBtn.css("display", "none");
  }

  // 도움말 모달창 컨트롤 ============================================================================

  // 모달창 닫기 공통 기능 -> 해당 버튼으로부터 가장 가까운 상위 모달 닫기
  let closeModalBtn = $(".btn_closemodal");
  closeModalBtn.on("click", function () {
    $(this).closest(".modal").fadeOut(300);
  });

  // 도움말 모달
  $(".btn_help").on("click", function () {
    $(".modal_help").css("display", "block");
  });

  // function archive =================================================================

  // mobile function
  function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  const isMobile = Mobile();

  if (isMobile || window.devicePixelRatio > 1) {
    //mobile or tablet device
    console.log("mobile");
  } else {
    // general pc
    console.log("pc");
  }

  function playAudio() {}
}); //jquery end function
