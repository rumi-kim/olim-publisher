$(function () {
  //mobile sub nav
  $(".fix_innernav-top .is_now").parents(".span_12").css("z-index", "1000");
  $(".fix_innernav-top .is_now").click(function () {
    $(".nav_list").slideToggle();
    $(".fix_innernav-top").toggleClass("on_nav");
  });
  $(window).resize(function () {
    if ($(window).width() > 1000) {
      $(".fix_innernav-top .nav_list").css("display", "block");
      $(".fix_innernav-top").removeClass("on_nav");
      $(".fix_innernav-top").parents(".span_12").css("z-index", "10");
    } else {
      $(".fix_innernav-top .nav_list").css("display", "none");
      $(".fix_innernav-top").removeClass("on_nav");
      $(".fix_innernav-top .is_now").parents(".span_12").css("z-index", "1000");
    }
  });
  //calendar_expand
  $(".btn_schedule_more").click(function () {
    $(".prev_schedule").addClass("is_open");
  });

  //quick_menu
  $(function () {
    if ($("#wpadminbar").length > 0) {
      $(".btn_quick_wrap").addClass("is_admin");
    }
    $(".btn_quick_wrap").parents(".widget_text").addClass("is_fixed");
    $(".btn_quick_wrap")
      .parents(".widget_text")
      .children("h4")
      .addClass("ir_text");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 46) {
        $(".btn_quick_wrap").addClass("is_scroll");
      } else {
        $(".btn_quick_wrap").removeClass("is_scroll");
      }
    });
  });

  //btn_top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $(".btn_top_wrap").fadeIn(200);
    } else {
      $(".btn_top_wrap").fadeOut(200);
    }
  });
  $(".btn_top").click(function () {
    $("html,body").stop().animate({ scrollTop: "0" }, 500);
    return false;
  });

  // anker_wrap
  // anker
  // if ($("#wpadminbar").length > 0) {
  //   $(".anker_wrap").addClass("is_admin");
  // }
  // $(".anker_item>a").click(function () {
  //   var anker_item = $(this).attr("data-href");
  //   var anker_offset = $(anker_item).offset().top;
  //   $(".anker_item").removeClass("is_active");
  //   $('.anker_item>a[data-href="' + anker_item + '"]').parent("li").addClass("is_active");

  //   $("body,html").animate({ scrollTop: anker_offset }, 300);
  //   return false;
  // });

  // // anker box left
  // var content_top = $("#anker_wrap").offset().top;
  // $(window).scroll(function () {
  //   sct = $(window).scrollTop();
  //   if (sct >= content_top - 44) {
  //     $(".anker_wrap").addClass("is_fixed").fadeIn(200);
  //   } else if (sct >= content_top - 76) {
  //     $(".anker_wrap.is_admin").addClass("is_fixed").fadeIn(200);
  //   } else {
  //     $(".anker_wrap").removeClass("is_fixed").fadeOut(200);
  //   }

  //   var first_top = $("#anker_wrap").offset().top;
  //   var second_top = $("#btn_group_wrap").offset().top;
  //   var third_top = $("#cont_w").offset().top;
  //   if (sct >= first_top && sct < second_top) {
  //     $(".anker_item").removeClass("is_active");
  //     $('.anker_item>a[data-href="#anker_wrap"]')
  //       .parent("li")
  //       .addClass("is_active");
  //   } else if (sct >= second_top && sct < third_top) {
  //     $(".anker_item").removeClass("is_active");
  //     $('.anker_item>a[data-href="#btn_group_wrap"]')
  //       .parent("li")
  //       .addClass("is_active");
  //   } else if (sct >= third_top) {
  //     $(".anker_item").removeClass("is_active");
  //     $('.anker_item>a[data-href="#cont_w"]')
  //       .parent("li")
  //       .addClass("is_active");
  //   } else {
  //     $(".anker_item").removeClass("is_active");
  //   }
  // });

  // //inner_anker
  // if ($("#wpadminbar").length > 0) {
  //   $(".inner_anker_wrap").addClass("is_admin");
  // }
  // $(".anker_item>a").click(function () {
  //   var anker_item = $(this).attr("data-href");
  //   var anker_offset = $(anker_item).offset().top;
  //   $(".anker_item").removeClass("is_active");
  //   $('.anker_item>a[data-href="' + anker_item + '"]')
  //     .parent("li")
  //     .addClass("is_active");
  //   $("body,html").animate({ scrollTop: anker_offset }, 300);
  // });

  //anker box left
  var content_top = $("#anker_wrap").offset().top;
  console.log(content_top);
  $(window).scroll(function () {
    sct = $(window).scrollTop();

    // if (sct >= content_top - 44) {
    //   $(".inner_anker_wrap").addClass("is_fixed");
    // } else if (sct >= content_top - 76) {
    //   $(".inner_anker_wrap.is_admin").addClass("is_fixed");
    // } else {
    //   $(".inner_anker_wrap").removeClass("is_fixed");
    // }

    var first_top = $("#anker_wrap").offset().top;
    var second_top = $("#btn_group_wrap").offset().top;
    var third_top = $("#cont_w").offset().top;
    if (sct >= first_top && sct < second_top) {
      $(".anker_item").removeClass("is_active");
      $('.anker_item>a[data-href="#anker_wrap"]')
        .parent("li")
        .addClass("is_active");
    } else if (sct >= second_top && sct < third_top) {
      $(".anker_item").removeClass("is_active");
      $('.anker_item>a[data-href="#btn_group_wrap"]')
        .parent("li")
        .addClass("is_active");
    } else if (sct >= third_top) {
      $(".anker_item").removeClass("is_active");
      $('.anker_item>a[data-href="#cont_w"]')
        .parent("li")
        .addClass("is_active");
    } else {
      $(".anker_item").removeClass("is_active");
    }
  });

  //   anker box custom
  $(window).scroll(function () {
    sct = $(window).scrollTop();
    // console.log(sct);
    var firstChild = $(".anker_menu").children().first();
    var secondChild = $(".anker_menu").children().eq(1);
    var lastChild = $(".anker_menu").children().last();

    if (sct < 960) {
      secondChild.removeClass("is_active");
      lastChild.removeClass("is_active");
      firstChild.addClass("is_active");
      firstChild.children("a").css("opacity", 1);
      secondChild.children("a").css("opacity", 0);
      lastChild.children("a").css("opacity", 0);
    } else if (sct < 1920) {
      secondChild.addClass("is_active");
      lastChild.removeClass("is_active");
      firstChild.removeClass("is_active");
      firstChild.children("a").css("opacity", 0);
      secondChild.children("a").css("opacity", 1);
      lastChild.children("a").css("opacity", 0);
    } else {
      secondChild.removeClass("is_active");
      lastChild.addClass("is_active");
      firstChild.removeClass("is_active");
      firstChild.children("a").css("opacity", 0);
      secondChild.children("a").css("opacity", 0);
      lastChild.children("a").css("opacity", 1);
    }
  });

  //form custom
  //placeholder
  // $.fn.placeHolder = function () {
  //   return this.each(function () {
  //     var $obj = $(this),
  //       $input = $obj.find(".inp_txt"),
  //       $placeholderTxt = $obj.find(".placeholder");

  //     $input.each(function () {
  //       if ($(this).val().length) {
  //         $(this).addClass("focus");
  //         $(this).parents(".inp_txt_wrap").addClass("is_focus");
  //       }
  //     });

  //     $input.on({
  //       focus: function () {
  //         $(this).addClass("focus");
  //         $(this).parents(".inp_txt_wrap").addClass("is_focus");
  //       },
  //       blur: function () {
  //         if ($(this).val().length) {
  //           $(this).addClass("focus");
  //           $(this).parents(".inp_txt_wrap").addClass("is_focus");
  //         } else {
  //           $(this).removeClass("focus");
  //           $(this).parents(".inp_txt_wrap").removeClass("is_focus");
  //         }
  //       },
  //     });

  //     $placeholderTxt.on({
  //       click: function () {
  //         $(this).next($input).addClass("focus").focus();
  //         $(this).parents(".inp_txt_wrap").addClass("is_focus");
  //       },
  //     });
  //   });
  // };
  // $("input,textarea").keyup(function () {
  //   if ($(this).val().length) {
  //     $(this).prev("span.placeholder").hide();
  //   } else {
  //     $(this).prev("span.placeholder").show();
  //   }
  // });
  //custom select
  // var select = $("select");
  // select.change(function () {
  //   var select_name = $(this).children("option:selected").text();
  //   $(this).siblings("label").text(select_name);
  // });
  // select.focusin(function () {
  //   $(this).siblings("label").addClass("focus");
  // });
  // select.focusout(function () {
  //   $(this).siblings("label").removeClass("focus");
  // });

  // $(".inp_txt_wrap").placeHolder();
  // $(".txtarea_wrap")
  //   .find(".txtarea")
  //   .focusin(function () {
  //     $(this).addClass("focus").focus();
  //   });
  // $(".txtarea_wrap")
  //   .find(".txtarea")
  //   .focusout(function () {
  //     if ($(this).val().length) {
  //     } else {
  //       $(this).removeClass("focus").blur();
  //     }
  //   });
  //checkbox all select
  // $(function () {
  //   $(".input_check_wrap #select_all").click(function () {
  //     if ($(".input_check_wrap #select_all").is(":checked")) {
  //       $(".input_check_wrap input[type='checkbox']").prop("checked", true);
  //       //하나 선택 취소 시 전체 선택 체크 해제
  //       $(".input_check_wrap input[type='checkbox']").click(function () {
  //         if ($(".input_check_wrap #select_all").is(":checked")) {
  //           if ($(this).attr("id") !== "select_all") {
  //             $(".input_check_wrap #select_all").prop("checked", false);
  //           }
  //         }
  //       });
  //     } else {
  //       $(".input_check_wrap input[type='checkbox']").prop("checked", false);
  //     }
  //   });
  // });
});
