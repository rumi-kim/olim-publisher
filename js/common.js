$(function(){
  let textScrollFunc =  function () {
    //pageXOffset,  pageYOffset : scroll X축, Y축이 각각 얼마나 움직이는지를 수치로 반환. -> 객체형태.
    let scrollObject = {
        x: window.pageXOffset,
        y: window.pageYOffset
    }
    // console.log(scrollObject);
    // scroll y값 + (윈도우 세로 값*0.5)
    let SC = scrollObject.y + (window.innerHeight*0.5);
    let motionScroll = SC
    let motionEnd = $('.text_scroll_wrap').offset().top + 300
    //X값 움직이는 수치 지정
    let motionVal = (motionEnd-motionScroll)*0.2
    var motionTarget = $('.text_scroll_wrap .text_scroll_box')
  
    motionTarget.eq(0).css('transform','translateX(' + (motionVal-50) + '%)')
    motionTarget.eq(1).css('transform','translateX(' + (-motionVal - 50) + '%)')
    motionTarget.eq(2).css('transform','translateX(' + (motionVal-50) + '%)')
  }
  window.addEventListener("scroll",function(){
    textScrollFunc();
  });
});
