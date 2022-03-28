$(function () {
  // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

  const menuBtn = $(".btn_menu"),
    menuModal = $('.modal_menu');
  menuBtn.on("click ", function () {
    if ($(this).hasClass("is-active")) { // 메뉴닫을떄
      $(this).removeClass('is-active');
      $(this).find('.ir_text').text('메뉴열기');
      menuModal.removeClass('active');
      $('body').removeClass('fixed');
    } else { // 메뉴 열때
      $(this).addClass('is-active');
      $(this).find('.ir_text').text('메뉴닫기');
      menuModal.addClass('active');
      $('body').addClass('fixed');
    }
  });

  let menuListBtn = $(".modal_menu .slide_wrapper>li");



  $(window).on("load resize orientationchange", function () {
    let wapperWidth = $(window).width();

    if (wapperWidth > 1024) {
      // 1025이상부터 슬라이드 형식
      const nextBtn = $(".btn_slide.next");
      const prevBtn = $(".btn_slide.prev");

      if ($(".swiper-container .swiper-slide").length > 3) {
        const swiper1 = new Swiper(".swiper_menu", {
          loop: false,
          slidesPerView: 4,
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

      }

      function getDirection() {
        let direction = wapperWidth <= 690 ? "vertical" : "horizontal";

        return direction;
      }


      menuListBtn
        .on("click", function () {
          $(this).toggleClass("active");
          $(this).siblings().removeClass('active');
        });

    } else {

      menuListBtn
        .on("click", function () {
          $(this).toggleClass("active");
          $(this).siblings().removeClass('active');
          $(this).find('ul').stop().slideToggle();
          $(this).siblings().find('ul').stop().slideUp();
        });



    }
  });








}); // jquery function end