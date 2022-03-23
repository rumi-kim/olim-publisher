
        // function media - pc
        function getCoveredScreenRect(modalName, widthP, heightP, leftP, topP) {

            var params = {
                bgWidth: widthP,
                bgHeight: heightP,
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
                targetRect: {
                    left: leftP,
                    top: topP,
                    width: 45,
                    height: 45,
                }
            }

            //   console.log( params.bgWidth, params.bgHeight, params.targetRect.left, params.targetRect.top );

            const width = params.bgWidth //이미지 원본 width
            const height = params.bgHeight //이미지 원본 height
            const rect = Object.assign({}, params.targetRect); //left, top, width, height가 담겨있는 targetRact 객체를 반환
            const wWidth = params.screenWidth || window.innerWidth; //window 디바이스 가로 크기
            const wHeight = params.screenHeight || window.innerHeight; // window 디바이스 세로 크기
            const wRatio = wWidth / width; //디바이스 가로 크기 / 이미지 원본 가로 크기
            const hRatio = wHeight / height; //디바이스 세로 크기 / 이미지 원본 세로 크기
            const bRatio = Math.max(wRatio, hRatio); //가로, 세로 크기 중 가장 큰 숫자 반환 (아마도 가로크기)
            const fWidth = width * bRatio; //이미지 원본 width * 큰 숫자 반환
            const fHeight = height * bRatio; //이미지 원본 height * 큰 숫자 반환
            const oWRatio = rect.width / width; //아이콘 가로 값 / 이미지 원본 width
            const oHRatio = rect.height / height; //아이콘 세로 값 / 이미지 원본 height
            const oTRatio = rect.top / height; //아이콘 위치 좌표 Y축값 / 이미지 원본 height
            const oLRatio = rect.left / width; //아이콘 위치 좌표 X축값 / 이미지 원본 width

            const w = (() => {
                return fWidth * oWRatio;
            })();
            const h = (() => {
                return fHeight * oHRatio;
            })();
            const t = (() => {
                return fHeight * oTRatio - (fHeight - wHeight) / 2;
            })();
            const l = (() => {
                return fWidth * oLRatio - (fWidth - wWidth) / 2;
            })();

            const finRect = {
                width: w,
                height: h,
                top: t,
                left: l,
            };



            //css 제어
            const modalBtn = document.querySelector(`.${modalName}`);

            modalBtn.style.top = finRect.top + 'px';
            modalBtn.style.left = finRect.left + 'px';

        }

        function positioningFunc() {

            let innerW = window.innerWidth;
            let innerH = window.innerHeight;



            if (innerW <= 1024) { // 전부 모바일 디바이스 
                let dW = 1280; // 1024부터 이미지 사이즈는 1280px
                if (innerW > innerH) { // 가로가 긴 형태

                    let ratio = innerW / innerH;

                    let dH = 500;
                    getCoveredScreenRect('modal_sewoon', dW, dH, 600, 50);
                    getCoveredScreenRect('modal_botanik', dW, dH, 900, 70);
                    getCoveredScreenRect('modal_hanho', dW, dH, 700, 300);
                    getCoveredScreenRect('modal_gravity', dW, dH, 400, 230);
                    getCoveredScreenRect('modal_hillstate', dW, dH, 850, 200);

                    if (ratio < 2 && ratio > 1.4) { // 대략 1.7777...
                        let dH = 375;
                        getCoveredScreenRect('modal_botanik', dW, dH, 950, 50);
                        getCoveredScreenRect('modal_hillstate', dW, dH, 880, 150);
                    }

                } else { //세로가 긴 형태

                    let ratio = innerH / innerW;
                    let dH = 900;
                    getCoveredScreenRect('modal_sewoon', dW, dH, 800, 100);
                    getCoveredScreenRect('modal_botanik', dW, dH, 1200, 200);
                    getCoveredScreenRect('modal_hanho', dW, dH, 850, 670);
                    getCoveredScreenRect('modal_gravity', dW, dH, 500, 550);
                    getCoveredScreenRect('modal_hillstate', dW, dH, 1100, 420);

                    if (ratio < 2 && ratio > 1.5) { // 대략 1.7777...
                        let dH = 700;
                        getCoveredScreenRect('modal_sewoon', dW, dH, 1000, 100);
                        getCoveredScreenRect('modal_botanik', dW, dH, 1450, 100);
                        getCoveredScreenRect('modal_hillstate', dW, dH, 1280, 300);
                        getCoveredScreenRect('modal_hanho', dW, dH, 1180, 450);
                    } else if (ratio > 2) {
                        getCoveredScreenRect('modal_sewoon', dW, dH, 1100, 100);
                        getCoveredScreenRect('modal_botanik', dW, dH, 1400, 200);
                        getCoveredScreenRect('modal_hillstate', dW, dH, 1300, 400);
                        getCoveredScreenRect('modal_hanho', dW, dH, 1100, 580);
                    } else if (ratio <= 1.5) {
                        let dH = 1200; // ==> ipad pro 기준..
                        getCoveredScreenRect('modal_gravity', dW, dH, 280, 750);
                        getCoveredScreenRect('modal_sewoon', dW, dH, 720, 200);
                        getCoveredScreenRect('modal_botanik', dW, dH, 1000, 200);
                        getCoveredScreenRect('modal_hillstate', dW, dH, 900, 600);
                        getCoveredScreenRect('modal_hanho', dW, dH, 750, 900);

                        if (innerH <= 1024) {
                            let dH = 1024; // ==> ipad mini 기준..
                            getCoveredScreenRect('modal_botanik', dW, dH, 1200, 200);
                            getCoveredScreenRect('modal_hillstate', dW, dH, 1150, 500);

                        }
                    }

                }

            } else { // 모바일 디바이스에서 볼 일 x ==> 무조건 가로 > 세로 
                let dW = 1920,
                    dH = 1080;
                getCoveredScreenRect('modal_sewoon', dW, dH, 800, 130);
                getCoveredScreenRect('modal_botanik', dW, dH, 1400, 300);
                getCoveredScreenRect('modal_hanho', dW, dH, 800, 720);
                getCoveredScreenRect('modal_gravity', dW, dH, 300, 600);
                getCoveredScreenRect('modal_hillstate', dW, dH, 1280, 500);

            }

        }
        window.addEventListener('load', function () {
            positioningFunc();
        });
        window.addEventListener('resize', function () {
            positioningFunc();
        });