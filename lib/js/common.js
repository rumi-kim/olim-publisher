$(function(){

  // slider
  var swiper = new Swiper(".swiper.main", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
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

  // sub slider
  
  var swiper = new Swiper(".swiper.mini", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1.5,
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

  // footer dropdown
  $(".dropdown_name").on("click", function(){
    $(".ico_act").toggleClass("is_active");
    $(this).siblings(".dropdown_list").slideToggle(200)
  });
})