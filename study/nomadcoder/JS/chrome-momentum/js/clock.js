const clock = document.querySelector('h2#clock')


function getClock(){

  // 생성자를 호출하여 Date객체 사용 (new date object)
  const date = new Date(); 

  // 메서드를 사용하여 현재시간의 반환값을 받는다.
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0"); 

  // padStart : 
  // String에 쓸 수 있는 함수, 
  // 위의 경우 문자열의 길이가 2가 되지 않을 경우 앞에 0을 붙인다. 
  // padEnd => 뒤에 붙임 

  // 반환된 텍스트 값 넣어주기.
  clock.innerText = `${hours}:${minutes}:${seconds}`


}

getClock(); //show clock after page loaded

setInterval(getClock,1000); //매초마다 호출


