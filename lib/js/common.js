$(function(){

  // 최초 페이지 로드시 메인 / 서브 감지해서 active 클래스 제어 
  $(".wrap").hasClass("main") || $(".wrap").hasClass("recruit") ? $(".header").removeClass("is_active") : $(".header").addClass("is_active")

  // slider
  var swiper = new Swiper(".swiper.main", {
    autoplay: {
      delay: 20000,
      disableOnInteraction: false
    },
    effect : "fade",
    fadeEffect: {
      crossFade: true
    },
    speed: 500,
    loop: true,
    pagination: {
      el: ".swiper-pagination.main",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                ' - ' +
                '<span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      nextEl: ".swiper-button-next.main_btn_next",
      prevEl: ".swiper-button-prev.main_btn_prev"
    },
    on: {
      init: function () {
        $(".main.swiper-progress-bar").removeClass("animate");
        $(".main.swiper-progress-bar").removeClass("active");
        $(".main.swiper-progress-bar").eq(0).addClass("animate");
        $(".main.swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".main.swiper-progress-bar").removeClass("animate");
        $(".main.swiper-progress-bar").removeClass("active");
        $(".main.swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".main.swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });

  // main sub slider  
  var swiper = new Swiper(".swiper.mini", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1.675,
    spaceBetween: 90,
    speed: 500,
    loop: true,
    pagination: {
      el: ".swiper-pagination.mini",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                ' - ' +
                '<span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      nextEl: ".mini_btn_next",
      prevEl: ".mini_btn_prev"
    },
    on: {
      init: function () {
        $(".mini.swiper-progress-bar").removeClass("animate");
        $(".mini.swiper-progress-bar").removeClass("active");
        $(".mini.swiper-progress-bar").eq(0).addClass("animate");
        $(".mini.swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".mini.swiper-progress-bar").removeClass("animate");
        $(".mini.swiper-progress-bar").removeClass("active");
        $(".mini.swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".mini.swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });

    // company page sub slider  
    var swiper = new Swiper(".swiper.company_slide", {
      slidesPerView: 3.2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next.main_btn_next",
        prevEl: ".swiper-button-prev.main_btn_prev"
      },
      // mousewheel: {
      //   invert: false,
      // },
    });

  // footer dropdown
  $(".dropdown_name").on("click", function(){
    $(this).toggleClass('is_active');
    $(".ico_act").toggleClass("is_active");
    $(this).siblings(".dropdown_list").slideToggle(200)
  });

  // scroll 
  $(window, document).scroll(function(){

    //scroll Top common 변수
    var scrollTopVal = $(window).scrollTop();

    //header scroll
    if($(".wrap").hasClass("main")){

      if(scrollTopVal > $(".section_olim").offset().top - 100){
        $(".header").addClass("is_active");
      } else {
        $(".header").removeClass("is_active");
      }

    } else {
      return false
    }
    
  })

  // click event
  // Top btn
  $(".btn_top").on("click", function(){
    $('body,html').animate({scrollTop: 0}, 400);
    return false
  })
})

