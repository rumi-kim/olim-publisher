$(function () {

   


    // var =============================================

    const startBtn = $(".btn_start"),
        introSwipeModal = $(".modal_mobile"),
        introVideo = $(".video_main"),
        eachModal = $(".modal_each");

    // ============================================= var



    // 스크롤 가운데 정렬 ============================================================================
    $(window).on("resize load", function () {
        resizeBg();
    });
    function resizeBg() {
        var windowWidth = $(window).width();
        $("body").css("width", windowWidth);

        if (windowWidth > 1024) { // 1025 부터
        } else {
            // 좌우 스크롤 중앙 배치
            let imageBox = $(".scroll"),
                scrollWrapper = $(".wrap_scroll");

            // scroll wrapper 길이의 반
            halfWrapperWidth = imageBox.width() / 2;

            // 현재 디바이스 길이의 반
            let halfDeviceWidth = $(window).width() / 2;
            scrollWrapper.scrollLeft(halfWrapperWidth - halfDeviceWidth);
        }
    }

    // 인트로 (스타트) 버튼 클릭 ============================================================================
    startBtn.click(function () {

        let skipBtn = $(".wrap_introVideo .btn_skip");

        skipBtn.addClass('active');
        introSwipeModal.addClass('active');
        introVideo.trigger("play");
        $(".wrap_intro").fadeOut(1000);
        $("footer").fadeOut(1000);

        // 인트로 영상 스킵버튼 클릭 또는 영상 종료 시 함수 실행
        skipBtn.on('click', function () {
            endIntroVideo();
        });

        introVideo.on("ended", function () {
            endIntroVideo();
        });

        function endIntroVideo(){
            $('.section_intro').fadeOut(2000);
            $('.site_logo').addClass('active');
        }



        // 슬라이드 안내 모달창 제거 (css로 1024부터 노출 컨트롤)
        if (introSwipeModal.hasClass('active')) {
            $('.wrap_scroll').on('touchend', function () {
                introSwipeModal.removeClass('active');
            });
        }


        
    });

    

    // 각 모달창 마우스오버시 노출, ============================================================================
    eachModal.on('mouseenter', function () {
        $(this).find('.box_info').addClass('active');
    }).on('mouseleave', function () {
        $(this).find('.box_info').removeClass('active')
    });
     // 안에 [들어가기]  버튼 필요할 경우 코드 
        // $(".info_desc").append(
        //   "<div class='enter-btn'><a href='' class='link'>들어가기</a></div>"
        // );
        // 


     // 진입영상 function ============================================================================
     const videoAttr = $('[data-video]'); // data-video 속성을 가진 el 추출 

     videoAttr.each(function () { // 각 el 클릭시 해당 href, data-video 값 넘김 
         $(this).on('click', function (e) {
             e.preventDefault();
             let videoUrl = $(this).attr('data-video');
             let pageUrl = $(this).attr('href');
             playMoveVideo(videoUrl, pageUrl);
         });
     });


     function playMoveVideo(videoUrlParam, pageUrlParam) {

         const MoveVideo = $('.video_move');
         const skipBtn = $('.video_move').next('.btn_skip');

         MoveVideo.attr('src', videoUrlParam);
         MoveVideo.fadeIn(2000);
         MoveVideo.prop("muted", false);
         MoveVideo.trigger("play");

            //  3초 후 스킵 버든 노츨
          setTimeout(function () {
            skipBtn.addClass("active");
          }, 3000);

        //   스킵 버튼 클릭 or 진입 영상 종료후 해당 url로 이동
          skipBtn.on('click',function(){
            location.href = pageUrlParam;
          });
         MoveVideo.on("ended", function () {
             location.href = pageUrlParam;
         });
     }



      // 오디오 컨트롤============================================================================
    const soundBtn = $('.btn_sound');
    const mainAudio = $('.audio_main')[0];

    soundBtn.on('click',function(){

        const innerText = $(this).find('.ir_text');

        if($(this).hasClass('active')){
            innerText.text('sound on');
            mainAudio.pause();
            $(this).removeClass('active');
        }else{
            innerText.text('sound off');
            $(this).addClass('active');
            mainAudio.play();
        }
    });





    // function archive =================================================================

    // mobile function 
    function Mobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }
    const isMobile = Mobile();

    if (isMobile || window.devicePixelRatio > 1) { //mobile or tablet device

       

    } else { // general pc 

    }

    function playAudio(){

    }









}); //jquery end function