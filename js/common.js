$(function () {
  include(); // 메뉴 인클루드

  // modal next
  $(".btn_modal_next").click(function () {
    var hasCookie = $(this).hasClass("btn_cookie");
    if (!hasCookie) {
      $(this).parents(".modal_inner").hide();
      $(this).parents(".modal_inner").next(".modal_inner").show();
      // $('#tutorial_video').get(0).play();
    }
  });

  //video tutorial
  $(".modal_help-video").parents(".modal_help-center").addClass("has_video");

  //tutorial btn
  $(".btn_help_pop").click(function () {
    $(".modal_inner").hide();
    $(".btn_modal_close span").text("닫기");
    $(".chk_wrap-not_today").hide();
    // this project only
    // $('.modal_inner.has_logo').show();
    $(".modal_inner_help").show();
    $(".modal").fadeIn(200);
    $(".modal_bg").fadeIn(200);
    // $('#tutorial_video').get(0).play();
  });
});

$(window).on("load", function () {
  setTimeout(gnb(), 100);
  navClass();
});

// gnb
function gnb() {
  var windowWidth = $(window).width();
  if (windowWidth > 1024) {
    $(".gnb").removeClass("is_res");
    $(".gnb").addClass("is_pc");
    $(".gnb-list").stop().show();
  } else {
    $(".gnb").addClass("is_res");
    $(".gnb").removeClass("is_pc");
    $(".gnb-btn").click(function () {
      if ($(this).hasClass("is_open")) {
        $(".gnb-list")
          .stop()
          .fadeOut(function () {
            $(".gnb-btn").removeClass("is_open");
          });
      } else {
        $(".gnb-list")
          .stop()
          .fadeIn(function () {
            $(".gnb-btn").addClass("is_open");
          });
      }
    });
  }
}

$(window).resize(function () {
  gnb();
});

function navClass() {
  // input 엘리먼트 추출
  var inputElm = document.getElementById("input_elm");
  //value 값 추출
  var inputVal = inputElm.value;
  var navList = document.querySelectorAll(".gnb-item");
  console.log(navList[0]);
  for (let i = 0; i < navList.length; i++) {
    navList[i].classList.remove("is_selected");
    if (inputVal == "lobby") {
      navList[0].classList.add("is_selected");
    } else if (inputVal == "hall1") {
      navList[1].classList.add("is_selected");
    } else if (inputVal == "hall2") {
      navList[2].classList.add("is_selected");
    } else {
      navList[3].classList.add("is_selected");
    }
  }
}

/**
 * 쿠키 읽기
 * @param name 키
 * @returns
 */
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * 쿠키 쓰기
 * @param name  키
 * @param value 값
 * @param days 날짜
 */
function writeCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

/**
 * 쿠키 삭제
 * @param name
 */
function deleteCookie(name) {
  writeCookie(name, "", -1);
}

function include() {
  commonInc = $(".nav_include");
  commonInc.load("header_nav_include.html");
}
