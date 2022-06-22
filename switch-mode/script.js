'use strict';


const switchBtn = document.querySelector('.btn'),
      wrap = document.querySelector('.wrap');


  switchBtn.addEventListener('click', function () {
    wrap.classList.toggle('darkmode');
  });