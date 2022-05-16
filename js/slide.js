
function mobileFunc() {
  let innerMenuItem = $(".wrap_modal .slide_wrapper>li");
  const menuBtn = $(".btn_menu");
  menuBtn.on("click", function () {
    $(this).toggleClass("is-active");
    if ($(this).hasClass("is-active")) {
      $(".wrap_modal").addClass("active");
      $("body").addClass("fixed");
    } else {
      $(".wrap_modal").removeClass("active");
      $("body").removeClass("fixed");
      innerMenuItem.removeClass("open");
    }
  });
  // pcFunc ();

  innerMenuItem.on("click", function () {
    $(this).toggleClass("open");
    if($(this).hasClass("open")){
      $(this).siblings("li").removeClass("open");
    }
  });
}


$(function () {
  // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  // const menuBtn = $(".btn_menu");
  // menuBtn.on("click", function () {
  //   $(this).toggleClass("is-active");
  //   if ($(this).hasClass("is-active")) {
  //     $(".wrap_modal").addClass("active");
  //     $("body").addClass("fixed");
  //   } else {
  //     $(".wrap_modal").removeClass("active");
  //     $("body").removeClass("fixed");
  //   }
  // });

  // $(window).on("load",function(){
  //   $(".slide_container").mCustomScrollbar({
  //     theme: "minimal",
  //     mouseWheelPixels: 100,
  //     scrollInertia : 400
  //   });
  // });



  
  // $(window).on("load resize orientationchange", function () {
  //   let wapperWidth = $(window).width();
  //   // let innerMenuItem = $(".wrap_modal .slide_wrapper>li");
  //   // let innerMenuTitle = $(".wrap_modal .slide_wrapper>li > div > p");

  //   if (wapperWidth > 1024) {
  //     // 1025이상부터 슬라이드 형식

  //     const nextBtn = $(".btn_slide.next");
  //     const prevBtn = $(".btn_slide.prev");

  //     if ($(".swiper-container .swiper-slide").length > 3) {
  //       const swiper1 = new Swiper(".wrap_menu .slide_menu", {
  //         loop: false,
  //         slidesPerView: 4,
  //         direction: getDirection(),
  //         spaceBetween: 30,
  //         breakpoints: {
  //           1200: {
  //             spaceBetween: 15,
  //           },
  //           1024: {
  //             slidesPerView: 3,
  //             spaceBetween: 18,
  //           },
  //         },
  //         observer: true,
  //         observeParents: true,
  //         navigation: {
  //           nextEl: nextBtn,
  //           prevEl: prevBtn,
  //         },
  //         on: {
  //           resize: function () {
  //             swiper1.changeDirection(getDirection());
  //           },
  //           load: function () {
  //             swiper1.changeDirection(getDirection());
  //           },
  //         },
  //       }); // swiper end
  //     } else {
  //       // 리스트가 4개 이하일 경우 슬라이드 X, 버튼 노출 X , 가운데 정렬

  //       nextBtn.addClass("none");
  //       prevBtn.addClass("none");

  //       $(".slide_wrapper").css("justify-content", "center");
  //     }

  //     function getDirection() {
  //       let direction = wapperWidth <= 690 ? "vertical" : "horizontal";

  //       return direction;
  //     }

  //     // innerMenuItem
  //     //   .on("mouseenter click", function () {
  //     //     $(this).addClass("active");
  //     //     $(this).find("ul").stop().slideDown();
  //     //   })
  //     //   .on("mouseleave", function () {
  //     //     $(this).removeClass("active");
  //     //     $(this).find("ul").stop().slideUp();
  //     //   });
  //    }  else {
  //     // menuBtn.on("click", function () {
  //     //   if ($(this).hasClass("is-active")) {
  //     //     innerMenuItem.on("click", function () {
  //     //       $(this).addClass("open");
  //     //       $(this).siblings("li").removeClass("open");
            
  //     //       // var child = $(this).children("div");
  //     //       // var child2 = child.children(".menu_2dep");
  //     //       // $(this).addClass("active");
  //     //       // $(this).siblings("li").removeClass("active");
  //     //       // $(this).find("ul").stop().slideDown();
  //     //       // $(this).siblings("li").find("ul").stop().slideUp();
  //     //     });
  //     //   } else {
  //     //     $(this).removeClass("open");
  //     //   }
  //     // });
  //   }
  // });
}); //end
