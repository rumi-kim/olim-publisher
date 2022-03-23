$(function () {
  // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  const menuBtn = $(".btn_menu.type4");
  menuBtn.on("click", function () {
    $(this).toggleClass("is-active");
    $(".modal_menu").toggleClass("active");
    $("body").toggleClass("fixed");
  });

  $(window).on("load resize orientationchange", function () {
    let wapperWidth = $(window).width();
    let menuBtn = $(".modal_menu .slide_wrapper>li");
    let menuBtnTitle = $(".modal_menu .slide_wrapper>li > div > p");

    if (wapperWidth > 1024) {
      // 1025이상부터 슬라이드 형식

      const nextBtn = $(".btn_slide.next");
      const prevBtn = $(".btn_slide.prev");

      if ($(".swiper-container .swiper-slide").length > 3) {
        const swiper1 = new Swiper(".slide_menu", {
          loop: false,
          slidesPerView: 5,
          direction: getDirection(),
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
          navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
          },
          on: {
            resize: function () {
              swiper1.changeDirection(getDirection());
            },
            load: function () {
              swiper1.changeDirection(getDirection());
            },
          },
        }); // swiper end
      } else {
        // 리스트가 4개 이하일 경우 슬라이드 X, 버튼 노출 X , 가운데 정렬

        nextBtn.addClass("none");
        prevBtn.addClass("none");

        $(".slide_wrapper").css("justify-content", "center");
      }

      function getDirection() {
        let direction = wapperWidth <= 690 ? "vertical" : "horizontal";

        return direction;
      }

      menuBtn
        .on("mouseenter click", function () {
          $(this).addClass("active");
          $(this).find("ul").stop().slideDown();
        })
        .on("mouseleave", function () {
          $(this).removeClass("active");
          $(this).find("ul").stop().slideUp();
        });
    } else {
      menuBtn.on("click", function () {
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
        $(this).find("ul").stop().slideDown();
        $(this).siblings("li").find("ul").stop().slideUp();
      });
    }
  });
}); //end
