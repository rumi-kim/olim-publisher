function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longtitude;
  console.log("You live in ", lat, lng)
}


function onGeoError(){
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError) //브라우저에서 위치 좌표 얻기