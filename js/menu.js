$(function () {
  const menuBtn = $(".btn_menu"),
    menuModal = $(".modal_menu"),
    menuListBtn = $(".modal_menu .item_menu");

  // 햄버거 메뉴 버튼 클릭
  menuBtn.on("click ", function () {
    if ($(this).hasClass("is-active")) {
      // 메뉴 닫을 때
      $(this).removeClass("is-active");
      $(this).find(".ir_text").text("메뉴열기");
      menuModal.removeClass("active");
      $("body").removeClass("fixed");
      menuListBtn.removeClass("active");
    } else {
      // 메뉴 열 때
      $(this).addClass("is-active");
      $(this).find(".ir_text").text("메뉴닫기");
      menuModal.addClass("active");
      $("body").addClass("fixed");
    }
  });

  // 메뉴 레이아웃 스크립트

  let windowWidth = $(window).width();
  let mySwiper = undefined;

  function initMenu() {
    // 2015부터 슬라이드 형식  - swiper on
    if (windowWidth > 1024) {
      menuListBtn.on("click", function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
      });

      if (mySwiper == undefined) {
        mySwiper = new Swiper(".swiper_menu", {
          loop: false,
          slidesPerView: 5,
          // direction: getDirection(),
          spaceBetween: 30,
          breakpoints: {
            1200: {
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 18,
            },
          },
          observer: true,
          observeParents: true,
          // navigation: {
          //     nextEl: nextBtn,
          //     prevEl: prevBtn,
          // },
          // on: {
          //     resize: function () {
          //         swiper1.changeDirection(getDirection());
          //     },
          //     load: function () {
          //         swiper1.changeDirection(getDirection());
          //     },
          // },
        });
      }
    } else if (windowWidth < 1025) {
      // 2014이하는 아코디언 메뉴 형식 - swiper off (destory)
      // if (mySwiper != undefined) {
      //   mySwiper.destroy();
      //   mySwiper = undefined;
      // }

      menuListBtn.on("click", function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(this).find("ul").stop().slideDown();
        $(this).siblings().find("ul").stop().slideUp();
      });
    }
  }

  function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  const isMobile = Mobile(),
    eachModal = $(".modal_each");

  // 모달 아이콘 메뉴
  function initLobbyModal() {
    if (isMobile || window.devicePixelRatio > 1) {
      //mobile or tablet device ==> hover effect X
      console.log("mobile");
    } else {
      // general pc
      console.log("pc");

      // 각 모달창 마우스오버시 노출, ============================================================================
      eachModal
        .on("mouseenter", function () {
          $(this).find(".box_info").addClass("active");
        })
        .on("mouseleave", function () {
          $(this).find(".box_info").removeClass("active");
        });
      // 안에 [들어가기]  버튼 필요할 경우 코드
      // $(".info_desc").append(
      //   "<div class='enter-btn'><a href='' class='link'>들어가기</a></div>"
      // );
      //
    }
  }

  initMenu();
  initLobbyModal();

  $(window).on("load resize orientationchange", function () {
    windowWidth = $(window).width();
    initMenu();
    initLobbyModal();
  });

  //
}); //jquery function end
