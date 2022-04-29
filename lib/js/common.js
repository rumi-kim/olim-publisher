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
      el: ".swiper-pagination",
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });

  // footer dropdown
  $(".dropdown_name").on("click", function(){
    $(".ico_act").toggleClass("is_active");
    $(this).siblings(".dropdown_list").slideToggle(200)
  });
})