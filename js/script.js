$(function () {

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






    function initMenu() {
        let windowWidth = $(window).width();
        let mySwiper;

        if (windowWidth < 1025) {
            let mySwiper = undefined;
        }


        if (windowWidth > 1024 && mySwiper == undefined) { // pc - swiper on 
            mySwiper = new Swiper(".swiper_menu", {
                loop: false,
                slidesPerView: 4,
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
        } else if (windowWidth < 1025 && mySwiper != undefined) { // mobile - swiper off (destory)
            mySwiper.destroy();
            mySwiper = undefined;
        }
    }


    initMenu();





    $(window).on("load resize orientationchange", function () {
        initMenu();
        windowWidth = $(window).width();
    });













}); //jquery function end