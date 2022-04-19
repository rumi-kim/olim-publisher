$(function () {
  // iframe protocol check
  var iframeDom = $(".contents.company_site .site_embed");
  if (iframeDom.length) {
    var iframeProtocol = iframeDom.attr("src").split("://");
    if (iframeProtocol[0] === "http") {
      iframeDom.remove();

      $(".contents.company_site").append(
        '<div class="site_embed_noti">해당 사이트는 보안 프로토콜사용의 이슈로 새창에서 확인 할 수 있습니다.<br><small>The site can be checked in the new window as an issue of using the security protocol.</small> <div class="btn_wrap"> <button class="btn btn_site" type="button"><span>사이트 바로가기 (Open Site)</span></button> </div> </div>'
      );
      $(".btn_site").click(function () {
        window.open(iframeDom.attr("src"));
      });
    }
  }
  // 1depth nav in modal responsive event
  function subNav() {
    var htmlWidth = $(".depth1_menu-list").width();
    var sum = 0;
    $(".depth1_menu-item").each(function () {
      sum += $(this).outerWidth();
    });
    if ($(".depth1_menu").hasClass("is_single")) {
      $(".depth1_menu-item").each(function () {
        sum = $(this).outerWidth();
        sum += $(this).outerWidth();
      });
    }

    if (htmlWidth < sum) {
      $(".owl-stage").css("width", "1970px");
      $(".depth1_menu-list").css({
        position: "static",
        width: "100%",
        "padding-right": "40px",
      });
      $(".depth1_menu-list").owlCarousel({
        looop: false,
        nav: false,
        dots: false,
        autoWidth: true,
        startPosition: "URLHash",
        URLhashListener: true,
      });
      var nowLoaction = location.href;
      if (nowLoaction.indexOf("selected") > -1) {
      } else {
        location.replace(nowLoaction + "#is_selected");
      }

      if ($("body").hasClass("style_dropdown") && htmlWidth < 1025) {
        $(".depth1_menu").removeClass("is_opend");
        $(".depth1_menu-list").removeAttr("style");
        $(".depth1_menu-list").owlCarousel("destroy");
      }
    } else {
      $(".depth1_menu-list").removeAttr("style");
      $(".depth1_menu-list").owlCarousel("destroy");
    }
  }

  $(window).resize(function () {
    subNav();
    $(".depth1_menu").removeClass("is_opend");
  });

  if ($(".depth1_menu-item").length < 2) {
    $(".depth1_menu").addClass("is_single");
  } else {
    $(".depth1_button").click(function () {
      $(".depth1_menu").toggleClass("is_opend");
      $(".depth1_menu-list").stop().slideToggle();
    });
  }

  function sideNav() {
    var htmlWidth = $("html").outerWidth();
    if (htmlWidth >= 1025) {
      $(".depth2_menu-list").owlCarousel("destroy");
      var sumH = 0;
      $(".depth2_menu-item").each(function () {
        sumH += $(this).outerHeight();
      });
      var dep2_h = sumH + 200;
      $(".depth2_menu-list").css("height", dep2_h + "px");
    } else {
      $(".depth2_menu-list").css("height", "auto");
      $(".owl-stage").css("width", "1970px");
      $(".depth2_menu-list").owlCarousel({
        looop: false,
        nav: false,
        dots: false,
        autoWidth: true,
      });
    }
  }

  $(window).resize(function () {
    sideNav();
  });

  // $('.depth1_menu-item').click(function(){sideNav();});
  $(document).on("click", ".depth1_menu-item", function () {
    sideNav();
  });

  $(window).ready(function () {
    setTimeout(function () {
      subNav();
      sideNav();
    }, 1000);
  });
});
