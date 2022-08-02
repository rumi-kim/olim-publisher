const API_KEY = "48451c7b7ea81b5a877acff779077eac"

function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  // console.log(position, lat, lon)
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector('#weather span:last-child')

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}


function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //브라우저에서 위치 좌표 얻기


// getCurrentPosition 
// 총2개의 인자가 필요. 
// 1. 정상시 호출 함수
// 2. 에러시  호출 함수 