$(function () {

    const menuBtn = $(".btn_menu"),
        menuModal = $('.modal_menu'),
        menuListBtn = $(".modal_menu .slide_wrapper>li");



    // 햄버거 메뉴 버튼 클릭 
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



    // 메뉴 레이아웃 스크립트 

    let windowWidth = $(window).width();
    let mySwiper = undefined;


    function initMenu() {

        // 2015부터 슬라이드 형식  - swiper on 
        if (windowWidth > 1024) {

            menuListBtn.on("click", function () {

                $(this).addClass("active");
                $(this).siblings().removeClass('active');
            });


            if (mySwiper == undefined) {
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

            }


        } else if (windowWidth < 1025) {
            // 2014이하는 아코디언 메뉴 형식 - swiper off (destory)
            if (mySwiper != undefined) {
                mySwiper.destroy();
                mySwiper = undefined;
            }
            
            menuListBtn.on("click", function () {
                $(this).addClass("active");
                $(this).siblings().removeClass('active');
                $(this).find('ul').stop().slideDown();
                $(this).siblings().find('ul').stop().slideUp();
            });
        }
    }

    initMenu();

    $(window).on("load resize orientationchange", function () {
        windowWidth = $(window).width();
        initMenu();
    });




    //













}); //jquery function end