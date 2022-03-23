//intro script

$(function () {

  // Tap & slide function When mobile mode ->공통
  $(window).on("resize load", function () {
    resizeBg();
  });

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
  resizeBg();

  //pre video event
  $(".intro_video video").on({
    ended: function (e) {
      $(".intro").css("display", "none");
      $(".intro_video").css("display", "none");
      $(".main-title_box").css("display", "none");
      $(".lobby_bg").css("display", "block");
    },
  });

  $(".main-title_box .skip-btn button").click(function () {
    $(".intro").fadeOut(200);
    $(".intro_video").fadeOut(200);
    $(".main-title_box").fadeOut(200);
    $(".lobby_bg").fadeIn(500);
  });
}); //jquery end

//entry script
$(function () {
  // if (hasTodayCookie) {
  //   $(".btn_modal_next").addClass("btn_cookie");
  //   $(".btn_modal_next span").text("Close");
  //   $(".btn_modal_next").click(function (e) {
  //     closeModal();
  //   });
  //   $(".modal").hide();
  //   $(".modal_bg").hide();
  // }

  let windowWidth = $(window).width();

  // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  const isMobile = Mobile();
  const modalBtn = $(".each_btn");
  const sewoonblockVid = $(".sewoonblock_vid");
  const brandhallVid = $(".brandhall_vid");
  const gravityVid = $(".gravity_vid");
  const botanikVid = $(".botanik_vid");
  const hillstateVid = $(".hillstate_vid");

  if (isMobile || window.devicePixelRatio > 1) {
    // mousehover event - mobile(click)

    // $(".info_desc").append(
    //   "<div class='enter-btn'><a href='' class='link'>들어가기</a></div>"
    // );
    modalBtn.on("click", function (e) {
      e.preventDefault();
      $('.info_box').css('opacity','0');
      let url = $(this).attr("href");
      playVideo(url);
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
        let url = $(this).attr("href");
        playVideo(url);
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
  }
}); // jquery function end